import { BrowserRouter, Routes, Route } from "react-router-dom"



export default function TutorialRoutes()
{
    return(
        <div className="container">
            <BrowserRouter>
            <Routes>
                    <Route  path ="html" element={
                        <HTML />
                    } />

                    <Route  path ="css" element={
                        <main>
                            <h2>CSS</h2>
                            <p>It defines sttyles</p>
                        </main>
                    } />

                    <Route  path ="js" element={
                        <main>
                            <h2>JavaScript</h2>
                            <p>It is a language</p>
                        </main>
                    } />

                    <Route  path ="/" element={
                        <main>
                            <h2>Home</h2>
                            <p>It is a HomePage</p>
                        </main>
                    } />

                    {/* wild card Route */}
                    <Route path="*" element={
                        <main>
                            <code>Not Found - Page you requested not found</code>
                        </main>
                    } />
                </Routes>
            </BrowserRouter>
        </div>
    )
}