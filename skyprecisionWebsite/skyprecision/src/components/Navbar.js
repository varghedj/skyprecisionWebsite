import React,  { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import {ReactComponent as Icon } from './icon.svg'
import { Button } from './Button';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setbutton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if(window.innerWidth <= 960) {
      setbutton(false)
    } else {
      setbutton(true)
    }
  }

  window.addEventListener('resize', showButton);

  return (
    <>
      <div className="navbar">
        <div className="navbar-container container">
          <Link className="navbar-logo">
            <Icon classname='navbar-icon' height='50px' width='50px'/>
            SKYPRECISION
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </div>
          <ul classname={click ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
              <Link to='/' className="nav-links">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to='/about' className="nav-links">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to='/team' className="nav-links">
                Team
              </Link>
            </li>
            <li className="nav-btn">
              {button ? (
                <Link to='/log-in' className="btn-link">
                  <Button buttonStyle='btn-outline'>LOG-IN</Button>
                </Link>
              ) : (
                <Link to='/log-in' className="btn-link">
                  <Button buttonStyle='btn-outline' buttonSize='btn-mobile'>
                    LOG-IN
                  </Button>
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Navbar
