import FavoriteIcon from "@mui/icons-material/Favorite";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import NonFavoriteIcon from "@mui/icons-material/FavoriteBorder";
import * as React from "react";
import { useState } from "react";
import NotFoundImage from "../../asset/not-found.jpeg";
import ImageListItem from "@mui/material/ImageListItem";

const MarsImg = ({ image }) => {

  //States
  const [liked, setToggle] = useState(false);

  const favoriteIconToggler = () => {
    setToggle(!liked);
  };

  return (

    <ImageListItem key={image.id}>
      <Card
        sx={{
          maxWidth: 450,
          maxHeight: 580,
          boxShadow: 3,
          mx: 2,
        }}
      >
        <CardActionArea>
          {image ? (
            <CardMedia
              component="img"
              height="350"
              image={image.img_src}
              alt={image.id}
              sx={{
                "&:hover": {
                  backgroundColor: "info.main",
                  opacity: [0.9, 0.8, 0.7],
                },
              }}
            />
          ) : (
            <CardMedia
              component="img"
              height="350"
              image={NotFoundImage}
              alt={image.id}
            />
          )}
          <CardContent>
            <Typography
              gutterBottom
              variant="h7"
              fontSize={16}
              component="div"
              sx={{ height: 30, marginBottom: 2 }}
            >
              {image.camera.full_name} - {image.earth_date}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ maxHeight: 200, overflow: "scroll" }}
            >
              Captured by {image.rover.name} (Rover ID: {image.rover.id}){" "}
              Landing date: {image.rover.landing_date} Launch date:{" "}
              {image.rover.launch_date} and it is currently {image.rover.status}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button onClick={favoriteIconToggler} size="small" color="primary">
            {!liked ? <NonFavoriteIcon /> : <FavoriteIcon />}
          </Button>
        </CardActions>
      </Card>
    </ImageListItem>

  );
};

export default MarsImg;
