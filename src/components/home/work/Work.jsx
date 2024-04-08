import { Box, Grid } from "@mui/material";
import image1 from "../../../assets/icon/edit1.png";
import "./work.css";
import image2 from "../../../assets/icon/mobile-shopping1.png";
import image3 from "../../../assets/icon/graphic-design1.png";
import image4 from "../../../assets/icon/promotion1.png";
import shape2 from "../../../assets/shape/shape2.png";

const Work = () => {
  return (
    <div className="container">
      <div className="work_main main_content">
        <div className="work_container">
          <Box className="section_padding">
            <h2 className="common_title_with_line">What I Do</h2>
          </Box>
          <Grid
            container
            rowSpacing={6}
            columnSpacing={{ xs: 1, sm: 2, md: 10, lg: 10 }}
          >
            <Grid item xs={12} lg={6} md={6}>
              <div className="work_card">
                <div className="icon">
                  <img src={image1} alt="" />
                </div>
                <div className="work_contents">
                  <h4 className="common_title">Copywrite</h4>
                  <p className="common_pera">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout.
                  </p>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} lg={6} md={6}>
              <div className="work_card">
                <div className="icon">
                  <img src={image2} alt="" />
                </div>
                <div className="work_content">
                  <h4 className="common_title">E commerce</h4>
                  <p className="common_pera">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout.
                  </p>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} lg={6} md={6}>
              <div className="work_card">
                <div className="icon">
                  <img src={image3} alt="" />
                </div>
                <div className="work_contents">
                  <h4 className="common_title">Web Design</h4>
                  <p className="common_pera">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout.
                  </p>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} lg={6} md={6}>
              <div className="work_card">
                <div className="icon">
                  <img src={image4} alt="" />
                </div>
                <div className="work_contents">
                  <h4 className="common_title">Marketing</h4>
                  <p className="common_pera">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout.
                  </p>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
        <img src={shape2} alt="" className="work_shape_2" />
      </div>
    </div>
  );
};

export default Work;
