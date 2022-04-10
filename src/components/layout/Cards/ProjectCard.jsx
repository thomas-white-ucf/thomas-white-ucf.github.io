import { Grid } from "@mui/material";
// import { Box, Card } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
// import Paper from "@mui/material/Paper";
//
import myProjects from "../../../assets/data/project-data";

const ProjectCard = () => {
  //

  return (
    <Grid
      item
      xs={12}
      // sx={{ display: "flex", flexDirection: "column" }}
    >
      {/* sx={{ backgroundColor: "white", minHeight: 200 }} */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          backgroundColor: "palette.info.main",
          // alignContents: "center",
          justifyContent: "center",
          mx: "auto",
          p: 1,
          m: 1,
          // minWidth: "140px",
        }}
      >
        {/* , src, alt, href */}

        {myProjects.map(({ id, alt, src, href }) => (
          <Card
            key={id}
            sx={{
              mx: "auto",
              m: 1,
              backgroundColor: "#6fdcff",
              maxWidth: "140px",
            }}
          >
            {/* minWidth: 150, minHeight: 150, */}
            <CardContent>
              <CardMedia
                component="img"
                height="140px"
                width="140px"
                image={src}
                alt={alt}
              />
              {/* <Typography
                sx={{ fontSize: 18 }}
                color="text.primary"
                gutterBottom
              >
                {description}
              </Typography> */}
            </CardContent>
            <CardActions>
              <Button size="medium" href={href}>
                <Box sx={{ backgroundColor: "whitesmoke" }}>{id}</Box>
              </Button>
            </CardActions>
          </Card>
        ))}
      </Box>
    </Grid>
  );
};

export default ProjectCard;
