import {RecoilRoot, useRecoilState, useRecoilValue} from "recoil";
import LandingPage from "./Landing-Page.jsx";
import {Route, Routes} from "react-router-dom";

function App() {
  return (
    <RecoilRoot>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
      </Routes>
    </RecoilRoot>
  )
}
export default App
