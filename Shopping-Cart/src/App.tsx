import {Route, Routes} from "react-router-dom";
import { Container } from "react-bootstrap";
import {Home} from "./pages/Home.tsx";
import {Store} from "./pages/Store.tsx";
import {About} from "./pages/About.tsx";
import {Navbar} from "./components/Navbar.tsx";

function App() {
    return(
    <>
    <Navbar></Navbar>
    <Container className={"mb-4"}>
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/store" element={<Store />}></Route>
            <Route path="/about" element={<About />}></Route>
        </Routes>
    </Container>
    </>
    )
}

export default App
