import {useRecoilState, useRecoilValue} from "recoil";
import {setquote} from "./Selectors/quote.js";
import {setauthorState} from "./Selectors/author.js";
import {quoteState} from "./atoms/quotegen.js";
import {useEffect} from "react";
import axios from "axios";

function LandingPage(){
    const setData = useRecoilValue(quoteState);
    const quote = useRecoilState(setquote);
    const author = useRecoilState(setauthorState);

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