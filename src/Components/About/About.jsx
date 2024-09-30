import React from 'react'
import  "../Home/home.css"
import AboutCard from './AboutCard'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import mongoicon from "../../assets/logo/mongo.png"
import tailwindicon from "../../assets/logo/tailwind.png"
import {
 faReact,faHtml5,faCss3Alt,faJs,faNode,faGithub
} from "@fortawesome/free-brands-svg-icons";
import { SiReact, SiJavascript, SiHtml5, SiCss3, SiGithub, SiTailwindcss, SiNodedotjs, SiVercel, SiMongodb  } from "react-icons/si";
import krishna from "../../assets/about/krishna.png";
import vanessa from "../../assets/about/vanessa.png";
import priyanshu from "../../assets/about/priyanshu.png";
import kohinoor from "../../assets/about/kohinoor.jpg";
import partha from "../../assets/about/partha.jpg";
import shivashish from "../../assets/about/shivashish.png";
import manasmita from "../../assets/about/masnasmita.jpg";
import dhairyawan from '../../assets/about/Dhairyawan.jpg';

function about() {
  return (
    <div className="flex justify-center items-center  h-[100%] flex-col">
    <div className="text-center mt-5 mb-[60px]">
    <h1 className=" text-8xl lg:text-9xl mb-4 mr-[10%] ml-[10%] font-bold text-[#002F26] sofia">
  <span>ABOUT US</span>
</h1>
<h1 className=" text-[#d0f0ea] ml-[10%] mr-[10%] flex flex-col items-center justify-center gap-5 text-justify">
<p className="text-4xl sofia lg:text-5xl text-center text-[#004040]">Welcome to CSE Chapter '28</p>
      <p className="text-lg poppins tracking-[0.018em] lg:text-3xl">
Crafted with passion and dedication, this website is the result of hard work and creativity from our team.
We hope this platform serves as a helpful resource for staying connected, informed, and inspired and you find it as exciting and useful as we envisioned!!!
</p>
</h1>
    </div>
<div className=' flex flex-col justify-center items-center mb-[90px]'>
  <h1 className='text-7xl lg:text-8xl mb-6 mr-[10%] ml-[10%] font-semibold text-white sofia'>Our Team</h1>
    <div className="cards flex-wrap flex flex-row justify-center gap-10 max-w-[80vw]">
      <AboutCard named="Krishna Kalra" 
        pic={krishna}
        Instagram="https://www.instagram.com/krishna_kalra_7/"
        GitHub="https://github.com/KrishnaKalra/"
        LinkedIn="https://www.linkedin.com/in/krishna-kalra-88aa72286/"
         email="b123067@iiit-bh.ac.in"
        work=" Frontend || Backend "
      />
      <AboutCard named="Shivashish Saklani"
        pic={shivashish}
        Instagram="https://www.instagram.com/_shivashish_23/"
        GitHub="https://github.com/Shivashish023"
        LinkedIn="https://www.linkedin.com/in/shivashish-saklani-660173280"
        email="b123121@iiit-bh.ac.in"
        work="Frontend "
      />
      <AboutCard named="Partha Sarathi Das"
        pic={partha}
        Instagram="https://www.instagram.com/its_partha.sd/"
        GitHub="https://github.com/partha120804/"
        LinkedIn="https://www.linkedin.com/in/parthadas12/"
        email="b123086@iiit-bh.ac.in"
        work="Frontend || UI/UX"
      />
      <AboutCard named="P Kohinoor"
        pic={kohinoor}
        Instagram="https://www.instagram.com/_kohinoooorr"
        GitHub="https://github.com/kohi-noor"
        LinkedIn="https://www.linkedin.com/in/kohinoor-p-6492aa282/"
        email="b123083@iiit-bh.ac.in"
        work="Frontend || UI/UX "
      />
      <AboutCard named="Dhairyawan Kumar Tiwari"
        pic={dhairyawan}
        Instagram="https://www.instagram.com/dhairyawankumartiwari"
        GitHub="https://github.com/dhairyawan"
        LinkedIn="hhttps://www.linkedin.com/in/dhairyawan-kumar-tiwari-b5888328b"
        email="b123051@iiit-bh.ac.in"
        work=" Frontend "
      />
      <AboutCard named="Priyanshu Shekhar"
        pic={priyanshu}
        Instagram=""
        LinkedIn="https://www.linkedin.com/in/priyanshu01shekhar01/"
        GitHub="https://github.com/TitoTimber"
        email="b323027@iiit-bh.ac.in"
        work=" UI/UX "
      />
      <AboutCard named="Vanessa G Reddy"
        pic={vanessa}
        Instagram="https://www.instagram.com/simplyy._vee/"
        GitHub=""
        LinkedIn="https://www.linkedin.com/in/g-vanessa-reddy-785943297/"
        email="b123058@iiit-bh.ac.in"
        work=" UI/UX "
      />
      <AboutCard named="Manasmita Pradhan"
        pic={manasmita  }
        work=" Content "
        Instagram=""
        GitHub="https://github.com/Manasmita-05"
        LinkedIn="https://www.linkedin.com/in/manasmita-pradhan-470a89292"
        email="b123072@iiit-bh.ac.in"
      />
    </div>
</div>
<h1 className='text-5xl lg:text-7xl mb-5 mr-[10%] ml-[10%] text-white sofia'>Tech Stack Used</h1>
<div className='mr-[10%] ml-[10%] mb-10 flex flex-row justify-between align-middle text-lg gap-[1em] lg:text-4xl flex-nowrap lg:gap-[1.5em] text-[#d0f0ea]'>
  <SiReact title="React"/>
  <SiHtml5 title="HTML 5"/>
  <SiCss3 title="CSS 3"/>
  <SiJavascript title="JavaScript"/>
  <SiNodedotjs title="Node.js"/>
  <SiMongodb title="MongoDB"/>
  <SiTailwindcss title="TailwindCSS"/>
  <SiVercel title="Vercel"/>
  <SiGithub title="GitHub"/>
</div>
  </div>
  )
}

export default about