

export default function DataBinding()
{
    var products=[
        {Name:'Samsung TV',Price:50000.0},
        {Name:'Shoes',Price:5000.0}
    ]

    // return(
    //     <div className="container">
    //         <h2>Product table</h2>
    //         <table className="table table-hover">
    //             <thead>
    //                 <tr>
    //                     <th>Name</th>
    //                     <th>Price</th>
    //                 </tr>
    //             </thead>
    //             <tbody>
    //                 {
    //                     products.map(product=>
    //                         <tr>
    //                             <td>{product.Name}</td>
    //                             <td>{product.Price}</td>
    //                         </tr>
    //                     )
    //                 }
    //             </tbody>
    //         </table>
    //     </div>
    // )

    var menu=[
        {Category:"Electronics",Products:["Samsung TV","Mobile"]},
        {Category:"Footware",Products:["Nike Casuals","Lee Boot"]}
    ]

    return(
        <div className="container">
            <h2>Categories</h2>
            <ol>
                {
                    menu.map(item=>
                        <li key={item.Category}>
                            {item.Category}
                            <ul>
                                {
                                   item.Products.map(product=>
                                    <li key={product}>{product}</li>
                                   ) 
                                }
                            </ul>
                        </li>
                        
                    )
                }
            </ol>

            <h2>Select products</h2>
            <select>
                {
                    menu.map(item=>
                        <optgroup key={item.Category} label={item.Category}>
                            {
                                item.Products.map(product=>
                                    <option key={product}>{product}</option>
                                )
                            }
                        </optgroup>
                    )
                }
            </select>
        </div>
    )
}