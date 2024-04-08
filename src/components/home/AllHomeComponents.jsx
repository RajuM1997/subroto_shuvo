import Banner from "./banner/Banner";
import Blog from "./blog/Blog";
import Client from "./client/Client";
import Faact from "./faact/Faact";
import Map from "./map/Map";
import Portfolio from "./portfolio/Portfolio";
import Service from "./services/Service";
import Testimonial from "./testimonial/Testimonial";
import Timeline from "./timeline/Timeline";
import Video from "./video/Video";
import Work from "./work/Work";

const AllHomeComponents = () => {
  return (
    <div>
      <Banner />
      <Work />
      <Testimonial />
      <Client />
      <Faact />
      <Portfolio />
      <Video />
      <Timeline />
      <Service />
      <Map />
      <Blog />
    </div>
  );
};

export default AllHomeComponents;
