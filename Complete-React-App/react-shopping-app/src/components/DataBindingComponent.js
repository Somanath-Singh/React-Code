

export default function DataBindingComponent()
{

    var product={
        Name:'Samsung TV',
        Price: 45.856,
        Stock:true
    }

    // return(
    //     <div className="container">
    //         <h2>Product Details</h2>
    //         <dl>
    //             <dt>Name</dt>
    //             <dd>{product.Name}</dd>
    //             <dd>
    //                 <input type="text" value={product.Name} />
    //             </dd>
    //             <dt>Price</dt>
    //             <dd>{product.Price}</dd>
    //             <dt>Stock</dt>
    //             <dd>{(product.Stock)?"Available":"Out of stock"}</dd>
    //         </dl>
    //     </div>
    // );

    var size={
        width:450,
        height:100
    }

    // return(
    //     <div className="container">
    //         <h2>Property Binding</h2>
    //         <table border="1" width={size.width} height={size.height}> 
    //             <tr>
    //                 <td>Welcome to React</td>
    //                 <td>table don't have height property it is attribute but React use property</td>
    //             </tr>
    //         </table>
    //     </div>
    // );

    var categories= ["All","Electronics","Footware","Fashion"];
    return(
        <div className="container">
            <h2>Categories</h2>
            <ol>
                {
                    //categories.toString()
                    //All,Electronics,Footware
                    //categories.join("-->")
                    //All-->Electronics-->Footware

                    // categories.map(function(category){
                    //     return(
                    //         <li>{category}</li>
                    //     )
                    // })

                    categories.map(category=>
                        <li key={category}>{category}</li>
                    )
                        
                }
            </ol>

            <h2>Select category</h2>
            <select>
                {
                    categories.map(category=>
                        <option key={category} value={category}>{category}</option>
                    )
                }
            </select>
        </div>
    );
}