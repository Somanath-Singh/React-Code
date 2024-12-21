import { useCookies } from "react-cookie";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";



export default function IShopDashboard()
{

    const [cookies, setCookies, removeCookies] = useCookies(['username','password']);

    const [userName,setUserName]=useState();

    const  [categories,setCategories] = useState([]);

    let navigate=useNavigate();

    function loadCategories()
    {
        axios.get("https://fakestoreapi.com/products/categories")
        .then(function(response){
            setCategories(response.data);
        }).catch(function(ex){
            console.log(ex);
        })
    }



    useEffect(()=>{

       if(cookies["username"] == undefined)
       {
        navigate("/login");
       }
       else
       {
        setUserName(cookies.username);
        loadCategories();
       }

    },[])

    function handleSignout()
    {
        removeCookies("username");
        removeCookies("password");
        navigate("/login");
    }


    return(
        <div>

            <h2>Shopping DashBoard   -  <span className="text-success">{userName}</span>     -    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button onClick={handleSignout} className="btn btn-primary">Signout</button></h2>
            <h3>Product Categories - {categories.length}</h3>
            <ol>
                {
                    categories.map(item => 
                        <li key={item}><Link to={"/products/" + item}>{item.toUpperCase()}</Link></li>
                    )
                }
            </ol>

        
        </div>
    )
}