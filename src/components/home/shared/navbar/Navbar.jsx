import "./navbar.css";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import shape1 from "../../../../assets/shape/shape1.png";
import shape2 from "../../../../assets/shape/shape2.png";

const drawerWidth = 240;
const navItems = [
  { title: "About Me", url: "/" },
  { title: "Resume", url: "/" },
  { title: "Portfolio", url: "#portfolio" },
  { title: "Blog", url: "/" },
  { title: "Contact", url: "/" },
  { title: "Extra", url: "/" },
  { title: "Get in Now", url: "/" },
];

const Navbar = (props) => {
  // eslint-disable-next-line react/prop-types
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center" }}
      className="mobile_nav_container"
    >
      <Box className="logo" sx={{ my: 2 }}>
        <Box className="logo_bg">
          <Typography variant="h6" sx={{ fontSize: "25px", color: "#fff" }}>
            S
          </Typography>
        </Box>
        <Box>
          <Typography variant="h6" component="div">
            Subroto Shuvo
          </Typography>
          <Typography variant="h6">@bloodfreelancer</Typography>
        </Box>
      </Box>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.title} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <Link to={item.url}>{item.title}</Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className="container">
      <div className="main_content nav_border_radius">
        <Box className="nav_main_container">
          <CssBaseline />
          <AppBar className="nav_container" position="static">
            <Box component="nav" className="header_container">
              <Toolbar
                className="nav_item_container"
                style={{ padding: "0px", margin: "0px" }}
              >
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                  sx={{ display: { sm: "none" } }}
                >
                  <MenuIcon />
                </IconButton>
                <Box className="logo">
                  <Box className="logo_bg">
                    <Typography
                      variant="h6"
                      sx={{
                        flexGrow: 1,
                        fontSize: "24px",
                        fontWeight: "700",
                        color: "#fff",

                        display: { xs: "none", sm: "block" },
                      }}
                    >
                      S
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      variant="h6"
                      component="div"
                      sx={{
                        flexGrow: 1,
                        fontSize: "20px",
                        fontWeight: "700",
                        color: "#333",
                        lineHeight: "1.2",
                        display: { xs: "none", sm: "block" },
                      }}
                    >
                      Subroto Shuvo
                    </Typography>
                    <Typography
                      variant="h6"
                      sx={{
                        flexGrow: 1,
                        fontSize: "12px",
                        fontWeight: "400",
                        color: "#333",
                        lineHeight: "1.2",
                        display: { xs: "none", sm: "block" },
                      }}
                    >
                      @bloodfreelancer
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: { xs: "none", sm: "block" } }}>
                  {navItems.map((item) => (
                    <Button key={item?.title}>
                      {/* <Link to={item.url}>{item?.title}</Link> */}
                      <a href={`${item.url}`}>{item?.title}</a>
                    </Button>
                  ))}
                </Box>
              </Toolbar>
            </Box>
          </AppBar>

          <nav className="nav_item_main">
            <Drawer
              container={container}
              variant="temporary"
              position="static"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
              sx={{
                display: { xs: "block", sm: "none" },
                "& .MuiDrawer-paper": {
                  boxSizing: "border-box",
                  width: drawerWidth,
                },
              }}
            >
              {drawer}
            </Drawer>
          </nav>
        </Box>
        <img src={shape1} alt="" className="shape1_img content_shape  shape" />
      </div>
      <img src={shape2} alt="" className="shape2_img outer_left_shape  shape" />
    </div>
  );
};

export default Navbar;
