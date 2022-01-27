import axios from "axios";
import { useEffect, useState } from "react";
import * as React from "react";
import MarsImg from "./MarsImg";
import Loading from "../Loading";
import ImageList from "@mui/material/ImageList";

const MarsImgs = ({ input, isSearched, loading, setLoading }) => {

  //States
  const [marsImages, setMarsImages] = useState([]);
  const [defaultValue, setDefaultValue] = useState("page=1");

  //API key
  const APIKEY = process.env.REACT_APP_API_URL;

  //Fetch
  useEffect(() => {
    const fetchData = async () => {
      console.log("Fetching API for Mars");
      const res = await axios.get(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?${
          input.search ? `earth_date=${input.search}` : "earth_date=2021-12-03"
        }&${
          input.camera ? `camera=${input.camera}` : defaultValue
        }&api_key=${APIKEY}`
      );
      setMarsImages(res.data);
      setLoading(true);
      setDefaultValue("");
    };
    fetchData();
  }, [loading]);

  return (

    isSearched && (
      <ImageList
        sx={{
          width: "100%",
          height: 520,
          zIndex: "tooltip",
          position: "absolute",
          marginTop: 50,
        }}
        cols={3}
        rowHeight={520}
      >
        {loading ? (
          marsImages.photos.map((image, i) => <MarsImg image={image} key={i} />)
        ) : (
          <Loading />
        )}
      </ImageList>
    )
  
  );
};

export default MarsImgs;
