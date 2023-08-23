import './App.css'
import LandingPage from "./LandingPage.jsx";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StyleBar from "./AppBar.jsx"
import ShowNews from "./ShowNews.jsx";
import {RecoilRoot} from "recoil";
function App() {
    return (
        <RecoilRoot>
            <div>
        <Router>
            <StyleBar></StyleBar>
            <Routes>
                <Route path={"/"} element={<LandingPage />} />
                <Route path={"/news"} element={<ShowNews />} />
            </Routes>
        </Router>
    </div>
        </RecoilRoot>
  )
}

export default App
