import React from 'react'
import ProfileCard from '../Profile Card/ProfileCard';
import { useAuth0 } from "@auth0/auth0-react";
function Batches({year}) {
  const { user, loginWithRedirect, isAuthenticated: realAuth, logout } = useAuth0();

  const isAuthenticated = import.meta.env.MODE === "development" ? true : realAuth;


  
  
  console.log(year);
  return (
    <div>
    {isAuthenticated?
    (<div className="flex flex-wrap  justify-center">
      <ProfileCard year={year}/>
    </div>):(<div className='flex flex-center justify-center items-center h-[65vh] w-[100%]' >
      <p className='text-center text-3xl font-[Solvay] text-[#004040]'>User Not Logged In!☹️</p>
    </div>)
    }
    </div>

  );
}

export default Batches;
