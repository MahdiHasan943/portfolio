import React, { useEffect, useState } from 'react'
import { styles } from '../styles';
import { logo,mlogo,newLogo, menu, close } from '../assets';
import { Link, NavLink } from 'react-router-dom';
import { navLinks } from "../constants";

const Navbar = () => {

 const [active,setActive] =useState(false)
  useEffect
  return (
    
    <nav className={`${styles.paddingX} w-full flex items-center z-20 fixed top-0 bg-primary`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link to="/" className='flex items-center gap-2'
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0,);
}}>
          <img src={newLogo} className="h-9 w-9 object-contain" alt="logo" />
          <p className='text-white text-[18px] cursor-pointer font-bold'>Mahdi
            <span className='sm:block hidden '>Hasan</span></p>
        </Link>

        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              // onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}

        </ul>
      </div>
      
  </nav>
  )
}

export default Navbar