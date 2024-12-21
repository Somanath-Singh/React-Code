import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { param } from "jquery";
import axios from "axios";

export default function IShopProducts()
{
    const [category, setCategory] = useState();

    const  [products,setProducts] = useState([]);

    let param = useParams();

    function loadProducts()
        {
            axios.get("https://fakestoreapi.com/products")
            .then(function(response){
                setProducts(response.data);
            }).catch(function(ex){
                console.log(ex);
            })
        }

    useEffect(()=>{
        setCategory(param.category);
        loadProducts();
    },[])


    return(
        <div>
            <h2>{category} List</h2>

            <ol>
                {
                    products.filter(item => item.category == category).map(product =>
                        <li key={product.id}>
                            <ul>
                                <li key={product.title}><Link to={"/details/" + product.id}>{product.title}</Link></li>
                                <li key={product.price}>{product.price}</li>
                                <li key={product.description}>{product.description}</li>
                                <li key={product.category}>{product.category}</li>
                                <li>
                                    <img src={product.image} width={150} height={100} />
                                </li>
                            </ul>
                        </li>
                    )
                }
            </ol>


            <div>
                <Link to="/dashboard">Back to Categories</Link>
            </div>
        </div>
    )
}