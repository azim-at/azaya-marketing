import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const FactCounter = ({ color, count }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // count only once
    threshold: 0.3, // start when 30% visible
  });

  return (
    <div
      ref={ref}
      className="column counter-column col-lg-6 col-md-6 col-sm-12"
    >
      <div
        className="inner wow fadeInUp animated"
        data-wow-duration="1500ms"
        data-wow-delay="0ms"
        style={{
          visibility: "visible",
          animationDuration: "1500ms",
          animationDelay: "0ms",
          animationName: "fadeInUp",
        }}
      >
        <div className="content">
          <div className="icon-box">
           <span className="icon flaticon-user">
            <i></i>
           </span>
          </div>
          <div className="count-outer count-box counted" style={{ color }} >
            <span className="count-text">
              {inView ? <CountUp start={0} end={count} duration={2} /> : 0}
            </span>
            +
            <h5 className="counter-title">Satisfied Clients</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FactCounter;
