import { useState,useEffect } from "react";
import $ from 'jquery';


export default function JQueryAjaxDemo()
{
    const [products,setProducts]=useState([]);

    useEffect(()=>{

        $.ajax({
            method:"GET",
            url:"https://fakestoreapi.com/products",
            success: function(response){
                setProducts(response);
            }
        })

    },[]);

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