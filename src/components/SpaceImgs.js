import * as React from "react";
import SpaceImg from "./SpaceImg";

const SpaceImgs = ({ spaceImages, loading, setLoading }) => {
  return (
    <>
      {loading &&
        spaceImages.map((image, i) => <SpaceImg image={image} key={i} />)}
    </>
  );
};

export default SpaceImgs;
