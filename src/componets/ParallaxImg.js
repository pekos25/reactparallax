import React from "react";
import { ParallaxBanner } from "react-scroll-parallax";

const ParallaxImg = (props) => {
  const contetStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    color: "#FFFFFF",
    backgroundColor: `rgba(0,0,0,${props.opacity == null && "0"})`,
    WebkitFilter: "blur(0px) saturate(2)",
  };
  return (
    <ParallaxBanner
      layers={[{ image: props.imgsrc, amount: 0.6, speed: -30 }]}
      style={{ height: props.height }}
    >
      <div style={contetStyle}>{props.children}</div>
    </ParallaxBanner>
  );
};

export default ParallaxImg;
