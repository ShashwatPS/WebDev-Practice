import {RecoilRoot, useRecoilState, useRecoilValue} from "recoil";
import LandingPage from "./Landing-Page.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <RecoilRoot>
        <div>
            <Router>
                <Routes>
                    <Route path={"/"} element={<LandingPage/>}/>
                </Routes>
            </Router>
        </div>
    </RecoilRoot>
  )
}
export default App
