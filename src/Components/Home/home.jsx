
import  "./home.css"

import logo from "../../assets/logo/logocse.svg";
const cseAimg = "https://res.cloudinary.com/diwucid84/image/upload/v1759586450/cseA-1_or32xq.jpg"
const cseBimg = "https://res.cloudinary.com/diwucid84/image/upload/v1759586460/cseB-1_zydzsu.jpg"



import { useEffect, useState } from "react";

// import welcome from '../../assets/logo/Welcome.svg'
// import image from '../../assets/Nature.jpg'
// import Carousel from '../SwipeCarousel/SwipeCarousel';
import Slider from './ImageSlider/slider';
import { Typewriter} from 'react-simple-typewriter';

function Slideshow({ images }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3000); 

    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] sm:w-[75%] md:w-[70%] lg:w-[65%] xl:w-[60%] aspect-[832/511] rounded-3xl bg-blue-300 border-black border-8 sm:border-[12px] md:border-[16px] z-10 overflow-hidden">
      <img
        key={images[current]}
        className="w-full h-full object-cover transition-opacity duration-1000 ease-in-out"
        src={images[current]}
        alt="Batch"
      />
    </div>
  );
}

export default function Home() {
  return (
    <div>
      
      <div className="mt-[5vh] lg:mt-5 flex justify-center items-center h-[30vh] lg:h-[30vh] w-[100vw] fade-slide-up ">
        <img
          className="lg:mb-[5%] h-[15vh] lg:h-[20vh] w-[80vw]"
          src={logo}
          alt="Logo"
        />
      </div>

      
      <div className="flex justify-center items-center h-[60vh] lg:h-[65vh] w-full px-4 fade-slide-up2">
        <div className="w-full max-w-[1300px] h-full rounded-3xl relative overflow-hidden">
          <div className="absolute bottom-0 w-full h-[50%] sm:h-[55%] md:h-[60%] rounded-tr-3xl rounded-tl-3xl bg-[#85916f]"></div>

          <Slideshow images={[cseAimg, cseBimg]} />
        </div>
      </div>

      
      <div className="text-[#2e433f] ml-[10%] mr-[10%] flex flex-col items-center justify-center gap-5 text-justify">
        <h1 className="text-center text-3xl stroke-col mt-20 text-[#202725] ethno font-semibold tracking-wider lg:text-5xl">
          <Typewriter
            words={[
              "WELCOME FRESHERS...",
              "A HEARTY WELCOME TO THE CSE CHAPTER '29",
            ]}
            loop={0}
            typeSpeed={90}
            deleteSpeed={50}
            delaySpeed={5000}
          />
        </h1>
        
          <p className="text-lg poppins tracking-[0.018em] lg:text-2xl">
          This bootcamp is designed to spark your excitement and curiosity about
          knowing your seniors and about the college life which offers a
          vibrant, interactive glimpse into what awaits you. This highlights the
          exciting side of college life, featuring fun events, college fests,
          inspiring student stories, and opportunities.
        </p>
        
        
      </div>

      
      <div className="mb-[8vh] flex justify-center">
        <Slider />
      </div>
    </div>
  );
}