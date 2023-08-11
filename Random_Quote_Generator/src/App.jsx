import {useEffect} from "react";
import {RecoilRoot, useRecoilState, useRecoilValue} from "recoil";
import axios from "axios";
import {setquoteState} from "./Selectors/quote.js";
import {quoteState} from "./atoms/quotegen.js";
import {Router} from "express";
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
