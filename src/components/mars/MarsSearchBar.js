import * as React from "react";
import { styled } from "@mui/material/styles";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import NativeSelect from "@mui/material/NativeSelect";
import InputBase from "@mui/material/InputBase";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #ced4da",
    fontSize: 16,
    padding: "10px 26px 10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      borderRadius: 4,
      borderColor: "#80bdff",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
    },
  },
}));

export default function MarsSearchBar({ input, handleChange, setIsSearched }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSearched(true);
  };

  return (
    <Box
      item
      sx={{
        zIndex: "tooltip",
        position: "absolute",
        top: 150,
        mx: 50,
      }}
    >
      <form onSubmit={handleSubmit}>
        <FormControl
          sx={{ m: 1 }}
          variant="standard"
          id="search"
          value={input.search}
          onChange={handleChange}
        >
          <InputLabel htmlFor="demo-customized-textbox">
            Enter Date YYYY-MM-DD
          </InputLabel>
          <BootstrapInput id="search" />
        </FormControl>
        <FormControl sx={{ m: 1 }} variant="standard">
          <InputLabel id="demo-customized-select-label">Camera</InputLabel>
        </FormControl>
        <FormControl sx={{ m: 1 }} variant="standard">
          <InputLabel htmlFor="demo-customized-select-native">
            Camera
          </InputLabel>
          <NativeSelect
            id="camera"
            value={input.camera}
            onChange={handleChange}
            input={<BootstrapInput />}
          >
            <option value="">All</option>
            <option value="fhaz">FHAZ</option>
            <option value="rhaz">RHAZ</option>
            <option value="mast">MAST</option>
            <option value="chemcam">CHEMCAM</option>
            <option value="mahli">MAHLI</option>
            <option value="mardi">MARDI</option>
            <option value="navcam">NAVCAM</option>
            <option value="pancam">PANCAM</option>
            <option value="minites">MINITES</option>
          </NativeSelect>
        </FormControl>
        <FormControl sx={{ m: 4.5 }} variant="standard">
          <Button type="submit" variant="outlined">
            Search
          </Button>
        </FormControl>
      </form>
      <Typography
        variant="h7"
        component="div"
        sx={{ color: "white", fontWeight: "bold" }}
      >
        Your selected date is: {input.search} and camera is: {input.camera}
      </Typography>
    </Box>
  );
}
