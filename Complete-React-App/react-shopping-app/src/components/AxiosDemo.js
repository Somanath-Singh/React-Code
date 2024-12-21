import axios from "axios";
import { useEffect, useState } from "react"


export default function AxiosDemo()
{

    const  [products,setProducts] = useState([]);

    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products")
        .then(function(response){
            setProducts(response.data);
        }).catch(function(ex){
            console.log(ex);
        })
    },[])

    
    return(
        <div className="container">
            <h2>Product Details</h2>
            console.log({products.length})
            <ol>
                {
                    products.map(product =>
                        <li key={product.id}>
                            <ul>
                                <li key={product.price}>{product.price}</li>
                                <li key={product.title}>{product.title}</li>
                                <li key={product.description}>{product.description}</li>
                                <li>
                                    <img src={product.image} width={150} height={100} />
                                </li>
                            </ul>
                        </li>
                    )
                }
            </ol>
        </div>
    )
}