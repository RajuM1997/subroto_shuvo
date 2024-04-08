import { Box, Grid } from "@mui/material";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import CoffeeOutlinedIcon from "@mui/icons-material/CoffeeOutlined";
import "./faact.css";

const Faact = () => {
  return (
    <div className="container" id="faact">
      <div className="common_padding main_content">
        <div className="faact_main">
          <Box className="section_padding">
            <h2 className="common_title_with_line">Fun Faacts</h2>
          </Box>
          <Grid
            container
            rowSpacing={3}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={12} lg={3} md={3}>
              <div className="faact_card">
                <FavoriteBorderOutlinedIcon />
                <h5>Happy Clients</h5>
                <h2>580</h2>
              </div>
            </Grid>
            <Grid item xs={12} lg={3} md={3}>
              <div className="faact_card">
                <AccessTimeOutlinedIcon />
                <h5>Working Hours</h5>
                <h2>4696</h2>
              </div>
            </Grid>
            <Grid item xs={12} lg={3} md={3}>
              <div className="faact_card">
                <StarBorderOutlinedIcon />
                <h5>Awards Won</h5>
                <h2>35</h2>
              </div>
            </Grid>
            <Grid item xs={12} lg={3} md={3}>
              <div className="faact_card">
                <CoffeeOutlinedIcon />
                <h5>Coffee Consumed</h5>
                <h2>1136</h2>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default Faact;
