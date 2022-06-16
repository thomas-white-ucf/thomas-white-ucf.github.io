import {
  Grid,
  Box,
  Card,
  CardActions,
  CardMedia,
  CardContent,
  Button,
} from "@mui/material";
//
import myProjects from "../../assets/data/project-data";

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
                {/* <Box sx={{ backgroundColor: "whitesmoke" }}> */}
                {id}
                {/* </Box> */}
              </Button>
            </CardActions>
          </Card>
        ))}
      </Box>
    </Grid>
  );
};

export default ProjectCard;
