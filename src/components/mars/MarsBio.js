import * as React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const MarsBio = () => {
  return (
    <Box
      sx={{
        width: "100%",
        background: "black",
        color: "white",
        textAlign: "left",
        zIndex: "tooltip",
        position: "absolute",
      }}
    >
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        sx={{ justifyContent: "center", display: "flex", padding: 5 }}
      >
        <Typography variant="h7" component="div" sx={{ fontWeight: "bold" }}>
          Welcome to NASA's Curiosity! You can explore amazing images captured
          by rovers on Mars! <br /> If you don't know where to begin, just click
          the search button!
        </Typography>
      </Grid>
    </Box>
  );
};

export default MarsBio;
