import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Gallery.css'
import { GalleryData } from './GalleryData';



function Gallery() {

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
      



    
  return (
    <div className='carousel'>

        <Slider {...settings}>


            {GalleryData.map((item) => (
                    <div className='card'> 
                    <div className='card_top'>

                     <img src={require('../../../Assets/' + item.img + '.jpg')} alt={item.title} className="gallery_photo" />

                     <img src={require('../../../Assets/'  + item.img + '.jpg')} alt={item.title} className="gallery_photo_background" />

                    </div>
                    <div className='card_bottom'>
                
                        <p>{item.captions}</p>
                        <a>{item.links}</a>

                    </div>


                    </div>
            ))}

            
        </Slider>








    </div>
  )
}

export default Gallery