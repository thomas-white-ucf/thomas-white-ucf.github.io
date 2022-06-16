import { Box } from "@mui/material";
import { FC, useState, useEffect } from "react";
// import "./nasaPOD.css"
// import M51_HubbleMiller from "../assets/images/M51_HubbleMiller_1080.jpeg";
//

// interface Props {
//   name: string;
//   age: number;
//   email: string;
// }

// <Props>

const NasaPOD: FC = () => {
  // const NasaPOD = () => {
  const [data, setDataNasa] = useState<any>("");
  useEffect(() => {
    getNasaPicture();
  }, []);

  const getNasaPicture = async () => {
    const res = await fetch(
      "https://api.nasa.gov/planetary/apod?api_key=kNOnjCBGMM56azdEu34frrop4ptAy0ma70cPOm9N"
    );
    const data = await res.json();
    // console.log("🚀 ~ file: HomeDetail.js ~ line 16 ~ getNasaPicture ~ data", data)

    try {
      setDataNasa(data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    // sx={{ overflow: "auto" }}
    <Box>
      <img
        src={data.url}
        alt="NASA Pic of the Day"
        // height="200px"
        width="100%"
      />
    </Box>
  );
};

export default NasaPOD;
