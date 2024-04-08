import { Box } from "@mui/material";
import "./map.css";
import shape12 from "../../../assets/shape/shape12.png";

const Map = () => {
  return (
    <div className="container" id="map">
      <div className="map_main main_content">
        <div className="map_container">
          <Box className="section_padding">
            <h2 className="common_title_with_line">Map</h2>
          </Box>
          <h3 className="map_title">35+ Country Served</h3>
          <div className="map_image_container">
            <div className="map_content">
              <h6>
                USA <span className="map_color_text">40%</span>
              </h6>
              <h6>
                EUROPE <span className="map_color_text">30%</span>
              </h6>
              <h6>
                OTHERS <span className="map_color_text">30%</span>
              </h6>
            </div>
          </div>
        </div>
      </div>
      <img src={shape12} alt="" className="map_shape_12" />
    </div>
  );
};

export default Map;
