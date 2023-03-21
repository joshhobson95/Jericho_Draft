import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './NTWgallery.css'
import { GalleryData } from './NTWgallerydata';



function Gallery() {

  var settings = {
    className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 3,
      speed: 500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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