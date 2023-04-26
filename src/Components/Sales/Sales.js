import React from 'react'
import './Sales.css'
import { salesData } from './salesData';

function Sales() {



    function getCurrentWeekRange() {
        const today = new Date();
        const firstDayOfWeek = new Date(today.setDate(today.getDate() - today.getDay() + (today.getDay() === 0 ? -6 : 1)));
        const lastDayOfWeek = new Date(today.setDate(today.getDate() - today.getDay() + 6));
        const startDate = firstDayOfWeek.toLocaleDateString();
        const endDate = lastDayOfWeek.toLocaleDateString();
        const weekRange = `${startDate} - ${endDate}`;
        return weekRange;
      }
      const currentWeekRange = getCurrentWeekRange();
  return (
    <div className='sales'>

        <div className='sales_welcome'>
        <h1>This Week's Specials </h1>
        <br></br>
        <h6>For the Week:</h6>
        <p>( {currentWeekRange} )</p>
        </div>

        <div className='sales_body'>
        <div className='sales_body_header'>
            <h1>This week's Specials revolve around the theme of: ______</h1>
        </div>

        <div className='sales_cards_container'> 
        {salesData.map((item) => (
<div className='sales_card'> 
                    <div className='sales_card_top'>
                        <img src={item.img_url} alt='' className='sales_card_img'/>
                    </div>
                    <div className='sales_card_bottom'>
                        <h1>{item.name}</h1>   
                        <h3>{item.description}</h3>   
                        <h2>{item.price}</h2>
                        <h2>{item.discount}</h2>

                        <div className='sales_card_overflow'>
                            <span>{item.tagline}</span>
                            <span>{item.start_date}--</span>
                            <span>{item.expiration}</span>
                        </div>   
                    </div>
                  
</div>
            ))}
        </div>

    </div>





    </div>
  )
}

export default Sales