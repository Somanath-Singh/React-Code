import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { useCaptch } from "./hooks/UseCaptch";
import SentenceCase from "./hooks/SentenceCase";

// export default function CookieUserLogin()
// {

//     const [cookies, setCookies, removeCookies] = useCookies(['username']);
//     const [userDetails, setUserDetails] = useState({UserName:'',Password:''});

//     function handleUserName(e)
//     {
//         setUserDetails({
//             UserName:e.target.value,
//             Password:userDetails.Password
//         })
//     }

//     function handlePassword(e)
//     {
//         setUserDetails({
//             UserName:userDetails.UserName,
//             Password:e.target.value
//         })
//     }

//     function handleSignout()
//     {
//         removeCookies("username");
//         alert("Signout Successfully ..")
//     }

//     function handleLogin()
//     {
//         setCookies("username",userDetails.UserName,{path:"/",expires:new Date("2024-12-08 17:05")});
//         alert("Login Success ..");
//     }

//     useEffect(()=>{
//         if(cookies.username == undefined)
//         {
//             alert("Please Login ..");
//         }
//     },[])

//     return(
//         <div className="container">
//             <h2>User Login</h2>
//             <dl>
//                 <dt>User name</dt>
//                 <dd><input onChange={handleUserName} type="text" /></dd>
//                 <dt>Password</dt>
//                 <dd><input onChange={handlePassword} type="password" /></dd>
               
//             </dl>
//             <button onClick={handleLogin}>Login</button>
//             <hr />
//             <h3>Home  <button onClick={handleSignout} className="btn btn-link">Singnout</button></h3>
//             <p>Hello ! {cookies.username}</p>
//         </div>
//     )
// }



export default function CookieUserLogin()
{

    const [cookies, setCookies, removeCookies] = useCookies(['username']);

    const [userDetails, setUserDetails] = useState({UserName:'',Password:''});

    const[captcha,setCaptcha] = useState();

    const sentence = SentenceCase("hELLO sOMANATH");

    const Code = useCaptch();

    function handleUserName(e)
    {
        setUserDetails({
            UserName:e.target.value,
            Password:userDetails.Password
        })
    }

    function handlePassword(e)
    {
        setUserDetails({
            UserName:userDetails.UserName,
            Password:e.target.value
        })
    }

    function handleSignout()
    {
        removeCookies("username");
        alert("Signout Successfully ..")
    }

    function handleLogin()
    {
        setCookies("username",userDetails.UserName,{path:"/",expires:new Date("2024-12-08 17:05")});
        alert("Login Success ..");
    }

    useEffect(()=>{
        if(cookies.username == undefined)
        {
            alert("Please Login ..");
        }
    },[])

    function handleCaptcha()
    {
        setCaptcha(Code.code)
    }



    return(
        <div className="container">
            <h2>User Login {sentence}</h2>
            <dl>
                <dt>User name</dt>
                <dd><input onChange={handleUserName} type="text" /></dd>
                <dt>Password</dt>
                <dd><input onChange={handlePassword} type="password" /></dd>
               <dt>Verify Code <button onClick={handleCaptcha} className="btn btn-link">New Code</button></dt>
               <dd>{captcha}</dd>
            </dl>
            <button onClick={handleLogin}>Login</button>
            <hr />
            <h3>Home  <button onClick={handleSignout} className="btn btn-link">Singnout</button></h3>
            <p>Hello ! {cookies.username}</p>
        </div>
    )
}