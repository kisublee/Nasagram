import FavoriteIcon from "@mui/icons-material/Favorite";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import NonFavoriteIcon from "@mui/icons-material/FavoriteBorder";
import * as React from "react";
import Grid from "@mui/material/Grid";
import { useState } from "react";
import NotFoundImage from "../assets/not-found.jpeg";

const SpaceImg = ({ image }) => {
  const [liked, setToggle] = useState(false);

  const favoriteIconToggler = () => {
    setToggle(!liked);
  };

  return (
    <Grid item xs={12} sm={6} md={6} lg={4}>
      <Card
        sx={{
          maxWidth: 600,
          maxHeight: 680,
          marginTop: 1,
          boxShadow: 3,
        }}
      >
        <CardActionArea>
          {image.hdurl ? (
            <CardMedia
              component="img"
              height="350"
              image={image.hdurl}
              alt={image.title}
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
              alt={image.title}
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
              {image.title} - {image.date}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ maxHeight: 200, overflow: "scroll" }}
            >
              {image.explanation}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button onClick={favoriteIconToggler} size="small" color="primary">
            {!liked ? <NonFavoriteIcon /> : <FavoriteIcon />}
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default SpaceImg;
