import {useRecoilState, useRecoilValue} from "recoil";
import {quoteDetails} from "./Selectors/quote.js";
import {authorDetails} from "./Selectors/author.js";
import {quoteState} from "./atoms/quotegen.js";
import {useEffect} from "react";
import axios from "axios";
import {AppBar, Button, Grid, Typography} from "@mui/material";
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
        axios.get("https://api.quotable.io/random")
            .then(res => {
                setData(res.data);
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    };

    return(
        <div>
            <Grid lg={12}item container>
            <Grid item lg={7}>
            <div className={"data"}>
                <Typography>{quote}</Typography>
                <Typography>- {author}</Typography>
            </div>
            </Grid>
            <Grid lg={5} item>
            <div className={"button"}>
            <Button sx={{
                color: "orange",
                bgcolor: "yellow",
            }} variant={"outlined"} size={"small"} onClick={handleCreateQuote}>Create Quote</Button>
            </div>
            </Grid>
            </Grid>
        </div>
    )
}

export default LandingPage;