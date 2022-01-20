import * as React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import BioIcon from "../assets/bioIcon.png";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import MuiLink from "@mui/material/Link";
import { Link } from "react-router-dom";

const NasagramBio = ({
  spaceImages,
  date,
  defaultDate,
  isAlerted,
  setDefaultDate,
}) => {
  return (
    <Box sx={{ width: "100%" }}>
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 1 }}
        sx={{ marginTop: 1 }}
      >
        <Grid item xs={4} sm={5} md={5} lg={4}>
          <Card
            sx={{
              maxWidth: 100,
              marginTop: 5,
              marginLeft: "auto",
              marginRight: "auto",
              border: 0,
              boxShadow: "none",
            }}
          >
            <CardMedia
              component="img"
              height="auto"
              image={BioIcon}
              alt="bio-icon"
              sx={{ minWidth: "auto" }}
            />
          </Card>
        </Grid>

        <Grid item xs={5} sm={5} md={5} lg={4}>
          <p>
            <strong>{spaceImages.length}</strong> post
            {spaceImages.length > 1 && "s"} from{" "}
            {!isAlerted ? (
              <strong>{date ? date : defaultDate}</strong>
            ) : (
              <strong>Invalid date entered</strong>
            )}
          </p>

          <h4>
            Shopify is <br />
            extending our mission to Make Commerce Better for Everyone to
            include the whole entire universe. Wanna see more? <br />
            check out our{" "}
            <Link
              style={{
                textDecoration: "none",
                color: "darkBlue",
              }}
              to="/mars"
            >
              Explore Mars Rover Photos 🪐 🔭
            </Link>
          </h4>
          <MuiLink
            href="https://www.shopify.com/about"
            color="primary.main"
            underline="none"
            rel="noopener"
            target="_blank"
            fontWeight="bold"
          >
            www.shopify.com/about
          </MuiLink>
        </Grid>
      </Grid>
    </Box>
  );
};

export default NasagramBio;
