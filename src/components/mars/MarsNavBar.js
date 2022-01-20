import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";

const MarsNavBar = () => {

  return (

    <AppBar
      position="static"
      color="secondary"
      sx={{
        "&:hover": {
          backgroundColor: "darkBlue",
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              mr: 2,
              display: {
                xs: "flex",
                md: "flex",
                lg: "flex",
                fontFamily: "impact, fantasy",
              },
            }}
          >
            <Link
              to="/"
              style={{
                fontFamily: "impact, fantasy",
                color: "white",
                textDecoration: "none",
              }}
            >
              Nasagram
            </Link>
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  
  );
};
export default MarsNavBar;
