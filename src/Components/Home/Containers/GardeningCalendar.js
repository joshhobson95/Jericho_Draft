import React from 'react'
import './GardeningCalendar.css'
import icon2 from '../../../Assets/transparent.png'
import banner from '../../../Assets/garden_banner.jpg'


function GardeningCalendar() {

    function formatDate(newDate) {
        const months = {
          0: 'January',
          1: 'February',
          2: 'March',
          3: 'April',
          4: 'May',
          5: 'June',
          6: 'July',
          7: 'August',
          8: 'September',
          9: 'October',
          10: 'November',
          11: 'December',
        }
       
        const d = newDate
        const monthIndex = d.getMonth()
        const monthName = months[d.getMonth()]
        const formatted = ` ${monthName} `
        return formatted.toString()
      }
     



    return (

        <div className='home_container_outer'>
            <div className='gc_container'>
            <div className='home_container_header'>
                    <div className='hc_icon'>
                        <img  src={icon2} className="c_icon"/>
                    </div>
                    <div className='home_container_header_text'>
                        <h3> {formatDate(new Date())} Gardening Calendar</h3>
                    </div>
            </div>
    
            <div className='hc_body'>
                    <div className='hc_img'>
                        <img src={banner} className='c_image' alt=''/>
    
                    </div>
                    <div className='hc_paragraph'>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        </p>
                        <button className='gc_button'>Learn More</button>
                    </div>
                    </div>
            </div>
    
    
        </div>
      
      )
}

export default GardeningCalendar