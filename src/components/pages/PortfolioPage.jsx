import { Box, Grid, Typography } from "@mui/material";
import ProjectCard from "../layout/Cards/ProjectCard";

const PortfolioPage = () => {
  //

  return (
    <Grid item xs={12}>
      <Box>
        <Typography variant="h4">Projects</Typography>
        <ProjectCard />
      </Box>
    </Grid>
  );
};

export default PortfolioPage;

// {/* <div>
//   {/* <!-- Gif --> */}
//   <div>
//     <img
//       src="https://media3.giphy.com/media/BmmfETghGOPrW/200.gif?cid=bdaf147d5d477c9978444d4a6fcd7d0e&rid=200.gif"
//       alt="Gif"
//       height="250px"
//       width="300px"
//     />
//     <div>
//       <a
//         href="https://thomas-white-ucf.github.io/GetGiphy/"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         Get Giphy!
//       </a>
//     </div>
//   </div>
//   {/* <!-- Searchlock --> */}
//   <div>
//     <img src={planeForest} alt="Thomas White" height="250px" width="300px" />
//     <div>
//       <a
//         href="https://thomas-white-ucf.github.io/Searchlock/"
//         target="_blank"
//         rel="noopener
//                                 noreferrer"
//       >
//         Searchlock!
//       </a>
//     </div>
//   </div>
//   {/* <!-- Marvel Trivia --> */}
//   <div>
//     <img src={spacePic} alt="Thomas White" height="250px" width="300px" />
//     <div>
//       <a
//         href="https://thomas-white-ucf.github.io/TriviaGame/"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         Marvel Trivia!
//       </a>
//     </div>
//   </div>
//   {/* <!-- Train Time Table with Moment.js --> */}
//   <div>
//     <img src={sunTrain} alt="Trains" height="250px" width="300px" />
//     <div>
//       <a
//         href="https://thomas-white-ucf.github.io/SunTrain-Southbound/"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         SunTrain Times!
//       </a>
//     </div>
//   </div>
//   {/* <!-- LIRI  --> */}
//   <div>
//     <img src={liriPic} alt="liri" height="250px" width="300px" />
//     <div>
//       <a
//         href="https://github.com/thomas-white-ucf/liri-node-app"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         LiriBot
//       </a>
//     </div>
//   </div>
//   {/* <!-- -- Marvel Trivia Game */}
//   <div>
//     <img src={marvelPic} alt="liri" height="250px" width="300px" />
//     <div>
//       <a
//         href="https://thomas-white-ucf.github.io/click-reacts/"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         Marvel React Match
//       </a>
//     </div>
//   </div>
//   {/* <!-- -- FitChain - Final Project */}
//   <div>
//     <img src={workoutPic} alt="liri" height="250px" width="300px" />
//     <div>
//       <a
//         href="https://fit-chain.herokuapp.com/"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         Fit-Chain
//       </a>
//     </div>
//   </div>
// </div>; */}
