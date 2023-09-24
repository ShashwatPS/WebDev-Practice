import {Grid} from "@mui/material";
import {useEffect, useState} from "react";


function Clock() {
    const [currentTime, setCurrentTime] = useState(getCurrentTime());
    function getCurrentTime() {
        const now = new Date();
        const hours = now.getHours();
        const minutes = now.getMinutes();
        const seconds = now.getSeconds();
        const ampm = hours >= 12 ? 'PM' : 'AM';
        const formattedTime = `${hours % 12 || 12}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        return `${formattedTime} ${ampm}`;
    }
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(getCurrentTime());
        }, 1000);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="clock">
            <div id="time">{currentTime}</div>
        </div>
    );
}

    export function LandingPage() {
        return (
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
                    border: "2px outset white",
                }}>
                    <Grid container style={{
                        width: "100%",
                        height: "100%",
                    }}>
                        <Grid item lg={4}><div><Clock/></div></Grid>
                        <Grid item lg={4}>What is happening</Grid>
                    </Grid>
                </div>
            </div>
        )
    }
