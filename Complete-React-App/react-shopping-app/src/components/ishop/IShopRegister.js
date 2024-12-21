import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import axios from "axios";
import { useCookies } from "react-cookie";



export default function IShopRegister()
{

    let navigate=useNavigate();

    function HandleButtonClick()
    {
        navigate("/login");
    }

    const [cookies, setCookies, removeCookies] = useCookies(['username','password']);

    const formik=useFormik({

        initialValues:{
            UserId:'',
            UserName:'',
            Password:'',
            Age:0,
            City:'',
            Mobile:'',
            Subscribe:true
        },
        onSubmit:values => {
            alert(JSON.stringify(values));
            
            setCookies("username",values.UserName);
            setCookies("password",values.Password);
            
            alert("Login Success ..");

            //navigate("/login");
            HandleButtonClick();
        }
    })

    return(
        <div>

            <h2>Register-User</h2>
            <form onSubmit={formik.handleSubmit}>
            <dl>
                <dt>User Id</dt>
                <dd><input name="UserId" onChange={formik.handleChange} value={formik.values.UserId} type="text" /></dd>
                <dt>User Name</dt>
                <dd><input name="UserName" onChange={formik.handleChange} value={formik.values.UserName} type="text" /></dd>
                <dt>Password</dt>
                <dd><input name="Password" onChange={formik.handleChange} value={formik.values.Password} type="password" /></dd>
                <dt>Age</dt>
                <dd><input name="Age" onChange={formik.handleChange} value={formik.values.Age} type="text" /></dd>
                
                <dt>City</dt>
                <dd>
                    <select name="City" onChange={formik.handleChange} value={formik.values.City}>
                        <option >Delhi</option>
                        <option>Hyd</option>
                    </select>
                </dd>
                <dt>Mobile</dt>
                <dd><input name="Mobile" onChange={formik.handleChange} value={formik.values.Mobile} type="text" /></dd>
                <dt>Subscribe</dt>
                <dd className="form-switch">
                    <input className="form-check-input" type="checkbox" name="Subscribe" checked={formik.values.Subscribe} onChange={formik.handleChange}/>
                </dd>
            </dl>
            <button className="btn btn-primary" type="submit">Submit</button>
            </form>

            <Link to="/login">Already have an account</Link>
        
        </div>
    )
}