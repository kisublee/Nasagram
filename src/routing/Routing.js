import { Routes, Route } from "react-router-dom";
import MarsRover from "../components/mars/MarsRover";
import Home from "../components/Home";
import DetailImages from "../components/DetailImages";
const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/detail/:date" element={<DetailImages />} />
      <Route path="/mars" element={<MarsRover />} />
    </Routes>
  );
};

export default Routing;
