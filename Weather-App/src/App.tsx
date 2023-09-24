import { Route, Routes } from "react-router-dom";
import {Navbar} from "./Components/Navbar.tsx";
import { LandingPage } from "./Pages/main.tsx"
function App() {
   return(
       <div>
           <Navbar/>
           <Routes>
               <Route path="/" element={<LandingPage />}></Route>
           </Routes>
       </div>
   )
}

export default App
