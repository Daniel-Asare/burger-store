import React from 'react'
import {Link} from 'react-scroll'

const NavList =({navToggle,toggle})=> {
  return (
    <ul className={`nav-list ${toggle ? 'toggle':null}`}>
    <Link onClick={navToggle} >Home</Link>
    <Link onClick={navToggle} >About</Link>
    <Link onClick={navToggle} >Offers</Link>
    <Link onClick={navToggle} >Menu</Link>
    <Link onClick={navToggle} >Contact</Link>
  </ul>
  )
}

export default NavList;