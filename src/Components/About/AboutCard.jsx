import React from 'react'
import image from "../../assets/default.jpg";
import "../Home/home.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faInstagram,
    faGithub,
    faLinkedin,
  } from "@fortawesome/free-brands-svg-icons";
  import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
function AboutCard(props) {
  return (
   
    <div >
            <div
              onClick={() => popup(item)}
              className="pcard  h-[400px] w-[275px] backdrop-blur-sm bg-[#cdcda5]/30 border-4 border-opacity-20 rounded-xl border-[#004040]  flex justify-around items-center flex-col shadow-md hover:shadow-xl brightness-95 hover:brightness-100 text-[#2c3232aa] hover:text-[#004040] hover:scale-[1.05] transform transition duration-500 ease-in-out"
            >
              <div className="mt-3 rounded-full h-[195px] w-[195px]">
                <img className="h-[195px] w-[195px] rounded-full object-cover" src={props.pic} />
              </div>
              <div className="flex ml-[2%] mr-[2%] items-center flex-col">
                <p className=" text-2xl text-center poppins-extrabold font-black line-clamp-2 uppercase">{props.named}</p>
                <p className=" mt-2 text-2xl sofia uppercase font-thin line-clamp-1">{props.work}</p>
              </div>
              <div className="flex w-[210px] justify-around">
                {(props.Instagram)?
                <a href={props.Instagram}  >
                <FontAwesomeIcon className="size-7 hover:text-[#004040] duration-00 ease-in-out hover:scale-[1.1] transform" icon={faInstagram} title="Instagram"/>
                </a>
                :''}
                {(props.GitHub)?
                <a href={props.GitHub}  >
                <FontAwesomeIcon className="size-7 hover:text-[#004040] duration-00 ease-in-out hover:scale-[1.1] transform " icon={faGithub} title="GitHub"/>
                </a>
                :''}
                {(props.LinkedIn)?
                <a href={props.LinkedIn}  >
                <FontAwesomeIcon className="size-7 hover:text-[#004040] duration-00 ease-in-out hover:scale-[1.1] transform" icon={faLinkedin} title="LinkedIn"/>
                </a>
                :''}
                {(props.email)?
                <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${props.email}`}>
                <FontAwesomeIcon className="size-7 hover:text-[#004040]] duration-00 ease-in-out hover:scale-[1.1] transform" icon={faEnvelope} title={"Mail "+ props.email}/>
                </a>
                :''}
              </div>
            </div>
            </div>
  )
}

export default AboutCard