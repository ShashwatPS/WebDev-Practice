import {RecoilRoot} from "recoil";
import LandingPage from "./Landing-Page.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import StyleBar from "./AppBar.jsx";

function App() {
  return (
    <RecoilRoot>
        <div>
            <Router>
                <StyleBar/>
                <Routes>
                    <Route path={"/"} element={<LandingPage/>}/>
                </Routes>
            </Router>
        </div>
    </RecoilRoot>
  )
}
export default App
