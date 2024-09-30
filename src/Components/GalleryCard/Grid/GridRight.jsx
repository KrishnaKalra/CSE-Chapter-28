import React from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { FiArrowRight, FiMail, FiMapPin } from "react-icons/fi";
import { SiGithub, SiTiktok, SiYoutube } from "react-icons/si";
import { TiSocialTwitter } from "react-icons/ti";
import image from '../../../assets/Nature.jpg';
import Default from '../../../assets/default.jpg'
import { useLocation } from 'react-router-dom';
import '../../Home/home.css';

export const RevealBentoR = () => {
 
  
  return (
    <div className="min-h-screen px-4 py-12 text-zinc-50">
      <motion.div
        initial="initial"
        animate="animate"
        transition={{
          staggerChildren: 0.05,
        }}
        className="mx-auto grid max-w-7xl grid-flow-dense grid-cols-12 gap-4"
      >
        <HeaderBlock />
        <SocialsBlock />
      </motion.div>
    </div>
  );
};

const Block = ({ className, ...rest }) => {
  return (
    <motion.div
      variants={{
        initial: {
          scale: 0.5,
          y: 50,
          opacity: 0,
        },
        animate: {
          scale: 1,
          y: 0,
          opacity: 1,
        },
      }}
      transition={{
        type: "spring",
        mass: 3,
        stiffness: 400,
        damping: 50,
      }}
      className={twMerge(
        "col-span-4 rounded-lg bg-white p-5",
        className
      )}
      {...rest}
    />
  );
};

const HeaderBlock = () => {
  const location = useLocation();
  const smalpics = location.state && location.state.smalpics;
  const title = location.state && location.state.title;
  const para = location.state && location.state.para;
  return(
  
  <Block className="col-span-12  row-span-2 md:col-span-6 bg-[#FFF3] lg:bg-[#0008]">
    <h1 className="mb-2 ">
      <img className=" object-cover" src={smalpics.pic1}></img>
    </h1>
    <p className="mt-5 mb-2 text-center text-4xl text-white solway font-bold uppercase">{title}</p>
    <div
      id="message"
      rows="8"
      className="p-2.5 w-full text-xl rounded-lg   focus:border-transparent focus:ring-0 focus:outline-none resize-none placeholder-opacity-100 placeholder-gray-500 lg:bg-[#B2D7D0] lg:bg-opacity-10 text-justify solway text-[#d0f0ea] text-justify-center"
      >
       {para}
    </div>
  </Block>
);
}

const SocialsBlock = () =>{
  const location = useLocation();
  const smalpics = location.state && location.state.smalpics;
 
  return (
  <>
    <Block
      whileHover={{
        rotate: -1.5+"deg",
        scale: 1.06,
      }}
      className="col-span-6 bg-[#FFF3] lg:bg-[#0008]  pb-[40px] md:col-span-3"
    >
      <div
        href="#"
        className="grid h-full place-content-center text-3xl text-[#002f26]"
      >

        <img className="aspect-square object-cover" src={smalpics.pic2} />
    
      </div>
    </Block>
    <Block
      whileHover={{
        rotate: 1.5+"deg",
        scale: 1.06,
      }}
      className="col-span-6 bg-[#FFF3] lg:bg-[#0008]  pb-[40px] md:col-span-3"


    >
      <div
        className="grid h-full place-content-center text-3xl text-white bg-opacity-50"
      >
        <img className="aspect-square object-cover" src={smalpics.pic3}/>
      </div>
    </Block>
    <Block
      whileHover={{
        rotate: -1.5+"deg",
        scale:1.06,
      }}
      className="col-span-6 bg-[#FFF3] lg:bg-[#0008]  pb-[40px] md:col-span-3"

    >
      <div
        href="#"
        className="grid h-full place-content-center text-3xl text-black"
      >
        <img className="aspect-square object-cover" src={smalpics.pic4}/>
      </div>
    </Block>
    <Block
      whileHover={{
        rotate: 1.5+"deg",
        scale: 1.06,
      }}
      className="col-span-6 bg-[#FFF3] lg:bg-[#0008]  pb-[40px] md:col-span-3"

    >
      <div
        href="#"
        className="grid h-full place-content-center text-3xl text-white"
      >
        <img className="aspect-square object-cover" src={smalpics.pic5}/>
      </div>
    </Block>
  </>
);
}

