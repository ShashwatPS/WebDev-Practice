import {useRecoilState, useRecoilValue} from "recoil";
import {quoteDetails} from "./Selectors/quote.js";
import {authorDetails} from "./Selectors/author.js";
import {quoteState} from "./atoms/quotegen.js";
import {useEffect} from "react";
import axios from "axios";

function LandingPage(){
    const [Data,setData] = useRecoilState(quoteState);
    const quote = useRecoilValue(quoteDetails);
    const author = useRecoilValue(authorDetails);

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