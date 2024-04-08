import { Outlet } from "react-router";
import Navbar from "../components/home/shared/navbar/Navbar";
import Footer from "../components/home/shared/footer/Footer";
import "./mainLayout.css";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
