import { Box } from "@mui/material";
import "./video.css";
import image1 from "../../../assets/video/video.png";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import shape13 from "../../../assets/shape/shape13.png";

const Video = () => {
  return (
    <div className="container">
      <section className="video_main main_content">
        <div className="video_container">
          <Box className="section_padding">
            <h2 className="common_title_with_line">Video</h2>
          </Box>
          <div className="video_img_container">
            <img src={image1} alt="" />
            <div className="play_btn">
              <PlayArrowIcon />
            </div>
          </div>
        </div>
      </section>
      <img src={shape13} alt="" className="video_shape_12" />
    </div>
  );
};

export default Video;
