import { Box, Grid } from "@mui/material";
import "./blog.css";
import image1 from "../../../assets/port/web_dev.png";
import shape13 from "../../../assets/shape/shape13.png";

const Blog = () => {
  return (
    <div className="container" id="blog">
      <div className="blog_main main_content">
        <div className="blog_main_container">
          <Box className="section_padding">
            <h2 className="common_title_with_line">Blogs</h2>
          </Box>
          <div className="blog_container">
            <h5>Check out the most amazing blogs</h5>
            <Grid
              container
              rowSpacing={3}
              columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 3 }}
            >
              <Grid item xs={12} lg={4} md={4}>
                <div className="blog_card">
                  <img src={image1} alt="" />
                  <h5>Blog post 1</h5>
                  <p>22 Mar, 2024</p>
                </div>
              </Grid>
              <Grid item xs={12} lg={4} md={4}>
                <div className="blog_card">
                  <img src={image1} alt="" />
                  <h5>Blog post 2</h5>
                  <p>24 Mar, 2024</p>
                </div>
              </Grid>
              <Grid item xs={12} lg={4} md={4}>
                <div className="blog_card">
                  <img src={image1} alt="" />
                  <h5>Blog post 3</h5>
                  <p>25 Mar, 2024</p>
                </div>
              </Grid>
            </Grid>
            <button>See All Posts</button>
          </div>
        </div>
      </div>
      <img src={shape13} alt="" className="blog_shape13" />
    </div>
  );
};

export default Blog;
