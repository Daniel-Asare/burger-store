import React, {useState,useEffect} from 'react'
import '../css/Header.css'
import {Link} from 'react-scroll'
import {AiOutlineShoppingCart,AiOutlineMenu} from 'react-icons/all'
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
          <ul className={`nav-list ${toggle ? 'toggle':null}`}>
            <Link onClick={navToggle} >Home</Link>
            <Link onClick={navToggle} >About</Link>
            <Link onClick={navToggle} >Offers</Link>
            <Link onClick={navToggle} >Menu</Link>
            <Link onClick={navToggle} >Contact</Link>
          </ul>
          <div className="icons-container">
          <span className="nav-icon icon" onClick={navToggle} ><AiOutlineMenu/></span>
          <span className="cart-icon icon"><AiOutlineShoppingCart/></span>
          </div>
      </header>
  )
}

export default Navbar
