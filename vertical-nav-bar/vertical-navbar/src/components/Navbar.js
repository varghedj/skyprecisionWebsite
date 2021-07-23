import React, { useState } from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { Data } from './NavbarData'
import './Navbar.css'
import { IconContext } from 'react-icons'

function Navbar() {
  const [navbar, setNavbar] = useState(true)

  const showNavbar = () => setNavbar(!navbar)

  return (
    <>
    <IconContext.Provider value={{color: '#fff'}}>
      <div className='navbar'>
          <Link to='#' className='menu-bars'>
           <FaIcons.FaBars onClick={showNavbar} />
           SKYPRECISION
          </Link>
      </div>
      <nav className={navbar ? 'nav-menu active' : 'nav-menu'}>
        <ul className='nav-menu-items' onClick={showNavbar}>
          <li className='navbar-toggle'>
            <Link to='#' className='menu-bars'>
              <AiIcons.AiOutlineClose />
            </Link>
          </li>
          {Data.map((item, index) => {
            return (
              <li key={index} className={item.className}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
      </IconContext.Provider>
    </>
  )
}

export default Navbar
