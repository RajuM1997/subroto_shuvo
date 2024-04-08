import { Box, Typography } from "@mui/material";
import "./footer.css";

const Footer = () => {
  return (
    <div className="container">
      <div className="hr">
        <div className="hr_line"></div>
      </div>
      <div className="footer main_content">
        <div className="footer_container">
          <Box
            sx={{ display: "flex", justifyContent: "space-between" }}
            className="footer_main"
          >
            <Typography
              variant="h6"
              component="h6"
              sx={{ fontSize: "16px", fontWeight: 600 }}
            >
              Behance
            </Typography>
            <Typography
              variant="h6"
              component="h6"
              sx={{ fontSize: "16px", fontWeight: 600 }}
            >
              © 2024 All rights reserved.
            </Typography>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default Footer;
