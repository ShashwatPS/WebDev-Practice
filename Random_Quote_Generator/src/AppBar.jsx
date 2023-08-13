import {AppBar, Box, Container, IconButton, Toolbar, Typography} from "@mui/material";
import {red} from "@mui/material/colors";

function StyleBar(){
    return(
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" sx={{
                    bgcolor: "red",
                }} >
                    <Toolbar>
                        <Typography variant="h7" component="div" sx={{ flexGrow: 1 }}>
                            QUOTE GENERATOR
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    )
}

export default StyleBar;