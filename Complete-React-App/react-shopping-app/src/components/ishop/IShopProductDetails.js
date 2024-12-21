import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { param } from "jquery";
import axios from "axios";


export default function IShopProductDetails()
{

    const  [product,setProduct] = useState([]);

    let param = useParams();

    function loadItems(productNo)
        {
            axios.get(`https://fakestoreapi.com/products/${productNo}`)
            .then(function(response){
                setProduct(response.data);
            }).catch(function(ex){
                console.log(ex);
            })
        }

    useEffect(()=>{

        let id=parseInt(param.id);
        loadItems(id);

    },[])


    return(
        <div>
            <h2>Product Details</h2>

            <ul>
                                <li>Title - {product.title}</li>
                                <li>Price - {product.price}</li>
                                <li>Description - {product.description}</li>
                                <li>Category - {product.category}</li>
                                <li>
                                    <img src={product.image} width={220} height={160} />
                                </li>
                            </ul> 

            <Link to={"/products/" + product.category}>Back to Product</Link>
        </div>
    )
}