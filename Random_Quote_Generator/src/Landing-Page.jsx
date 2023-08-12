import {useRecoilState, useRecoilValue} from "recoil";
import {quoteDetails} from "./Selectors/quote.js";
import {authorDetails} from "./Selectors/author.js";
import {quoteState} from "./atoms/quotegen.js";
import {useEffect} from "react";
import axios from "axios";
import {Button} from "@mui/material";
function LandingPage(){
    const [Data,setData] = useRecoilState(quoteState);
    const quote = useRecoilValue(quoteDetails);
    const author = useRecoilValue(authorDetails);

    useEffect(()=>{
        axios.get("https://api.quotable.io/quotes/random",{
        }).then(res=>{
            setData(res.data);
        }).catch(error => {
            console.error("Error fetching data:", error);
        });
    },[])

    const handleCreateQuote = () => {
        axios.get("https://api.quotable.io/quotes/random")
            .then(res => {
                setData(res.data);
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    };

    return(
        <div>
            {quote}
            {author}
            <Button onClick={handleCreateQuote}>Create Quote</Button>
        </div>
    )
}

export default LandingPage;