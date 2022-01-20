import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

export default function NavBar({
  date,
  setDate,
  setLoading,
  isAlerted,
  setIsAlerted,
}) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h5"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "table", sm: "none" },
              ml: 22,
              fontFamily: "impact, fantasy",
            }}
          >
            <Link style={{ textDecoration: "none", color: "white" }} to="/">
              Nasagram
            </Link>
          </Typography>

          <SearchBar
            date={date}
            setDate={setDate}
            setLoading={setLoading}
            isAlerted={isAlerted}
            setIsAlerted={setIsAlerted}
          />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
