import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SpecialOffers.css";
import { data } from "./MultiData";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import { Rating } from "@material-ui/lab";

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

const SpecialOffers = () => {
    return (
        <div style={{ margin: 10 }} className="carousel">
            <h1 >Special Offers</h1>
            {/* <p  >Cars In Which Your Every Moment Will Be Memorable.Open Your Horizon With Our Manufactured Car.
            </p>
            <p >We Deliver What We Promise. Wonderful Experience Provider Four-Wheelers.
            </p> */}
            <div
                className="BootstrapMulti"
                style={{ display: "flex", justifyContent: "center", marginTop: 30 }}
            >
                <div style={{ width: "90%" }}>
                    <Slider
                        prevArrow={<PreviousBtn />}
                        nextArrow={<NextBtn />}
                        slidesToShow={4}
                        slidesToScroll={3}
                        autoplaySpeed={2000}
                        autoplay ={true}
                    //   dots
                    >
                        {data.map((item) => (
                            <Card item={item} />
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
};

const Card = ({ item }) => {
    return (
        <div
            style={{
                textAlign: "center",
                margin: 10,
                padding: "0 10px",
                width: "90%",
                // boxShadow: "0 1px 6px 0 rgb(32 33 36 / 28%)",
                // borderRadius: 5,
            }}
        >
            <img
                className="multi__image"
                src={item}
                alt=""
                style={{
                    width: "100%",
                    height: "250px",
                    objectFit: "contain",
                    marginBottom: "10px",
                }}
            />
            <p
                style={{
                    fontSize: "18px",
                    padding: "3px 0",
                    color: "gray",
                    fontWeight: 400,
                }}
            >
                Special Offers
            </p>
            <Rating precision={0.5} size="small" />
            <p>
                <span
                    style={{
                        textDecoration: "line-through",
                        color: "gray",
                        marginRight: 7,
                        fontWeight: 300,
                    }}
                >
                    $7170
                </span>
                <span style={{ color: "gray", fontWeight: 700 }}>$7071</span>
            </p>
            <button style={{ marginBottom: 20 }}>Add to cart </button>
            <button style={{marginRight:10}}>
                {/* <FavoriteBorderIcon /> */}
                Wish list
            </button>
        </div>
    );
};

export default SpecialOffers;