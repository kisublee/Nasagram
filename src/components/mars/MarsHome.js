import * as React from "react";
import { useRef } from "react";
import MarsBackgroundVideo from "../../assets/Mars.mp4";
import Container from "@mui/material/Container";

export default function MarsHome() {
  const vidRef = useRef(null);
  const handlePlayVideo = () => {
    vidRef.current.play();
  };

  return (
    <Container
      maxWidth="xl"
      sx={{
        zIndex: "modal",
        position: "absolute",
        background: "black",
      }}
    >
      <video
        ref={vidRef}
        autoPlay
        muted
        loop
        playsInline
        height="1000"
        width="auto"
      >
        <source src={MarsBackgroundVideo} type="video/mp4" />
      </video>
    </Container>
  );
}
