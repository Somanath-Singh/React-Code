import { useState, useEffect } from "react";

export default function EventBindingComponent()
{
    const[userName,setUserName] = useState('Somanath');

    function handleUserName(e)
    {
        setUserName(e.target.value);
    }

    return(
        <div className="container">
            <dl>
                <dt>User Name</dt>
                <dd><input type="text" onKeyUp={handleUserName} /></dd>
            </dl>
            <h3>Hello ! {userName}</h3>
        </div>
    )
}