import React from 'react'
import './Home.css'
import Banner from './Banners/Banner'
import Banner2 from './Banners/Banner2'
import NewThisWeek from '../Home/Containers/ThisWeek'
import FreshIdeas from './Containers/FreshIdeas'
import GardeningCalendar from './Containers/GardeningCalendar'
import NewintheBlog from './Containers/NewintheBlog'
import Gallery from './Gallery/Gallery'
import MoreAboutJericho from './MoreAboutJericho/MoreAboutJericho'




function Home() {
  return (
    <div className='home'>

      <div className='welcome'>
<div className='w'>
        <h4 className='w_1'>Welcome to</h4>
        <h1 className='w_2'>Jericho Nursery</h1>
        <h4 className='w_3'>All you Yard and Garden needs</h4>
</div>
<div className='p_1'>
  <p>
  Welcome to Jericho Nursery, our funky little garden center in Albuquerque’s North Valley. Jericho has its own vibe, we’re a little rustic and a pretty old school, but we’re savvy. We’ve got the tried-and-true products that keep the garden happy and healthy, as well as some great trendy items to pique the interest of new gardeners, and above all, the knowledge to point you in the right direction. We feel strongly that taking care of our people allows them to take better care of you, our customer, and our community. We believe that gardening is an evolutionary process with lots of trail and error, and we’re here to pull you up by your bootstraps when things go wrong and cheer you on in times of bounty. Your success is our success.
  </p>
</div>
      </div>



    <Banner />
    <NewThisWeek />
    <FreshIdeas />
    <GardeningCalendar />
    <NewintheBlog />
    <Banner2 />
    <Gallery />
    <Gallery />
    <MoreAboutJericho />




    </div>
  )
}

export default Home