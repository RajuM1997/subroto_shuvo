import "./service.css";
import service1 from "../../../assets/service/service1.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CSSPlugin } from "gsap/CSSPlugin";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger, CSSPlugin, useGSAP);
const ServiceCard = () => {
  const card1Ref = useRef();
  const card2Ref = useRef();
  const card3Ref = useRef();

  //   useGSAP(
  //     () => {
  //       const tl = gsap.timeline();

  //       tl.to(card1Ref.current, { bottom: "0", opacity: 1, duration: 1 });

  //       ScrollTrigger.create({
  //         trigger: card1Ref.current,
  //         pin: true,
  //         start: "60% 80%",
  //         onEnter: () => {
  //           tl.play();
  //         },
  //         onLeaveBack: () => {
  //           tl.reverse();
  //         },
  //       });

  //       tl.to(card2Ref.current, { bottom: "53vh", opacity: 1, duration: 1 });

  //       ScrollTrigger.create({
  //         trigger: card2Ref.current,
  //         start: "60% 80%",
  //         onEnter: () => {
  //           tl.play();
  //         },
  //         onLeaveBack: () => {
  //           tl.reverse();
  //         },
  //       });

  //       tl.to(card3Ref.current, { bottom: "106vh", opacity: 1, duration: 1 });

  //       ScrollTrigger.create({
  //         trigger: card3Ref.current,
  //         start: "60% 80%",
  //         onEnter: () => {
  //           tl.play();
  //         },
  //         onLeaveBack: () => {
  //           tl.reverse();
  //         },
  //       });

  //       // Enable scrolling initially
  //       toggleOverflow(true);
  //     },
  //     { scope: card1Ref, card2Ref, card3Ref }
  //   );
  //   const toggleOverflow = (value) => {
  //     document.body.style.overflow = value ? "visible" : "hidden";
  //   };
  return (
    <div className="service_cards_main">
      <div ref={card1Ref} id="card2" className="service_cards">
        <div className="service_lefts">
          <img src={service1} alt="" />
        </div>
        <div className="service_rights">
          <h3>LinkedIn Scrapping</h3>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
          <div>
            <button>Learn More</button>
          </div>
        </div>
      </div>
      <div ref={card2Ref} id="card3" className="service_cards revers_card">
        <div className="service_rights">
          <h3>LinkedIn Scrapping</h3>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
          <div>
            <button>Learn More</button>
          </div>
        </div>
        <div className="service_lefts">
          <img src={service1} alt="" />
        </div>
      </div>
      <div ref={card3Ref} id="card2" className="service_cards">
        <div className="service_lefts">
          <img src={service1} alt="" />
        </div>
        <div className="service_rights">
          <h3>LinkedIn Scrapping</h3>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
          <div>
            <button>Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
