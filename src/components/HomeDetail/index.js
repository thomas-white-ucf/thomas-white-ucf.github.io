import { Box } from "@mui/material";
import NasaPOD from "./NasaPOD";
import TextBioOne from "./TextBioOne";
import TomPic from "./TomPic";

const index = () => {

    return (
        <Box
            sx={{
                overFlow: "auto",
                flexDirection: "column",
            }}
        >

            <TomPic />

            <NasaPOD />

            <TextBioOne />
        </Box>
    )
}

export default index