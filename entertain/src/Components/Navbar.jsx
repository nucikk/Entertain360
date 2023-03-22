import React from 'react'
import "../Style/Navbar.css"
import logoEntertain from "../Image/entertainlogo.png"
import { Link } from "react-router-dom"

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
    <Link to="/registration">
        <button className="navigation_login">შესვლა</button>
    </Link>

   </nav>
  </>
 )
}

export default Navbar
