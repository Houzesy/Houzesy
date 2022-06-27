import React from "react";
import "./carousel.scss";

export default function ImgCarouselComp(props) {
  return (
    <img
    id="imgComp"
      src={props.src}
      alt="carousel_img"
      style={{
        objectFit: "cover",
        width: "100%",
        height: "100%",
        margin: "0px"
      }}
    />
  );
}
