import React from 'react'
import DeliveryVan from '../../../SVGs/DeliveryVan'
import './Banner2.css'


function Banner2() {
  return (
    <div className='banner2'>
        <div className='b2_img'>
        <div className='b2_1'
                data-aos="fade-right"
                data-aos-duration="500"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
                >
            <div className='b2_2'>
            <h4 className='b2_h4'>Need help getting your goods to your yard?</h4>
            <h1>Delivery and Planting</h1>
            <h4 className='b2_h4g'> For as low as $75 for select areas</h4>
            </div>
            <div className='van'>
            <DeliveryVan />
            <button>Learn More</button>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Banner2;