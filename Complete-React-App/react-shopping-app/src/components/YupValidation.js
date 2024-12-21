import { useFormik } from "formik";
import  * as yup from 'yup';

export default function YupValidation()
{
    const formik = useFormik({
        initialValues: {
            UserName: '',
            Email: '',
            Age: 0,
            Mobile:''
        },
        validationSchema: yup.object({
            UserName: yup.string()
                         .required('User Name Required')
                         .min(4, 'Name too short')
                         .max(10, 'Name too Long..'),
            Email: yup.string()
                      .required('Email Required')
                      .email('Invalid Email'),
            Age: yup.number()
                    .required('Age Required'),
            Mobile: yup.string()
                        .required("Mobile Number is Required")
                           
        }),
        onSubmit : values => {
            alert(JSON.stringify(values));
        }
    })
    return(
        <div className="container">
            <form onSubmit={formik.handleSubmit}>
                <h2>Register User</h2>
                <dl>
                    <dt>User Name</dt>
                    <dd><input {...formik.getFieldProps("UserName")} type="text"/></dd>
                    <dd className="text-danger">{formik.errors.UserName}</dd>
                    <dt>Email</dt>
                    <dd><input {...formik.getFieldProps("Email")} type="text"/></dd>
                    <dd className="text-danger">{formik.errors.Email}</dd>
                    <dt>Age</dt>
                    <dd><input {...formik.getFieldProps("Age")} type="text"/></dd>
                    <dd className="text-danger">{formik.errors.Age}</dd>
                    <dt>Mobile Number</dt>
                    <dd><input {...formik.getFieldProps("Mobile")} type="text"/></dd>
                    <dd className="text-danger">{formik.errors.Mobile}</dd>
                </dl>
                <button>Register</button>
            </form>
        </div>
    )
}
