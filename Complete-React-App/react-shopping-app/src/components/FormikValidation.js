import { Formik, useFormik } from "formik"

export default function FormikValidation()
{

    function VerifyUserDetails(UserDetails)
    {
        const errors = {};

        if(UserDetails.UserName == ""){
            errors.UserName="User Name Required";
        }else if(UserDetails.UserName.length < 4){
            errors.UserName="Name too short";
        }else if(UserDetails.UserName.length > 10){
            errors.UserName="Name too long";
        }

        if(UserDetails.Age == ""){
            errors.Age="Age Required";
        }else if(isNaN(UserDetails.Age)){
            errors.Age="Age must be a Number";
        }

        if(UserDetails.Email == ""){
            errors.Email="Email Required";
        }else if(UserDetails.Email.indexOf("@") <= 2){
            errors.Email="Invalid Email";
        }

        if(UserDetails.Mobile == ""){
            errors.Mobile="Mobile Number Required";
        }else if(UserDetails.Mobile.match(/\+91\d{10}/)){
            errors.Mobile="";
        }else{
            errors.Mobile="Invalid Mobile";
        }
        
        return errors;
    }

    const formik = useFormik({
        initialValues:{
            UserName:'',
            Age:0,
            Email:'',
            Mobile:''
        },
        validate:VerifyUserDetails,
        onSubmit:values =>{
            alert(JSON.stringify(values));
        }
    })


    return(
        <div className="container">
            <form onSubmit={formik.handleSubmit}>
                <h2>Register User</h2>
                <dl>
                    <dt>User Name</dt>
                    <dd><input name="UserName" onChange={formik.handleChange} type="text" /></dd>
                    <dd className="text-danger">{formik.errors.UserName}</dd>
                    <dt>Age</dt>
                    <dd><input name="Age" onChange={formik.handleChange} type="text" /></dd>
                    <dd className="text-danger">{formik.errors.Age}</dd>
                    <dt>Email</dt>
                    <dd><input name="Email" onChange={formik.handleChange} type="text" /></dd>
                    <dd className="text-danger">{formik.errors.Email}</dd>
                    <dt>Mobile Number</dt>
                    <dd><input name="Mobile" onChange={formik.handleChange} type="text" /></dd>
                    <dd className="text-danger">{formik.errors.Mobile}</dd>
                </dl>
                <button type="submit">Submit</button>
            </form>
            <h2>{formik.values.UserName}</h2>
        </div>
    )
}