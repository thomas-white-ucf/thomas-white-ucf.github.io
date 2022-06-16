import { Paper, Box } from '@mui/material'
import React from 'react'
import thomasLogo from "../../assets/images/thomasLogo.jpeg";

const TomPic = () => {
    return (
        <Paper
            sx={{
                p:2,
                m:4,
                ml: "auto",
                backgroundColor: "#0d1117",
                display: "flex",
                flexWrap: "wrap",
                width: "225px",
                position: "absolute"
            }}
        >

            {/* <Box> */}
            <img
                src={thomasLogo}
                alt="Thomas White"
                // height="200px"
                width="200px"
            />
            {/* </Box> */}
        </Paper>
    )
}

export default TomPic