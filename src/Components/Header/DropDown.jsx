import React, { useState } from 'react';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { NavLink } from 'react-router-dom'
export default function Example({DropUp}) {
  const [dropdownactive, setdropdownactive] = useState(false);

  const handleDropDown = () => {
    setdropdownactive(!dropdownactive);
  };
  const closeDropDown = () => {
    setdropdownactive(false);
  };
  return (
    <Menu as="div"
    onClick={()=>{close();
      closeDropDown();
    }}
    className={`relative ${dropdownactive? 'pb-48 transform duration-100 ease-out': 'pb-0 transform duration-75 ease-in'} inline-block text-left`}
    >
      <div>
        <MenuButton className={`block pr-4 pl-3 lg:duration-200 lightcolor hover:bg-transparent border-0 lg:p-0`} onClick={handleDropDown}>
          BATCHES
        </MenuButton>
      </div>
      
      <MenuItems
        onClick={()=>{close();
          closeDropDown();
          DropUp();
        }}
        transition
        className="absolute right-0 z-10 mt-3 w-[8rem] origin-top-right rounded-md bg-[#d1fffa] bg-opacity-80 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        
        <div className="py-1">
          
          <MenuItem onClick={()=>{close();
          closeDropDown();
            DropUp();
          }}>
           
              {({ close }) => (
              <NavLink
                  onClick={()=>{close();
                    closeDropDown();
                    DropUp();
                  }}
                  to="/Batches:2026"
                  className={
                    `block px-4 py-2 text-3xl text-center text-[#0e4a3f] data-[focus]:bg-[#d1fffa80] data-[focus]:text-[#081513]  lg:duration-200  hover:bg-transparent border-0  lg:p-0`
                  }
                >2026</NavLink>
              )}
          </MenuItem>
          <MenuItem >
           
                {({ close }) => (
                <NavLink
                  onClick={()=>{close();
                    closeDropDown();
                    DropUp();
                  }}
                  to="/Batches:2027"
                  className={
                    `block px-4 py-2 text-3xl text-center text-[#0e4a3f] data-[focus]:bg-[#d1fffa80] data-[focus]:text-[#081513]  lg:duration-200  hover:bg-transparent border-0  lg:p-0`
                  }
                >2027</NavLink>
              )}
          </MenuItem>
          <MenuItem >
            
              {({ close }) => (
              <NavLink
                  onClick={()=>{close();
                    closeDropDown();
                    DropUp();
                  }}
                  to="/Batches:2028"
                  className={
                    `block px-4 text-center py-2 text-3xl text-[#0e4a3f] data-[focus]:bg-[#d1fffa80] data-[focus]:text-[#081513]  lg:duration-200  hover:bg-transparent border-0  lg:p-0`
                  }
                >2028</NavLink>
              )}
          </MenuItem>
        </div>
        
      </MenuItems>
      
    </Menu>
  )
}
