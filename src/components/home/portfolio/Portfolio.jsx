import { useState } from "react";
import { Box, Grid } from "@mui/material";
import { portfolioDB } from "./portfolioDB";
import shape12 from "../../../assets/shape/shape12.png";
import "./portfolio.css";

const Portfolio = () => {
  const [shawTab, setShawTab] = useState("all");
  return (
    <div className="container" id="portfolio">
      <div className="portfolio_main main_content">
        <div className="portfolio_container">
          <Box className="section_padding">
            <h2 className="common_title_with_line">Portfolio</h2>
          </Box>
          <div className="portfolio_btn_container">
            <button
              className={`${shawTab === "all" && "active"}`}
              onClick={() => setShawTab("all")}
            >
              All
            </button>
            <button
              className={`${shawTab === "lead" && "active"}`}
              onClick={() => setShawTab("lead")}
            >
              Lead
            </button>
            <button
              className={`${shawTab === "scrap" && "active"}`}
              onClick={() => setShawTab("scrap")}
            >
              Scrap
            </button>
            <button
              className={`${shawTab === "minning" && "active"}`}
              onClick={() => setShawTab("minning")}
            >
              Minning
            </button>
            <button
              className={`${shawTab === "list" && "active"}`}
              onClick={() => setShawTab("list")}
            >
              List
            </button>
            <button
              className={`${shawTab === "video" && "active"}`}
              onClick={() => setShawTab("video")}
            >
              Video
            </button>
            <button
              className={`${shawTab === "images" && "active"}`}
              onClick={() => setShawTab("images")}
            >
              Images
            </button>
          </div>
          <Grid
            container
            rowSpacing={3}
            columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 3 }}
          >
            {portfolioDB.map((item) => (
              <Grid item xs={12} lg={4} md={4} key={item.id}>
                <div className="portfolio_card">
                  <img src={item.image} alt="" />
                  <h6>Web Dev</h6>
                </div>
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
      <img src={shape12} alt="" className="portfolio_shape12" />
    </div>
  );
};

export default Portfolio;
