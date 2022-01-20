import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const SpaceImgDetail = () => {
  const APIKEY = process.env.REACT_APP_API_URL;
  const [singleImage, setSingleImage] = useState([]);
  const { date } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      console.log("Fetching API for One Single Image!");
      const res = await axios.get(
        `https://api.nasa.gov/planetary/apod?api_key=${APIKEY}&date=${date}
        `
      );
      setSingleImage(res.data);
    };

    fetchData();
  }, []);

  return (
    <Link to="/">
      <img
        src={singleImage.hdurl}
        style={{
          width: "100%",
          height: "auto",
        }}
      />
    </Link>
  );
};

export default SpaceImgDetail;
