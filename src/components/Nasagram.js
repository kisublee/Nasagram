import axios from "axios";
import { useEffect, useState } from "react";

export default function Nasagram() {
  const [spaceImages, setSpaceImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [date, setDate] = useState("");
  const APIKEY = process.env.REACT_APP_API_URL;
  const [defaultDate, setDefaultDate] = useState("YYYY-MM-DD");

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

  return <h1>hello</h1>;
}
