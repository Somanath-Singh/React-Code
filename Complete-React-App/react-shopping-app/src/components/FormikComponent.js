import { Formik, useFormik } from "formik";

export default function FormikComponent()
{

    const formik=useFormik({

        initialValues:{
            UserName:'',
            Password:'',
            City:'',
            Subscribe:true
        },
        onSubmit:values => {
            alert(JSON.stringify(values));
            alert(`${values.UserName}\nSubscription: ${(values.Subscribe==true)?"Subscribed":"Not Subscribed"}`);
        }
    })


    return(
        <div className="container">
            <h2>Register-User</h2>
            <form onSubmit={formik.handleSubmit}>
            <dl>
                <dt>User Name</dt>
                <dd><input name="UserName" onChange={formik.handleChange} value={formik.values.UserName} type="text" /></dd>
                <dt>Password</dt>
                <dd><input name="Password" onChange={formik.handleChange} value={formik.values.Password} type="password" /></dd>
                <dt>City</dt>
                <dd>
                    <select name="City" onChange={formik.handleChange} value={formik.values.City}>
                        <option >Delhi</option>
                        <option>Hyd</option>
                    </select>
                </dd>
                <dt>Subscribe</dt>
                <dd className="form-switch">
                    <input className="form-check-input" type="checkbox" name="Subscribe" checked={formik.values.Subscribe} onChange={formik.handleChange}/>
                </dd>
            </dl>
            <button type="submit">Submit</button>
            </form>
        </div>
    )
}