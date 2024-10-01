import React from "react";
import { useEffect, useState, useRef } from "react";
import logo from "../../assets/logo/logocse.svg";
import { NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import Example from "./DropDown";
function header() {
  const { user, loginWithRedirect, isAuthenticated, logout } = useAuth0();

  console.log(user);
  let newAccount = async () => {
    let year = "20" + (Number(user.email.slice(2, 4)) + 4);
    console.log(year);
    let id = user.email.slice(0, 7).toUpperCase();
    const check = await axios.get(
      "https://cse-chapter-28-server.vercel.app/api/" + year + "/id?id=" + id
    );
    if (check.data.length == 0) {
      try {
        await axios.post(
          "https://cse-chapter-28-server.vercel.app/api/" +
            year +
            "/add?name=" +
            user.name +
            "&id=" +
            id
        );
      } catch (err) {
        console.error(err.message);
      }
    }
  };
  if (isAuthenticated) {
    const email = user.email;
    //Branch Change IDs
    //27 Batch- "b323027","b523055","b423024","b223048","b523068"
    //26 Batch- "b222032","b322006","b322020","b322037","b422001","b522034","b222010","b322029","b322035","b422019"
    //25 Batch- "b221021","b221029","b321031","b421037","b421054","b521002"
    const BranchChange=["b323027","b523055","b423024","b223048","b523068","b222032","b322006","b322020","b322037","b422001","b522034","b222010","b322029","b322035","b422019"]
    if (email.slice(0, 2) != "b1"&&!BranchChange.includes(email.slice(0,7)) ) {
      alert("Email Invailid");
      logout();
    } else {
      newAccount();
    }
  }
  let hamRef = useRef();
  const [hamburger, setHamburger] = useState("invisible");
  let EnableBar = () => {
    if (hamburger == "invisible") setHamburger("visible");
    else setHamburger("invisible");
  };
  let DisableBar = () => {
    console.log(hamburger);
    if (hamburger == "visible") setHamburger("invisible");
  };
  return (
    <div >
      <nav>
        <div className=" w-screen flex justify-between">
          <div>
            <img className=" ml-5 mt-2 w-28 h-20" src={logo} />
          </div>
          <div className="header flex">
            <ul
              className={`flex ${hamburger} bg-[#B2D7D0] bg-opacity-60 backdrop-blur-xl rounded-2xl w-[90vw] absolute left-[46%] p-10 translate-x-[-45%] top-[11%] text-center sm:visible font-bold sm:static z-20 flex-col sm:flex-row text-[2.25rem] lg:mt-6 lg:mr-14 lg:space-x-8 lg:justify-end lg:h-20 lg:max-w-[600px] lg:max-h-20 lg:bg-transparent lg:translate-x-0 lg:p-0 transform duration-100 ease-in-out`}
            >
              <li onClick={DisableBar}>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block pr-4 pl-3 lg:duration-200 ${
                      isActive ? "textcolor underline" : "lightcolor"
                    }    hover:bg-transparent border-0  lg:p-0`
                  }
                >
                  HOME
                </NavLink>
              </li>
              <li onClick={DisableBar}>
                <NavLink
                  to="/Gallery"
                  className={({ isActive }) =>
                    `block pr-4 pl-3 lg:duration-200 ${
                      isActive ? "textcolor underline" : "lightcolor"
                    }   hover:bg-transparent border-0  lg:p-0`
                  }
                >
                  GALLERY
                </NavLink>
              </li>
              <li>
               <Example DropUp={DisableBar} />



              </li>
              <li onClick={DisableBar}>
                <NavLink
                  to="/About"
                  className={({ isActive }) =>
                    `block pr-4 pl-3 lg:duration-200 ${
                      isActive ? "textcolor underline" : "lightcolor"
                    }   hover:bg-transparent border-0  lg:p-0`
                  }
                >
                  ABOUT
                </NavLink>
              </li>

              {isAuthenticated? (
                <li onClick={DisableBar}>
                  <NavLink
                    to="/Profile"
                    className={({ isActive }) =>
                      `block pr-4 pl-3 lg:duration-200 ${
                        isActive ? "textcolor underline" : "lightcolor"
                      }   hover:bg-transparent border-0  lg:p-0`
                    }
                  >
                    PROFILE
                  </NavLink>
                </li>
              ) : (
                <li>
                  <button
                    className="`block pr-4 pl-3 lg:duration-200 lightcolor hover:bg-transparent border-0  lg:p-0"
                    onClick={(e) => loginWithRedirect()}
                  >
                    LOGIN
                  </button>
                </li>
              )}
            </ul>

            <FontAwesomeIcon
              icon={faBars}
              className="mt-[1.8rem] mx-4 h-10 text-[##004040] sm:hidden hover:cursor-pointer hover:scale-110 transition lg:duration-300 ease-in-out"
              onClick={EnableBar}
            />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default header;
