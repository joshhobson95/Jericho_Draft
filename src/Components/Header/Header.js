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

const [showProducts, setShowProducts] = useState(false);
const [showGiftcard, setShowGiftcard] = useState(false);
const [showBlog, setShowBlog] = useState(false);
const [showCommunity, setShowCommunity] = useState(false);
const [showFrequentFlowerClub, setShowFrequentFlowerClub] = useState(false);
const [showContact, setShowContact] = useState(false);
const [animateDrop, setAnimateDrop] = useState(0)

function toggleProducts(){
  setShowProducts(!showProducts)
}
function toggleGiftcard(){
  setShowGiftcard(!showGiftcard)
}
function toggleBlog(){
  setShowBlog(!showBlog)
}
function toggleCommunity(){
  setShowCommunity(!showCommunity)
}
function toggleFrequentFlowerClub(){
  setShowFrequentFlowerClub(!showFrequentFlowerClub)
}
function toggleContact(){
  setShowContact(!showContact)
}

function closeMenus(){
  setShowProducts(false)
  setShowGiftcard(false)
  setShowBlog(false)
  setShowCommunity(false)
  setShowFrequentFlowerClub(false)
  setShowContact(false)
}


// const menuStyles = {
//   height: showProducts || showGiftcard|| showBlog|| showCommunity || showFrequentFlowerClub || showContact ? 'auto' : '0',
//   transition: 'height 0.3s ease-in-out',
//   overflow: 'hidden',
//   Animation: ''
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
      <div className='products_icon' onClick={toggleProducts} >
    <ProductsIcon />
    <span>Products</span>
      </div>

      {showProducts && (
        <ul>
          <NavLink to='/newthisweek'>
            <li>New This Week</li>
          </NavLink>
            <li>Sales</li>
            <li>Brands we Carry</li>
            <li>Southwest Plants</li>
          </ul>
        )}
        </div>
  </div>
{/* ----------------------------------------------------------- */}
  <div className='nav_item'>
    <div className='nav_giftcard'>
    <div className='gift_card_icon' onClick={toggleGiftcard}>
    <GiftCardIcon />
    <span>Gift Cards</span>
      </div>

{showGiftcard && (
    <ul>
        <li>Buy a Card </li>
      </ul>
)}

    </div>
  </div>
{/* ----------------------------------------------------------- */}
  <div className='nav_item'>
    <div className='nav_blog'>
    <div className='blog_icon' onClick={toggleBlog}>
      <BlogIcon />
    <span>Blog and Gallery</span>
      </div>

{showBlog && (
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
)}
    </div>
  </div>
  
{/* ----------------------------------------------------------- */}
  <div className='nav_item'>
    <div className='nav_community'>
    <div className='community_icon' onClick={toggleCommunity}>
      <CommunityIcon />
    <span>Community</span>
      </div>

{showCommunity && (
      <ul>
        <li>Partners</li>
        <li>Radio Show</li>
        <li>Seminars</li>
        <li>Clubs around Abq</li>
      </ul>
)}
    </div>
  </div>

{/* ----------------------------------------------------------- */}
  <div className='nav_item'>
    <div className='nav_ffc'>
    <div className='ffc_icon' onClick={toggleFrequentFlowerClub}>
      <FFCIcon />
    <span>Frequent Flower Club</span>
      </div>

      {showFrequentFlowerClub && (
      <ul>
        <NavLink to='/ffc'>
        <li>Join the Frequent Flower Club </li>
        </NavLink>
      </ul>
      )}

    </div>
  </div>
  {/* ----------------------------------------------------------- */}
  <div className='nav_item'>
    <div className='nav_contactus'>
    <div className='contactus' onClick={toggleContact}>
    <ContactUsIcon />
    <span>Contact Us</span>
      </div>
{showContact &&(
    <ul>
        <li>Location info</li>
        <li>Contact Info</li>
        <li>Why Work Here</li>
        <li>Phone Number</li>
      </ul>
)}

    </div>
  </div>
</div>
{/* ----------------------------------------------------------- */}




    </div>
  )
}

export default Header