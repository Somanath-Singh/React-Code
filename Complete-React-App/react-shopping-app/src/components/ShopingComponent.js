// import { useState, useEffect } from "react";

// export default function ShoppingComponent()
// {
//     const [categories, setCategories] = useState([]);
//     const [products, setProducts] = useState([]);

//     function LoadCategories(){
//         fetch('https://fakestoreapi.com/products/categories')
//         .then(response=> response.json())
//         .then(data=> {
//             data.unshift('All');
//             setCategories(data);
//         })
//     }

//     function LoadProducts(){
//         fetch('https://fakestoreapi.com/products')
//         .then(response=> response.json())
//         .then(data=>{
//             setProducts(data);
//         })
//     }

//     useEffect(()=>{
//         LoadCategories();
//         LoadProducts();
//     },[])


//     return(
//         <div className="container">
//           <header className="bg-danger text-white text-center p-2">
//              <h1> <span className="bi bi-cart"></span> Shopping Home</h1>
//           </header>
//           <section className="row">
//             <nav className="col-3">
//                <div>
//                 <label>Select a Category</label>
//                 <div>
//                     <select className="form-select">
//                         {
//                             categories.map(category=>
//                                 <option key={category}>{category.toUpperCase()}</option>
//                                 )
//                         }
//                     </select>
//                 </div>
//                </div>
//             </nav>
//             <main className="col-9 d-flex flex-wrap overflow-auto" style={{height:'600px'}} >
//                 {
//                     products.map(product=>
//                         <div key={product.id} className="card m-2 p-2 w-25">
//                             <img src={product.image} className="card-img-top" height="150" />
//                             <div className="card-header">
//                                 <p>{product.title}</p>
//                             </div>
//                             <div className="card-body">
//                                 <dl>
//                                     <dt>Price</dt>
//                                     <dd>{product.price}</dd>
//                                     <dt>Rating</dt>
//                                     <dd>
//                                         <span className="bi bi-star-fill text-success"></span>
//                                         {product.rating.rate} <span>[{product.rating.count}]</span>
//                                     </dd>
//                                 </dl>
//                             </div>
//                         </div>
//                         )
//                 }
//             </main>
//           </section>
//         </div>
//     )
// }


import { useState, useEffect } from "react";

export default function ShoppingComponent()
{
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [itemsCount, setItemsCount] = useState(0);
    const [price,setPrice] = useState(0.0);

    function GetCartItemsCount(){
        setItemsCount(cartItems.length);
    }

    function LoadCategories(){
        fetch('https://fakestoreapi.com/products/categories')
        .then(response=> response.json())
        .then(data=> {
            data.unshift('all');
            setCategories(data);
        })
    }

    function LoadProducts(url){
        fetch(url)
        .then(response=> response.json())
        .then(data=>{
            setProducts(data);
        })
    }

    useEffect(()=>{
        LoadCategories();
        LoadProducts('https://fakestoreapi.com/products');
    },[cartItems.length])


    function handleCategoryChange(e){
        if(e.target.value=='all'){
            LoadProducts('https://fakestoreapi.com/products');
        } else {
        LoadProducts(`https://fakestoreapi.com/products/category/${e.target.value}`)
        }
    }

    function handleAddtoCart(e){
            alert("Item Added to Cart");
            fetch(`https://fakestoreapi.com/products/${e.target.id}`)
            .then(response=> response.json())
            .then(data=>{
                cartItems.push(data);
                setPrice(price + window.parseFloat(data.price));
                GetCartItemsCount();

            })
            
    }

    function handleRemoveCartItem(e)
    {
        
        alert("Remove item from cart ");
        fetch(`https://fakestoreapi.com/products/${e.target.id}`)
        .then(response => response.json())
        .then(data =>{
            cartItems.pop(data);
            setPrice(price - window.parseFloat(data.price));
            GetCartItemsCount();
        })
    }

    function handleDeleteAll()
    {
        setCartItems([]);
        setPrice(0);
    }

    return(
        <div className="container">
          <header className="bg-danger text-white text-center p-2">
             <h1> <span className="bi bi-cart"></span> Shopping Home</h1>
          </header>
          <section className="row mt-3">
            <nav className="col-2">
               <div>
                <label>Select a Category</label>
                <div>
                    <select onChange={handleCategoryChange} className="form-select">
                        {
                            categories.map(category=>
                                <option value={category} key={category}>{category.toUpperCase()}</option>
                                )
                        }
                    </select>
                </div>
               </div>
            </nav>
            <main className="col-7 d-flex flex-wrap overflow-auto" style={{height:'600px'}} >
                {
                    products.map(product=>
                        <div key={product.id} className="card m-2 p-2" style={{width:'200px'}}>
                            <img src={product.image} className="card-img-top" height="150" />
                            <div className="card-header" style={{height:'160px'}}>
                                <p>{product.title}</p>
                            </div>
                            <div className="card-body">
                                <dl>
                                    <dt>Price</dt>
                                    <dd>{product.price}</dd>
                                    <dt>Rating</dt>
                                    <dd>
                                        <span className="bi bi-star-fill text-success"></span>
                                        {product.rating.rate} <span>[{product.rating.count}]</span>
                                    </dd>
                                </dl>
                            </div>
                            <div className="card-footer">
                                <button id={product.id} onClick={handleAddtoCart} className="btn btn-danger w-100">
                                    <span className="bi bi-cart4"></span> Add to Cart
                                </button>
                            </div>
                        </div>
                        )
                }
            </main>
            <aside className="col-3">
                <button className="btn btn-warning w-100">
                    <span className="bi bi-cart3"></span> [{itemsCount}] Your Cart Items
                </button>
                <table className="table table-hover">
                  <thead>
                    <tr>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Preview</th>
                        <th>
                            <button onClick={handleDeleteAll} className="btn btn-danger">
                                <span className="bi bi-trash"></span>
                            </button>
                        </th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                        cartItems.map(item=>
                            <tr key={item.id}>
                                <td>{item.title}</td>
                                <td>{item.price}</td>
                                <td>
                                    <img src={item.image} width="50" height="50" />
                                </td>
                                <td>
                                    <button onClick={handleRemoveCartItem} id={item.id} className="btn btn-danger">
                                        <span className="bi bi-trash"></span>
                                    </button>
                                </td>
                            </tr>
                            )
                    }
                  </tbody>
                  <tfoot>
                    <tr>
                        <th>Total Price</th>
                        <td>{price}</td>
                    </tr>
                  </tfoot>
                </table>
            </aside>
          </section>
        </div>
    )
}

