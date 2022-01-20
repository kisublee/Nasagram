import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("xs")]: {
    marginLeft: theme.spacing(9),
    width: "100%",
  },
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(16),
    width: "100%",
  },
  [theme.breakpoints.up("md")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
    marginRight: 340,
  },
  [theme.breakpoints.up("lg")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
    marginRight: 535,
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
  },
}));

const SearchBar = ({ date, setDate, setLoading, isAlerted, setIsAlerted }) => {

  // Error handling function
  const inputValidator = (date) => {
  
    if (date.length >= 4 && Number(date) > 2022) {
      setIsAlerted(true);
    }

    if (date.length >= 5 && date.split("")[4] !== "-") {
      setIsAlerted(true);
    }

    if (date.length >= 6 && Number(date.split("")[5]) > 1) {
      setIsAlerted(true);
    }
    // checking if it is greater than the current month
    if (
      date.length >= 6 &&
      Number(date.split("-")[0]) > 2021 &&
      Number(date.split("")[6]) > 1
    ) {
      setIsAlerted(true);
    }

    if (date.length >= 7 && Number(date.split("-")[1]) > 12) {
      setIsAlerted(true);
    }

    if (date.length >= 9 && Number(date.split("-")[2]) > 31) {
      setIsAlerted(true);
    }

    if (
      date.length >= 9 &&
      Number(date.split("-")[7]) % 2 !== 0 &&
      Number(date.split("-")[2]) > 30
    ) {
      setIsAlerted(true);
    }

    if (date.length > 10) {
      setIsAlerted(true);
    }
  };

  //Event Listener
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(false);
    if (date.length < 1) {
      setIsAlerted(true);
    }
  };

  const handleChange = (e) => {
    setDate((date = e.target.value));
    inputValidator(date);
  };

  return (
    
    <form onSubmit={handleSubmit}>
      <Search onChange={handleChange}>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Enter YYYY-MM-DD"
          inputProps={{ "aria-label": "search" }}
          sx={{ paddingRight: 2, paddingLeft: 2 }}
        />
      </Search>
    </form>

  );
};

export default SearchBar;
