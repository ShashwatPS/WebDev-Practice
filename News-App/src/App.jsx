import './App.css'
import LandingPage from "./LandingPage.jsx";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppBar from "./AppBar.jsx"
import ShowNews from "./News.jsx";
function App() {
    return (
    <>
        <Router>
            <AppBar />
            <Routes>
                <Route path={"/"} element={<LandingPage />} />
                <Route path={"/news"} element={<ShowNews />} />
            </Routes>
        </Router>
    </>
  )
}

export default App
