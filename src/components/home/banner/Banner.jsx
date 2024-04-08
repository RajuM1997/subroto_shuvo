import { Box, Grid } from "@mui/material";
import "./banner.css";
import image1 from "../../../assets/banner/person.png";
import image2 from "../../../assets/banner/level.png";
import Typewriter from "typewriter-effect";
import shape2 from "../../../assets/shape/shape2.png";
const Banner = () => {
  return (
    <div className="container" id="home">
      <div className="banner main_content">
        <div className="banner_bg">
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={12} lg={6} md={6}>
              <Box className="banner_left">
                <Typewriter
                  options={{
                    strings: ["Lead Generator", "Web Scraper", "Data Mining"],
                    autoStart: true,
                    loop: true,
                  }}
                />
                <h1>Independent</h1>
                <span className="banner_ux">UI/UX Designer</span>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </p>
                <div className="banner_btn_container">
                  <button className="with_bg">Portfolio</button>
                  <button className="with_out_bg">Hire me</button>
                </div>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              lg={6}
              md={6}
              sx={{ display: "flex", justifyContent: "end" }}
            >
              <div className="banner_right">
                <div className="banner_main_pic">
                  <img src={image1} alt="" className="person_image" />
                </div>
                <img src={image2} alt="" className="level" />
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
      <img className="banner_shape2" src={shape2} alt="" />
    </div>
  );
};

export default Banner;
