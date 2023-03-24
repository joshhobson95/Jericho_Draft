import React from 'react'
import MonthGrid from './MonthGrid'
import './GardeningCalendar.css'

function GardeningCalendar() {
  return (
    <div className='gardening_calendar'>
                <div className='gc_welcome'>
            <h1>Gardening Calendar</h1>
                <p> 
                    Have you ever wondered when the right time to plants seeds are? Or perhaps aren't sure when the best time to plant a large shade tree is? What should I do in the winter months to prep my garden? With the Jericho Gardening Calendar, you can get all of these answers. Catered specifically to New Mexico, this gardening calendar will serve as your gardening guide year round. 
                </p>
        </div>
        <MonthGrid />



        <img className='gc_pic' alt='' src='https://cdn.shopify.com/s/files/1/0089/1562/articles/Copy-of-Untitled_d817d6b4-c07d-42da-936d-8092d222fdd8_700x.png?v=1630381972'/>




    </div>
  )
}

export default GardeningCalendar