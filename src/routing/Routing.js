import { Routes, Route } from "react-router-dom";
import MarsRover from "../components/mars/MarsRover";
import Home from "../components/Home";
const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/mars" element={<MarsRover />} />
    </Routes>
  );
};

export default Routing;
