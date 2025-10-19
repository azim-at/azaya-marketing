import { useEffect, useRef } from "react";

const FlowerImage = () => {
  const flowerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (flowerRef.current) {
        // Adjust scroll speed by dividing
        const offset = scrollY * 0.3; 
        flowerRef.current.style.transform = `translateX(${offset}px)`; 
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flower-image">
      <div className="image paroller" ref={flowerRef}></div>
    </div>
  );
};

export default FlowerImage;
