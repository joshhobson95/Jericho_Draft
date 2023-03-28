import React from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'
import balloons from '../../Assets/Cropped_balloons.jpg'
import logo from '../../Assets/Logo.png'
import ContactUsIcon from '../../SVGs/ContactUsIcon'
import ProductsIcon from '../../SVGs/ProductsIcon'
import GiftCardIcon from '../../SVGs/GiftCardIcon'
import BlogIcon from '../../SVGs/BlogIcon'
import CommunityIcon from '../../SVGs/CommunityIcon'
import FFCIcon from '../../SVGs/FFCIcon'





function Header() {


// const [isOpen, setIsOpen] = useState(false)

// const handleToggle = () => {
//   setIsOpen(!isOpen);
// };


  
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
{/* --------------------------------------------------------- */}
        <div className='navbar'>
  <div className='nav_item'>
    <div className='nav_products'>
      <div className='products_icon'>
    <ProductsIcon />
      <ul>
        <NavLink to='/newthisweek'>
        <li>New This Week</li>
        </NavLink>
        <li>Sales</li>
        <li>Brands we Carry</li>
        <li>Southwest Plants</li>
      </ul>
    <span>Products</span>

      </div>
    </div>
  </div>
{/* ----------------------------------------------------------- */}
  <div className='nav_item'>
    <div className='nav_giftcard'>
    <div className='gift_card_icon'>
    <GiftCardIcon />
    <ul>
        <li>Buy a Card </li>
      </ul>
    <span>Gift Cards</span>
      </div>
    </div>
  </div>
{/* ----------------------------------------------------------- */}
  <div className='nav_item'>
    <div className='nav_blog'>
    <div className='blog_icon'>
      <BlogIcon />
      <ul>
        <li>Blogs</li>
        <li>Galleries</li>
        <NavLink to='/gardeningcalendar'>
        <li>Gardening Calendar</li>
        </NavLink>
        <NavLink to='/freshideas'>
        <li>Fresh Ideas</li>
        </NavLink>
      </ul>
    <span>Blog and Gallery</span>
      </div>
    </div>
  </div>
  
{/* ----------------------------------------------------------- */}
  <div className='nav_item'>
    <div className='nav_community'>
    <div className='community_icon'>
      <CommunityIcon />
      <ul>
        <li>Partners</li>
        <li>Radio Show</li>
        <li>Seminars</li>
        <li>Clubs around Abq</li>
      </ul>
    <span>Community</span>
      </div>
    </div>
  </div>

{/* ----------------------------------------------------------- */}
  <div className='nav_item'>
    <div className='nav_ffc'>
    <div className='ffc_icon'>
      <FFCIcon />
      <ul>
        <NavLink to='/ffc'>
        <li>Join the Frequent Flower Club </li>
        </NavLink>
      </ul>

    <span>Frequent Flower Club</span>
      </div>
    </div>
  </div>
  {/* ----------------------------------------------------------- */}
  <div className='nav_item'>
    <div className='nav_contactus'>
    <div className='contactus'>
    <ContactUsIcon />
    <ul>
        <li>Location info</li>
        <li>Contact Info</li>
        <li>Why Work Here</li>
        <li>Phone Number</li>
      </ul>
    <span>Contact Us</span>
      </div>
    </div>
  </div>
</div>
{/* ----------------------------------------------------------- */}




    </div>
  )
}

export default Header