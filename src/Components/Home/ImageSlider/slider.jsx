import React, { useState } from "react";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
// import csetasveer from '../../../assets/gallery/BatchPics';
const csea28 = "https://res.cloudinary.com/diwucid84/image/upload/v1759586133/csea28_gkluvy.png";
const cseb28 = "https://res.cloudinary.com/diwucid84/image/upload/v1759586135/cseb28_huzchj.png";
const csea27 = "https://res.cloudinary.com/diwucid84/image/upload/v1759586157/csea27_iibdps.jpg";
const cseb27 = "https://res.cloudinary.com/diwucid84/image/upload/v1759586157/cseb27_m1llgb.jpg";
const tasveer1 = "https://res.cloudinary.com/diwucid84/image/upload/v1759586157/tasveer1_oidsbo.jpg";
const tasveer2 = "https://res.cloudinary.com/diwucid84/image/upload/v1759586159/tasveer2_nzcoot.jpg";
const csea2 = "https://res.cloudinary.com/diwucid84/image/upload/v1759586143/csea2_d2pxy9.jpg";
const cseb2 = "https://res.cloudinary.com/diwucid84/image/upload/v1759586134/cseb2_y4qm5e.jpg";
const cseFresher1 = "https://res.cloudinary.com/diwucid84/image/upload/v1759586137/csea-freshers_hwksjl.jpg";
import "./slider.css";

 function Slider () {
 
      
    let slides = [
      {
        "src": csea28,
        "alt": "CSE-A 2028"
      },
      {
        "src": cseb28,
        "alt": "CSE-B 2028"
      },
      
      {
        "src": csea27,
        "alt": "CSE-A 2027"
      },
      {
        "src": cseb27,
        "alt": "CSE-B 2027"
      },
      {
        "src": csea2,
        "alt": "CSE-A 2"
      },
      {
        "src": cseb2,
        "alt": "CSE-B 2"
      },
      {
        "src": cseFresher1,
        "alt": "Fresher img csea"
      },
      {
        "src": tasveer2,
        "alt": "Tasveer img cse2"
      },
      {
        "src": tasveer1,
        "alt": "Tasveer img cse1"
      }
    ]
         
    
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === slides.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? slides.length - 1 : slide - 1);
  };

  return (
    <div className="carousel">
      <BsArrowLeftShort onClick={prevSlide} className="arrow arrow-left " />
      {slides.map((item, idx) => {
        return (
          <img
            src={item.src}
            alt={item.alt}
            key={idx}
            className={slide === idx ? "slide object-cover" : "slide slide-hidden"}
          />
        );
      })}
      <BsArrowRightShort
        onClick={nextSlide}
        className="arrow arrow-right"
      />
      <span className="indicators">
        {slides.map((_, idx) => {
          return (
            <button
              key={idx}
              className={
                slide === idx ? "indicator" : "indicator indicator-inactive"
              }
              onClick={() => setSlide(idx)}
            ></button>
          );
        })}
      </span>
    </div>
  );
};
export default Slider