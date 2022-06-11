import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./MultiItemCarousel.css";
import {  MultiData } from "./MultiData";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";

const PreviousBtn = (props) => {
  // console.log(props);
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowBackIos style={{ color: "blue", fontSize: "30px" }} />
    </div>
  );
};
const NextBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowForwardIos style={{ color: "blue", fontSize: "30px" }} />
    </div>
  );
};

const carouselProperties = {
  prevArrow: <PreviousBtn />,
  nextArrow: <NextBtn />,
  slidesToShow: 3,
  // infinite={false}
  // slidesToScroll={3}
  centerMode: true,
  centerPadding: "170px",
  autoplay: true,
  adaptiveHeight: true,
  autoplaySpeed: 2000,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 426,
      settings: {
        slidesToShow: 1,
        centerMode: false,
      },
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 3,
        centerMode: false,
      },
    },
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 4,
        centerMode: false,
        slidesToScroll: 2,
      },
    },
  ],
};

const MultiItemCarousel = () => {
  return (
    <div style={{ margin: 10}} className="carousel1">
      <h1>Agriculture Machines</h1>
      {/* <p>From More Powerfull To Less, Choose The Best With Us.</p> */}
      <Slider {...carouselProperties}>
        { MultiData.map((item) => (
          <Card item={item} />
        ))}
      </Slider>
    </div>
  );
};

const Card = ({ item }) => {
  return (
    <div style={{ textAlign: "center" }}>
      <img
        className="multi__image"
        src={item}
        alt=""
        style={{
          width: "90%",
          height: "300px",
          objectFit: "contain",
          marginBottom: "00px",
        }}
      />
      {/* <p style={{ fontSize: "14px", padding: "5px 0" }}>TOP TRNDING TVs</p> */}
      <p style={{ fontSize: "16px", padding: "2px 0", color: "green" }}>
        From ₹ 705,000
      </p>
      <p style={{ fontSize: "14px", padding: "2px 0", color: "gray" }}>
        Up To ₹ 5,000 Off on HDFC
      </p>
      <button>
         More Details
      </button>
    </div>
  );
};

export default MultiItemCarousel;
