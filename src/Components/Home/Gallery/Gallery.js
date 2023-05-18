import React, {useState, useEffect} from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Gallery.css'
import axios from 'axios';



function Gallery() {

  const [galleryData, setGalleryData] = useState([])


  useEffect(() => {
    axios
      .get(`/gallery`)
      .then((res) => {
        setGalleryData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


console.log(galleryData)
  


    const settings = {
        className: "center",
        centerMode: true,
        infinite: false,
        centerPadding: "300px",
        slidesToShow: 3,
        speed: 500
      };



    
  return (
    <div className='h_carousel'>
        <Slider {...settings}>
            {galleryData.map((item) => (
                    <div className='home_gallery_card'> 
             <div className='home_photo_gallery_container'>
             <img src={`https://drive.google.com/uc?export=view&id=${item.img_url}`} className='gallery_photo' alt=''/>
             </div>
                    </div>
            ))}

            
        </Slider>








    </div>
  )
}

export default Gallery