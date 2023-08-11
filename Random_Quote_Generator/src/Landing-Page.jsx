import {useRecoilState, useRecoilValue} from "recoil";
import {setquoteState} from "./Selectors/quote.js";
import {setauthorState} from "./Selectors/author.js";
import {quoteState} from "./atoms/quotegen.js";
import {useEffect} from "react";
import axios from "axios";

function LandingPage(){
    const quote = useRecoilState(setquoteState);
    const author = useRecoilState(setauthorState);
    const setData = useRecoilValue(quoteState);

    useEffect(()=>{
        axios.get("https://api.quotable.io/quotes/random",{
            METHOD: "GET"
        }).then(res=>{
            setData(res.data);
        })
    },[])

    return(
        <div>
            {quote}
            {author}
        </div>
    )
}

export default LandingPage;