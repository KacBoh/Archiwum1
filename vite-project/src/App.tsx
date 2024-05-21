import {BrowserRouter, Route, Routes} from "react-router-dom";
import SignInSide from "./Pages/SignInSite.tsx";
import FilesPage from "./Pages/FilesPage.tsx";


export default function App() {
    return (

            <BrowserRouter>
                <div className="content">
                    <Routes>
                        <Route path="/" element={<SignInSide/>}/>

                        <Route path="/1" element={<FilesPage/>}>

                        </Route>

                        <Route path="/2" element={<p>chuj1</p>}/>

                    </Routes>
                </div>
            </BrowserRouter>

    )
}

