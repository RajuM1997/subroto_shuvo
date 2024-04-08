import Slider from "react-slick";
import { Box } from "@mui/material";
import "./testimonial.css";
import { testimonialDB } from "./testimonialDB";
import image1 from "../../../assets/testimonial/quat.png";
import image2 from "../../../assets/testimonial/com.svg";
import { useRef } from "react";

const Testimonial = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
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
          slidesToShow: 1,
          slidesToScroll: 1,
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
    <div className="container" id="testimonial">
      <div className="testimonial_main main_content">
        <div className="testimonial_container common_padding">
          <Box className="section_padding">
            <h2 className="common_title_with_line">Testimonials</h2>
          </Box>
          <Slider {...settings} ref={sliderRef}>
            {testimonialDB?.map((item) => (
              <div key={item.id} className="slider_card">
                <div className="testimonial_card_container">
                  <div className="testimonial_card">
                    <img
                      className="testimonial_card_img"
                      src={item.image}
                      alt=""
                    />
                    <p>{item.body}</p>
                    <div className="testimonial_title">
                      <h5>{item.title}</h5>
                      <img className="com" src={image2} alt="" />
                    </div>{" "}
                  </div>
                  <div className="quat_img">
                    <img src={image1} alt="" />
                  </div>
                </div>
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
      </div>
    </div>
  );
};

export default Testimonial;
