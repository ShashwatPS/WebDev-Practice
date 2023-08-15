import {useRecoilState, useRecoilValue} from "recoil";
import {quoteDetails} from "./Selectors/quote.js";
import {authorDetails} from "./Selectors/author.js";
import {quoteState} from "./atoms/quotegen.js";
import {useEffect} from "react";
import axios from "axios";
import {AppBar, Button, Card, Grid, Typography} from "@mui/material";
import './App.css'
function LandingPage(){
    const [Data,setData] = useRecoilState(quoteState);
    const quote = useRecoilValue(quoteDetails);
    const author = useRecoilValue(authorDetails);

    useEffect(()=>{
        axios.get("https://api.quotable.io/random",{
        }).then(res=>{
            setData(res.data);
        }).catch(error => {
            console.error("Error fetching data:", error);
        });
    },[])

    const handleCreateQuote = () => {
        axios.get("https://api.quotable.io/random?maxLength=40")
            .then(res => {
                setData(res.data);
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    };

    return(
        <div className={"data"}>
            <div className={"card"}>
                    <div className={"text1"}>❝ {quote} ❞ </div>
                    <div className={"text2"}>- {author}</div>
            </div>
            <div className={"button"}>
            <Button sx={{
                color: "orange",
                bgcolor: "yellow",
                "&:hover": {
                    bgcolor: "yellow",
                },
                borderRadius: "10px",
            }} variant={"contained"} size={"small"} onClick={handleCreateQuote}>Create Quote</Button>
            </div>
        </div>
    )
}

export default LandingPage;