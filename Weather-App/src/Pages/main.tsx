import {Grid} from "@mui/material";

export function LandingPage(){
    return(
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "93vh",
        }}>
            <div style={{
                width: "64vw",
                height: "74vh",
                backgroundColor: "black",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
            }}>
                <Grid container style={{
                    width: "100%",
                    height: "100%",
                }}>
                    <Grid item lg={4}>Hello</Grid>
                    <Grid item lg={4}>What is happening</Grid>
                </Grid>
            </div>
        </div>
    )
}