import React from 'react'
import "../Style/Navbar.css"
import logoEntertain from "../Image/entertainlogo.png"

const Navbar = () => {
 const navLinks = [
  { title: "მთავარი", link: "/" },
  { title: "ღონისძიებები", link: "/" },
  { title: "ჩვენს შესახებ", link: "/" },
  { title: "პარტნიორები", link: "/" },
  { title: "კონტაქტი", link: "/" },
 ]
 return (
  <>
   <nav className="navigation">
    <img className="navigation_logo" src={logoEntertain} alt="" />
    <ul className="navigation_list">
     {navLinks.map(({ title, link }, index) => (
      <li className="navigation_item" key={index}>
       <a className="navigation_link" href={link}>
        {title}
       </a>
      </li>
     ))}
    </ul>
    <button className="navigation_login">შესვლა</button>
   </nav>
  </>
 )
}

export default Navbar
