import { Box } from "@mui/material";
import "./timeline.css";
import image1 from "../../../assets/timeline/timeline1.png";
import image2 from "../../../assets/timeline/timeline2.png";
import image3 from "../../../assets/timeline/timeline3.png";
import image4 from "../../../assets/timeline/timeline_main.png";
import shape7 from "../../../assets/shape/shape7.png";
import shape1 from "../../../assets/shape/shape1.png";

const Timeline = () => {
  return (
    <div className="container" id="">
      <div className="time_line main_content">
        <div className="timeline_main_container">
          <Box className="section_padding">
            <h2 className="common_title_with_line">Timeline</h2>
          </Box>
          <div className="timeline_container">
            <div className="timeline_main"></div>
            <div className="timeline_content_1">
              <p>2020</p>
              <div className="timeline_img_1">
                <img src={image1} alt="" />
              </div>
              <p>Description</p>
            </div>
            <div className="timeline_content_2">
              <p>2020</p>
              <div className="timeline_img_2">
                <img src={image2} alt="" />
              </div>
              <p>Description</p>
            </div>
            <div className="timeline_content_main">
              <div className="timeline_content_img">
                <img src={image4} alt="" />
              </div>
            </div>
            <div className="timeline_content_3">
              <p>Unlock</p>
              <div className="timeline_img_3">
                <img src={image3} alt="" />
              </div>
              <p>Description</p>
            </div>
          </div>
        </div>
        <img src={shape1} alt="" className="timeline_shape1" />
      </div>
      <img src={shape7} alt="" className="timeline_shape7" />
    </div>
  );
};

export default Timeline;
