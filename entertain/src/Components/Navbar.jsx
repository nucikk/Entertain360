import React from 'react'

const Navbar = () => {
 const menuItems = [
  { title: "მთავარი", link: "/" },
  { title: "ღონისძიებები", link: "/" },
  { title: "ჩვენს შესახებ", link: "/" },
  { title: "პარტნიორები", link: "/" },
  { title: "კონტაქტი", link: "/" },
 ]
 return (
  <>
   <nav>
    <ul>
     {menuItems.map((menuItem, index) => (
      <li key={index}>
       <a href={menuItem.link}>{menuItem.title}</a>
      </li>
     ))}
    </ul>
   </nav>
  </>
 )
}

export default Navbar
