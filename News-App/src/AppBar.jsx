import {AppBar, Box, Drawer, Typography} from "@mui/material";
import SideNav from "./SideNav.jsx"
import {useEffect, useState} from "react";
import axios from "axios";
import Button from "@mui/material/Button";

function StyleBar(){
    const [userEmail,setEmail]=useState(null);

    useEffect(()=>{
        const config = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        };

        axios.get("http://localhost:3000/me").then(response=>{
            setEmail(response.data.username);
        }).catch(error=>{
            console.error("Error fetching data:", error);
        })
    },[])

    if(userEmail){
        return(
            <div>
                <Box sx={{ flexGrow: 1 }}>
                    <AppBar className={"appBar"} position="static" sx={{
                        bgcolor: "#FF6347",
                        height: "30px",
                    }} >
                        <div style={{
                            paddingTop: 5,
                            paddingLeft: 5,
                            display: "flex",
                            justifyContent: "space-between",
                        }}>
                            <Typography variant="h7">
                                NEWS APP
                            </Typography>
                            <div>
                            <Typography>
                                {userEmail}
                            </Typography>
                                <Button
                                    color="secondary"
                                    disabled={false}
                                    size="medium"
                                    variant="filled"
                                    onClick={()=>{
                                        localStorage.setItem("token",null);
                                        window.location= "/"
                                    }}
                                >Logout</Button>
                            <SideNav></SideNav>
                            </div>
                        </div>
                    </AppBar>
                </Box>
            </div>
        )
    }
    else{
    return(
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar className={"appBar"} position="static" sx={{
                    bgcolor: "#FF6347",
                    height: "30px",
                }} >
                    <div style={{
                        paddingTop: 5,
                        paddingLeft: 5,
                        display: "flex",
                        justifyContent: "space-between",
                    }}>
                        <Typography variant="h7">
                            NEWS APP
                        </Typography>
                        <SideNav></SideNav>
                    </div>
                </AppBar>
            </Box>
        </div>
    )
}}
export default StyleBar;