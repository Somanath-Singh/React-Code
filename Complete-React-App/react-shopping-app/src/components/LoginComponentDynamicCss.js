


import { useState } from "react"


export default function LoginComponent()
{
    const [theme, setTheme] = useState('');

    const [btheme, setBTheme] = useState({});

    //className

    function handleThemeChange(e){

        if(e.target.checked) {
            setTheme('bg-dark text-white p-2 w-25')
        } else {
            setTheme('bg-light text-dark p-2 w-25')
        }
    }

    //style

    function handleBThemeChange(e){
        if(e.target.checked) {
            setBTheme({
                backgroundColor: 'black',
                color:'white',
                width: '250px',
                padding:'10px'
            })
        } else {
            setBTheme({
                backgroundColor: 'white',
                color:'black',
                width: '250px',
                padding:'10px'
            })
        }
    }

    

    return(
        <div className="container">
            <div  style={btheme}>
            <h2>User Login</h2>
            <div className="form-switch">
                <input onChange={handleBThemeChange} className="form-check-input" type="checkbox"/> Dark Theme
            </div>
            <dl>
                <dt>User Name</dt>
                <dd><input type="text" /></dd>
                <dt>Password</dt>
                <dd><input type="password"/></dd>
            </dl>
            <button>Login</button>
            </div>

            <hr />

            <div  className={theme}>
            <h2>User Login</h2>
            <div className="form-switch">
                <input onChange={handleThemeChange} className="form-check-input" type="checkbox"/> Dark Theme
            </div>
            <dl>
                <dt>User Name</dt>
                <dd><input type="text" /></dd>
                <dt>Password</dt>
                <dd><input type="password"/></dd>
            </dl>
            <button>Login</button>
            </div>
        </div>
    )
}
