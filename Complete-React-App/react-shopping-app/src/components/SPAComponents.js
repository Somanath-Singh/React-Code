import { BrowserRouter, Routes, Route ,Link, Outlet} from "react-router-dom";


// function HTML()
// {
//     return(
//         <main>
//             <h2>HTML</h2>
//             <p>It is markup language</p>
//         </main>
//     );
// }

// export default function SPAComponents()
// {
//     return(
//         <div className="container">
//             <BrowserRouter>
//                 <nav>
//                     <ol>
//                         <li><Link to="/html">HTML</Link></li>
//                         <li><Link to="/css">CSS</Link></li>
//                         <li><Link to="/js">JAVASCRIPT</Link></li>
//                     </ol>
//                 </nav>
//                 <hr />
//                 <Routes>
//                     <Route  path ="html" element={
//                         <HTML />
//                     } />

//                     <Route  path ="css" element={
//                         <main>
//                             <h2>CSS</h2>
//                             <p>It defines sttyles</p>
//                         </main>
//                     } />

//                     <Route  path ="js" element={
//                         <main>
//                             <h2>JavaScript</h2>
//                             <p>It is a language</p>
//                         </main>
//                     } />

//                     <Route  path ="/" element={
//                         <main>
//                             <h2>Home</h2>
//                             <p>It is a HomePage</p>
//                         </main>
//                     } />

//                     {/* wild card Route */}
//                     <Route path="*" element={
//                         <main>
//                             <code>Not Found - Page you requested not found</code>
//                         </main>
//                     } />
//                 </Routes>
//             </BrowserRouter>
//         </div>
//     )
// }




function HTML()
{
    return(
        <main>
            <h2>HTML</h2>
            <p>It is markup language</p>
        </main>
    );
}

export default function SPAComponents()
{
    return(
        <div className="container">
            <BrowserRouter>
                <nav>
                    <ol>
                        <li><Link to="/html">HTML</Link></li>
                        <li><Link to="/css">CSS</Link></li>
                        <li><Link to="/js">JAVASCRIPT</Link></li>
                    </ol>
                </nav>
                
                <hr />

                <Outlet>
                    
                </Outlet>
                
            </BrowserRouter>
        </div>
    )
}