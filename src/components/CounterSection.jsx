import FactCounter from "./small components/FactCounter";
import { useEffect, useRef } from "react";

function CounterSection() {
    const flowerRef = useRef(null);

useEffect(() => {
  const handleScroll = () => {
    const scrollY = window.scrollY;
    if (flowerRef.current) {
      const offset = scrollY * 0.3; // adjust speed
      flowerRef.current.style.transform = `translateX(${offset}px)`;
    }
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);
    return (
        <>
            <div className="counter-section">
                <div class="patern-layer-one"></div>
                <div class="patern-layer-two"></div>
                <div class="patern-layer-three"></div>
                <div class="patern-layer-four"></div>
                <div className="flower-image">
                    <div className="image paroller" ref={flowerRef}></div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="content-column col-lg-6 col-md-12 col-sm-12">
                            <div className="inner-column">
                                <div className="section-title style-three">
                                    <div className="title">
                                        <span>Fu</span>
                                        nfacts
                                    </div>
                                    <h2>We have a great funfact which we want to show you!</h2>
                                    <div className="text">
                                        <p>Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the industry's stan dard dummy text ever since the 1500s.</p>
                                   
                                    </div>
                                    <div className="download">
                                        Download a trial version to make life easy!
                                    </div>
                                    <div className="google-btns">
                                        <a href="">
                                            <img src="https://html.themexriver.com/topapp/images/icons/google.png" alt="" />
                                        </a>
                                         <a href="">
                                            <img src="https://html.themexriver.com/topapp/images/icons/app.png" alt="" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="counter-column col-lg-6 col-md-12 col-sm-12">
                                <div className="inner-column">
                                    <div className="fact-counter">
                                        <div className="row">
                                         <FactCounter color="#1e9bfe" count="1200"/>
                                         <FactCounter color="#53cf4e" count="850"/>
                                         <FactCounter color="#f66264" count="154"/>
                                         <FactCounter color="#c838d9" count="1360"/>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CounterSection;