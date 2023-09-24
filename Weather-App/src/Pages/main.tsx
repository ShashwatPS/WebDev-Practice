import {Grid} from "@mui/material";
import {useEffect, useState} from "react";
import axios from "axios";


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
    const[Log,setLog]=useState(1);
    const[Lat,setLat]=useState(1);
    const [city, setCity] = useState("nothing");
    const [state, setState] = useState("nothing");
    const [coun, setCoun] = useState("nothing");

        useEffect(()=>{
            if(navigator.geolocation){
                navigator.geolocation.getCurrentPosition((position)=>{
                    const {latitude, longitude} = position.coords;
                    setLat(latitude);
                    setLog(longitude);
                })
            }
            else{
                console.log("Geolocation not Supported by your Browser");
            }
        },[]);

        useEffect(() => {
            async function fetchData() {
                try {
                    const response = await axios.get(`http://api.openweathermap.org/geo/1.0/reverse?lat=${Lat}&lon=${Log}&limit=5&appid=cbbe8041a8910ab49769e58fd0615b16`, {
                        headers: {},
                    });
                    const city= response.data[0].name;
                    console.log(response.data[0].name);
                    const state = response.data[0].state;
                    console.log(response.data[0].state);
                    const country = response.data[0].country;
                    console.log(response.data[0].country);
                    setCity(city);
                    setCoun(country);
                    setState(state);
                } catch (error) {
                    console.error('Error fetching data:', error);
                }
            }

            fetchData();
        }, []);

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
                        <Grid item lg={4}>
                            <div style={{
                                fontSize: "100px",
                            }}><Clock/></div>
                        </Grid>
                        <Grid item lg={4}>

                        </Grid>
                    </Grid>
                </div>
            </div>
        )
    }
