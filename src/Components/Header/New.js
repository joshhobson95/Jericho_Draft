import React from 'react';
import './New.css';
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import balloons from '../../Assets/Cropped_balloons.jpg'
import logo from '../../Assets/Logo.png'
import ContactUsIcon from '../../SVGs/ContactUsIcon'
import ProductsIcon from '../../SVGs/ProductsIcon'
import GiftCardIcon from '../../SVGs/GiftCardIcon'
import BlogIcon from '../../SVGs/BlogIcon'
import CommunityIcon from '../../SVGs/CommunityIcon'
import FFCIcon from '../../SVGs/FFCIcon'


function New() {
  return (
<div className='header'>
    <div className='photo_banner'>
    <img className='balloons' src={balloons} alt='ballons'/>
      <NavLink to='/'>
        <div className='logo_div'>
            <img className='logo' src={logo} alt='logo'/>
        </div>
      </NavLink>
    </div>
    <nav className="navbar">
      <div className="navbar__logo">
      <NavLink to='/'>
        Logo
        </NavLink>
        </div>
      <ul className="navbar__menu">



      <li className="navbar__menuItem navbar__menuItem--hasDropdown">
      <ProductsIcon /> 
      <p>Products</p> 

      <ul className="navbar__dropdownMenu">
          <NavLink to='/newthisweek'>
            <li className="navbar__dropdownItem">This Week's Specials</li>
          </NavLink>
            <li className="navbar__dropdownItem">Promotions</li>
            <li className="navbar__dropdownItem">Brands we Carry</li>
            <li className="navbar__dropdownItem">Delivery and Planting</li>
        </ul>
      </li>


         <li className="navbar__menuItem navbar__menuItem--hasDropdown">
         <GiftCardIcon />
            <p>About</p>

            <ul className="navbar__dropdownMenu">
      <NavLink to='/giftcard'>
        <li className="navbar__dropdownItem">Buy a Card </li>
      </NavLink>
      </ul>
  
        </li>

        <li className="navbar__menuItem navbar__menuItem--hasDropdown">
        <BlogIcon />
          <a href="#">Blog and Gallery</a>

          <ul className="navbar__dropdownMenu">
          <NavLink to='/blog'>
         <li className="navbar__dropdownItem">Blog and Gallery</li>
        </NavLink>
        <NavLink to='/gardeningcalendar'>
         <li className="navbar__dropdownItem">Gardening Calendar</li>
        </NavLink>
        <NavLink to='/freshideas'>
         <li className="navbar__dropdownItem">Fresh Ideas</li>
        </NavLink>
         <li className="navbar__dropdownItem">Gardening Resources</li>
        <NavLink to='/login'>
         <li className="navbar__dropdownItem">Admin Login</li>
        </NavLink>
          </ul>
        </li>

        <li className="navbar__menuItem navbar__menuItem--hasDropdown">
        <CommunityIcon />
          <a href="#">Community</a>

          <ul className="navbar__dropdownMenu">
               <NavLink to='/partners'>
         <li className="navbar__dropdownItem">Partners</li>
        </NavLink>
        <NavLink to='/radio'>
         <li className="navbar__dropdownItem">Radio Show</li>
        </NavLink>
        <NavLink to='/seminars'>
         <li className="navbar__dropdownItem">Seminars</li>
        </NavLink>
        <NavLink to='/clubs'>
         <li className="navbar__dropdownItem">Clubs around Abq</li>
        </NavLink>
         <li className="navbar__dropdownItem">The Birds!</li>
          </ul>
        </li>

        
        <li className="navbar__menuItem navbar__menuItem--hasDropdown">
         <FFCIcon />
            <p>Frequent Flower Club</p>

            <ul className="navbar__dropdownMenu">
            <NavLink to='/ffc'>
        <li>Join the Frequent Flower Club </li>
        </NavLink>
      </ul>
  
        </li>

        <li className="navbar__menuItem navbar__menuItem--hasDropdown">
        <ContactUsIcon />
          <a href="#">Contact Us</a>

          <ul className="navbar__dropdownMenu">
               <NavLink to='/aboutus'>
        <li>About Us</li>
      </NavLink>
        <li>Contact Info</li>
        <li>Why Work Here</li>
        <li>Phone Number</li>
        <li>Nursery Map</li>
          </ul>
        </li>

  
      </ul>
    </nav>
</div>
  );
}

export default New;
