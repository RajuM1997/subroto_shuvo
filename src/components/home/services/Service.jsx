import { Box } from "@mui/material";
import "./service.css";
import shape9 from "../../../assets/shape/shape9.png";
import shape6 from "../../../assets/shape/shape6.png";
import shape11 from "../../../assets/shape/shape11.png";
import ServiceCard from "./ServiceCard";

const Service = () => {
  return (
    <div className="container" id="service">
      <div className="service_main main_content">
        <div className="service_container">
          <Box className="section_padding">
            <h2 className="common_title_with_line">Services</h2>
          </Box>
          <ServiceCard />
        </div>

        <img src={shape6} alt="" className="service_shape6" />
        <img src={shape11} alt="" className="service_shape11" />
      </div>{" "}
      <img src={shape9} alt="" className="service_shape9" />
    </div>
  );
};

export default Service;
