import React, {useState,useEffect} from 'react'
import '../css/Header.css'
import {Link} from 'react-router-dom'

import {AiOutlineShoppingCart,AiOutlineMenu} from 'react-icons/all'
import NavList from './NavList'
const Navbar =()=> {
  const [toggle,setToggle] = useState(false)
  const [scrolled,setScrolled] = useState(false)

  const handleScroll=() => {
    const offset=window.scrollY;
    if(offset > 200 ){
      setScrolled(true);
    }
    else{
      setScrolled(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll',handleScroll)
  })
  
  const navToggle=()=>{
    setToggle(!toggle)
  }
  return (
       <header className={`nav ${scrolled && 'scrolled'}`}>
       <h1 className="nav-title">Jackles</h1>
          <NavList navToggle={navToggle} toggle={toggle}/>
          <div className="icons-container">
          <span className="nav-icon icon" onClick={navToggle} ><AiOutlineMenu/></span>
          <Link className="cart-icon icon"><AiOutlineShoppingCart/></Link>
          </div>
      </header>
  )
}

export default Navbar
