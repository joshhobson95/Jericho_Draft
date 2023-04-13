import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Gallery.css'
import { GalleryData } from './GalleryData'



function Gallery() {

    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "300px",
        slidesToShow: 3,
        speed: 500
      };



    
  return (
    <div className='h_carousel'>
        <Slider {...settings}>
            {GalleryData.map((item) => (
                    <div className='home_gallery_card'> 

             <div className='home_photo_gallery_container'>
                <img alt='' className='home_gallery_photo' src={item.img} />
             </div>

                    </div>
            ))}

            
        </Slider>








    </div>
  )
}

export default Gallery