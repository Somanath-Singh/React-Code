import { UseFetchData } from "./hooks/UseFetchData";



export default function CustomeHookDemo()
{

    const data = UseFetchData("https://fakestoreapi.com/products");

    return(
        <div className="container">
            <h2>Product Details</h2>
            <div className="card p-2" style={{width:'250px'}}>
                <img src={data.image} className="card-img-top" height={200} />
                <div className="card-header">
                    <p>{data.title}</p>
                </div>
            </div>
        </div>
    )
}

