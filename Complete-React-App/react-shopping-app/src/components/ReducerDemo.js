import { type } from "@testing-library/user-event/dist/type";
import { useReducer,useState,useEffect } from "react"

import { UseFetchData } from "./hooks/UseFetchData";

// var initialState={count: 0};

// function reducer(state,action){
//     switch(action.type)
//     {
//         case 'like':
//             return {count: state.count + 1};
        
//         case 'dislike':
//             return {count: state.count - 1};
//     }
// }

// export default function ReducerDemo()
// {

//     const [state, dispatch] = useReducer(reducer,initialState);

//     function handleLikeClick()
//     {
//         dispatch({
//             type:'like'
//         });
//     }

//     function handleDisLikeClick()
//     {
//         dispatch({
//             type:'dislike'
//         });
//     }

//     return(
//         <div className="container">
//             <h2>Likes Counter - {state.count}</h2>
//             <button onClick={handleLikeClick}>Like</button>&nbsp;&nbsp;
//             <button onClick={handleDisLikeClick}>DisLike</button>
//         </div>
//     )
// }




var initialState={likes: 0, dislikes: 0};

function reducer(state,action){
    switch(action.type)
    {
        case 'like':
            return {likes: parseInt(state.likes) + 1, dislikes: state.dislikes};
        
        case 'dislike':
            return {dislikes: parseInt(state.dislikes) - 1, likes: state.likes};
    }
}

export default function ReducerDemo()
{

    const [state, dispatch] = useReducer(reducer,initialState);

    //const [product,setProduct] = useState({});

    const product = UseFetchData("https://fakestoreapi.com/products/2");

    // function getProduct()
    // {
    //     fetch("https://fakestoreapi.com/products/2")
    //     .then(response => response.json())
    //     .then(data => {
    //         setProduct(data);
    //     })
    // }

    // useEffect(()=>{

    //     getProduct();

    // },[])



    function handleLikeClick()
    {
        dispatch({
            type:'like'
        });
    }

    function handleDisLikeClick()
    {
        dispatch({
            type:'dislike'
        });
    }

    return(
        <div className="container">
            <h2>Product Details</h2>
            <div className="card p-2" style={{width:'250px'}}>
                <img src={product.image} className="card-img-top" height={200} />
                <div className="card-header">
                    <p>{product.title}</p>
                </div>
                <div className="card-footer">
                [{state.likes}]<button className="btn btn-primary m-1" onClick={handleLikeClick}><span className="bi bi-hand-thumbs-up"></span></button>
                [{state.dislikes}]<button className="btn btn-danger m-1" onClick={handleDisLikeClick}><span className="bi bi-hand-thumbs-down"></span></button>
                </div>
            </div>
            
        </div>
    )
}