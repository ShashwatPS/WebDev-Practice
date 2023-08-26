import './App.css'
import LandingPage from "./LandingPage.jsx";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StyleBar from "./AppBar.jsx"
import ShowNews from "./ShowNews.jsx";
import {RecoilRoot} from "recoil";
import IndiNews from "./IndiNews.jsx";
import CatNews from "./CatNews.jsx";

function App() {
    return (
        <RecoilRoot>
            <div>
        <Router>
            <StyleBar></StyleBar>
            <Routes>
                <Route path={"/"} element={<LandingPage />} />
                <Route path={"/news"} element={<ShowNews />} />
                <Route path={"/newsIn"} element={<IndiNews />} />
                <Route path={"/newsCat"} element={<CatNews />} />
            </Routes>
        </Router>
    </div>
        </RecoilRoot>
  )
}

export default App
