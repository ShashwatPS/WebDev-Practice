import {AppBar, Box, Drawer, Typography} from "@mui/material";
import SideNav from "./SideNav.jsx"

function StyleBar(){
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
}

export default StyleBar;