import React, { useState } from "react";
import carouselData from "./carouselData";
import ImgCarouselComp from "./imgCarouselComp";
import CarouselBanner from "./carouselBanner";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "./carousel.scss";
import SignInPopUp from "../signup-signin-popup/signin-popup";
import PopupImageData from "../signup-signin-popup/popup-image-data.js";

export default function Carousel() {
  const [x, setX] = useState(0);
  function handelRight() {
    x === 0 ? setX(-100 * (carouselData.length - 1)) : setX(x + 100);
  }
  function handelLeft() {
    x === -100 * (carouselData.length - 1) ? setX(0) : setX(x - 100);
  }
  

  // const [z, setZ] = useState(0);
  // function handleSlides() {
  //   z === 0 ? setZ(-100 * (PopupImageData.length - 1)) : setZ(z + 100);
  // }
  
  const [isVisible, setIsVisible] = useState(true);

  function handleClick() {
    setIsVisible((prevValue) => {
      return !prevValue;
    });
  }

  return (
    <div className="carousel-main">
      {/* <SignInPopUp visible={isVisible} clickHandle={handleClick} zValue={z} /> */}

      <div className="carousel-slider">
        {carouselData.map((item, index) => {
          return (
            <div
              className="carouselSlide"
              key={index}
              style={{ transform: `translateX(${x}%)` }}
            >
              <CarouselBanner headings={item.Heading} paragraphs={item.Paragraph}/>
              <ImgCarouselComp src={item.imgURL} />
            </div>
          );
        })}

        <button id="btnLeft" onClick={handelLeft}>
          <ArrowBackIosIcon className="arrow-icon" fontSize="large"/>
        </button>
        <button id="btnRight" onClick={handelRight}>
          <ArrowForwardIosIcon className="arrow-icon" fontSize="large"/>
        </button>
        {/* <button
          id="signInBtn"
          onClick={() => {
            handleClick();
            handleSlides();
          }}
        >
          Sign-In
        </button> */}
      </div>
    </div>
  );
}
