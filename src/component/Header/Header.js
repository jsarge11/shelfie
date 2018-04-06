import React from 'react'
import '../Header/header.css'
import logo from '../../img/shelfie_icon.png'

export default function Header(props) {
 return (
  <div className="header">
   <div className="logo">
      <img height="35px" src={logo} alt="logo"/> 
   </div>
   <div className="text">
      SHELFIE  
      Dashboard 
      Add Inventory

   </div>
  </div>
 );
}