import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Electronics from "./Electronics"
import Footware from "./Footware"
import Fashions from "./Fashion"



export default function ShoppingIndex()
{

    return(
        <div className="container">
            <h2>Shopping Index</h2>
            <Router>
                <ul>
                    <li> <Link to="/electronics" >Electronics</Link> </li>
                    <li> <Link to="/footware" >Footware</Link> </li>
                    <li> <Link to="/fashion" >Fashion</Link> </li>
                </ul>
                <hr />
                <Routes>
                    <Route path="/electronics" element={<Electronics />} ></Route>
                    <Route path="/footware" element={<Footware />} ></Route>
                    <Route path="/fashion" element={<Fashions />} ></Route>
                </Routes>
            </Router>
        </div>
    )
}