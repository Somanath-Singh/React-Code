import React from "react";
//import { CardComponent } from "./CardComponent";

import CardComponent from "./CardComponent";


export default class ShoppingClassComponent extends React.Component
{

    constructor(props)
    {
        super(props);
        this.state={
            categories:[],
            products:[],
            cartItems:[],
            itemsCount:0,
            price:0.0
        }
    }

    GetCartItemsCount(){
       this.setState({
        itemsCount:this.state.cartItems.length
       })
    }

    GetCategories(){
        fetch('https://fakestoreapi.com/products/categories')
        .then(response=> response.json())
        .then(data=> {
            data.unshift('all');
            
            this.setState({
                categories:data
            })
        })
    }

    GetProducts(url){
        fetch(url)
        .then(response=> response.json())
        .then(data=>{
            this.setState({
                products:data
            })
        })
    }

    componentDidMount()
    {
        this.GetCategories();
        this.GetProducts();
    }

    HandleCategoryChange(e){
        if(e.target.value=="all"){
            this.GetProducts('https://fakestoreapi.com/products');
        } else {
            this.GetProducts(`https://fakestoreapi.com/products/category/${e.target.value}`)
        }
    }

    HandleAddtoCart(e){
            alert("Item Added to Cart");
            fetch(`https://fakestoreapi.com/products/${e.target.id}`)
            .then(response=> response.json())
            .then(data=>{

                this.state.cartItems.push(data)

                this.setState({
                    price:this.state.price + window.parseFloat(data.price)
                })

                this.GetCartItemsCount();

            })
            
    }

    HandleRemoveCartItem(e)
    {
        
        alert("Remove item from cart ");
        fetch(`https://fakestoreapi.com/products/${e.target.id}`)
        .then(response => response.json())
        .then(data =>{

            this.state.cartItems.pop(data);

            this.setState({
                price:this.state.price - window.parseFloat(data.price)
            })

            this.GetCartItemsCount();
        })
    }

    HandleDeleteAll()
    {
        this.setState({
            cartItems:[],
            price:0,
            itemsCount:0
        })

    }


    render(){
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
                        <select onChange={this.HandleCategoryChange.bind(this)}  className="form-select">
                            {
                                this.state.categories.map(category=>
                                    <option value={category} key={category}>{category.toUpperCase()}</option>
                                    )
                            }
                        </select>
                    </div>
                   </div>
                </nav>
                <main className="col-7 d-flex flex-wrap overflow-auto" style={{height:'600px'}} >
                    {
                        // this.state.products.map(product=>
                        //     <div key={product.id} className="card m-2 p-2" style={{width:'200px'}}>
                        //         <img src={product.image} className="card-img-top" height="150" />
                        //         <div className="card-header" style={{height:'160px'}}>
                        //             <p>{product.title}</p>
                        //         </div>
                        //         <div className="card-body">
                        //             <dl>
                        //                 <dt>Price</dt>
                        //                 <dd>{product.price}</dd>
                        //                 <dt>Rating</dt>
                        //                 <dd>
                        //                     <span className="bi bi-star-fill text-success"></span>
                        //                     {product.rating.rate} <span>[{product.rating.count}]</span>
                        //                 </dd>
                        //             </dl>
                        //         </div>
                        //         <div className="card-footer">
                        //             <button id={product.id} onClick={this.HandleAddtoCart.bind(this)}  className="btn btn-danger w-100">
                        //                 <span className="bi bi-cart4"></span> Add to Cart
                        //             </button>
                        //         </div>
                        //     </div>
                        //     )

                        //OR

                        
                            this.state.products.map(product=>
                                 <CardComponent key={product.id} product={product} />
                                )
                      

                    }
                </main>
                <aside className="col-3">
                    <button className="btn btn-warning w-100">
                        <span className="bi bi-cart3"></span> [{this.state.itemsCount}] Your Cart Items
                    </button>
                    <table className="table table-hover">
                      <thead>
                        <tr>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Preview</th>
                            <th>
                                <button onClick={this.HandleDeleteAll.bind(this)} className="btn btn-danger">
                                    <span className="bi bi-trash"></span>
                                </button>
                            </th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                            this.state.cartItems.map(item=>
                                <tr key={item.id}>
                                    <td>{item.title}</td>
                                    <td>{item.price}</td>
                                    <td>
                                        <img src={item.image} width="50" height="50" />
                                    </td>
                                    <td>
                                        <button onClick={this.HandleRemoveCartItem.bind(this)} id={item.id} className="btn btn-danger">
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
                            <td>{this.state.price}</td>
                        </tr>
                      </tfoot>
                    </table>
                </aside>
              </section>
            </div>
        )
    }
}