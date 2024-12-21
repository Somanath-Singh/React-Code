import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { useState } from "react";



export default function IShopLogin()
{

    const navigate=useNavigate();

    const [cookies, setCookies, removeCookies] = useCookies(['username','password']);

    const formik=useFormik({
        initialValues:{
            UserName:'',
            Password:''
        },
        onSubmit:values => {

            alert(JSON.stringify(values));

            if(values.UserName == cookies.username && values.Password == cookies.password)
            {
                navigate("/dashboard");
            }
            else{
                navigate("/errorpage");
            }

        }
    })


    return(
        <div className="container">
            <h2>User Login</h2>
            <form onSubmit={formik.handleSubmit}>
            <dl>
                <dt>User name</dt>
                <dd><input name="UserName" onChange={formik.handleChange} type="text" /></dd>
                <dt>Password</dt>
                <dd><input name="Password" onChange={formik.handleChange} type="password" /></dd>
            </dl>
            <button className="btn btn-primary" type="submit">Login</button>
            </form>
            <hr />
            <Link to="/register">New User !</Link>
            {/* <p>Hello ! {cookies.username}</p> */}
        </div>
    )
}