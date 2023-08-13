import {AppBar, Box, Container, IconButton, Toolbar, Typography} from "@mui/material";
import {red} from "@mui/material/colors";

function StyleBar(){
    return(
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" sx={{
                    bgcolor: "red",
                    height: "30px",
                }} >
                        <div style={{
                            paddingTop: 5,
                            paddingLeft: 5
                        }}>
                        <Typography variant="h7">
                            QUOTE GENERATOR
                        </Typography>
                        </div>
                </AppBar>
            </Box>
        </div>
    )
}

export default StyleBar;