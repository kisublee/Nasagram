import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import MarsHome from "./MarsHome";
import MarsNavBar from "./MarsNavBar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import MarsBio from "./MarsBio";
import MarsSearchBar from "./MarsSearchBar";
import MarsImgs from "./MarsImgs";
import { useState } from "react";
export default function MarsRover() {
  const theme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  const [input, setInput] = useState({
    camera: "",
    search: "",
  });
  const [loading, setLoading] = useState(false);

  const [isSearched, setIsSearched] = useState(false);
  const handleChange = (event) => {
    setInput({ ...input, [event.target.id]: event.target.value });
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <MarsNavBar />
        <MarsHome />
        <MarsBio />
        <MarsSearchBar
          input={input}
          handleChange={handleChange}
          setIsSearched={setIsSearched}
        />
        <MarsImgs
          input={input}
          isSearched={isSearched}
          loading={loading}
          setLoading={setLoading}
        />
      </ThemeProvider>
    </React.Fragment>
  );
}
