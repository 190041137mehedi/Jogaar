import React, { useEffect, useState } from "react";
import SliderContent from "./SliderContent";
import { sliderImage } from "./sliderImage";
import "./slider.css";


const len = sliderImage.length - 1;

function Slider(props) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
    }, 5500);
    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <div class="parent">
      <div className="slider-container">
        <SliderContent activeIndex={activeIndex} sliderImage={sliderImage} />

      </div>

    </div>
  );
}

export default Slider;
