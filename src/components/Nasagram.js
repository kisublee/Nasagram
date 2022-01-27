import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import SpaceImgs from "./SpaceImgs";
import NavBar from "./NavBar";
import NasagramBio from "./NasagramBio";
import axios from "axios";
import { useEffect, useState } from "react";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Loading from "./Loading";
import ErrorMsg from "./ErrorMsg";

export default function Nasagram() {

 //States
  const [spaceImages, setSpaceImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [date, setDate] = useState("");
  const [defaultDate, setDefaultDate] = useState("YYYY-MM-DD");
  const [isAlerted, setIsAlerted] = useState(false);

  //API key
  const APIKEY = process.env.REACT_APP_API_URL;

  //Fetch
  useEffect(() => {
    const fetchData = async () => {
      console.log("Fetching API for Space Images from NASA");
      const res = await axios.get(
        `https://api.nasa.gov/planetary/apod?api_key=${APIKEY}&start_date=${
          date ? date : "2022-01-07"
        }`
      );
      setSpaceImages(res.data);
      setLoading(true);
      setDefaultDate("2022-01-07");
    };
    fetchData();
  }, [loading]);


  return (

    <React.Fragment>
      <CssBaseline />
      {isAlerted ? (
        <ErrorMsg setIsAlerted={setIsAlerted} />
      ) : (
        <NavBar
          setDate={setDate}
          date={date}
          setLoading={setLoading}
          isAlerted={isAlerted}
          setIsAlerted={setIsAlerted}
        />
      )}
      <Container maxWidth="lg">
        <Box sx={{ flexGrow: 1 }}>
          <NasagramBio
            spaceImages={spaceImages}
            date={date}
            defaultDate={defaultDate}
            isAlerted={isAlerted}
            setDefaultDate={setDefaultDate}
          />
          <Divider sx={{ marginTop: 4 }} />
          <Grid container spacing={3} sx={{ marginTop: 1 }}>
            {loading ? (
              <SpaceImgs
                setDate={setDate}
                date={date}
                setLoading={setLoading}
                spaceImages={spaceImages}
                loading={loading}
                setLoading={setLoading}
              />
            ) : (
              <Loading setLoading={setLoading} />
            )}
          </Grid>
        </Box>
      </Container>
      <Divider sx={{ marginTop: 3 }} />
    </React.Fragment>
    
  );
}
