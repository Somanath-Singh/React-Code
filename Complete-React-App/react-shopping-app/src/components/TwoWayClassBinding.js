import React from "react";

// export default class TwoWayClassBinding extends React.Component
// {
//     constructor(props)
//     {
//         super(props);

//         this.state = {
//             Title:'Product Details',
//             Name: 'Samsung TV',
//             Price: 56000.66,
//             Stock:true,
//             Cities: ['Delhi','Hyd'],
//             Rating: {rate:4.5,count:6700}
//         }
//     }

//     render()
//     {
//         return(
//             <div className="container">
//                 <h2>{this.state.Title}</h2>
//                 <dl>
//                     <dt>Name</dt>
//                     <dd>{this.state.Name}</dd>
//                     <dt>Price</dt>
//                     <dd>{this.state.Price}</dd>
//                     <dt>Stock</dt>
//                     <dd>{(this.state.Stock)?"Available":"Out of Stack"}</dd>
//                     <dt>Citis</dt>
//                     <dd>
//                         <ol>
//                             {
//                                 this.state.Cities.map(city =>
//                                     <li key={city}>{city}</li>
//                                 )
//                             }
//                         </ol>
//                     </dd>
//                     <dt>Rating</dt>
//                     <dd>{this.state.Rating.rate}[{this.state.Rating.count}]</dd>
                    

//                 </dl>
//             </div>
//         )
//     }
// }

export default class TwoWayClassBinding extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            UserName:'Somanath'
        }
        this.handleUserChange=this.handleUserChange.bind(this);
    }

    handleUserChange(e)
    {
        this.setState({
            UserName:e.target.value
        })
    }

    render()
    {
        return(
            <div className="container">
                <h2>User Details</h2>
                <input type="text" onChange={this.handleUserChange}/>
                <br></br>
                <p>Hello ! {this.state.UserName}</p>
            </div>
        )
    }
}