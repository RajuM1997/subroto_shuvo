import Slider from "react-slick";
import { clientDB } from "./clientDb";
import "./client.css";
import { Box } from "@mui/material";
import { useRef } from "react";
import shape1 from "../../../assets/shape/shape1.png";

const Client = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="container" id="client">
      <div className="client_main main_content">
        <div className="client_container">
          <Box className="section_padding">
            <h2 className="common_title_with_line">Clients</h2>
          </Box>
          <Slider {...settings} ref={sliderRef}>
            {clientDB?.map((item) => (
              <div key={item.id} className="slider">
                <img src={item.image} alt="" />
              </div>
            ))}
          </Slider>
          <div className="slider_btn">
            <button
              className="first_btn"
              onClick={() => sliderRef.current.slickPrev()}
            ></button>
            <button
              className="second_btn"
              onClick={() => sliderRef.current.slickNext()}
            ></button>
          </div>
        </div>
        <img src={shape1} alt="" className="client_shape1" />
      </div>
    </div>
  );
};

export default Client;
