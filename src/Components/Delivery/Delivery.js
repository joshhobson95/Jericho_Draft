import React, {useState, useEffect, useRef} from 'react'
import './Delivery.css'
import plantbox from '../../Assets/plantbox.jpg'
import DeliveryVan from '../../SVGs/DeliveryVan'

function Delivery() {


  const revealRef = useRef(null); 
  const [isAnimated, setIsAnimated] = useState(false); 

  const handleScroll = () => {
    const revealElement = revealRef.current; 
    if (revealElement) {
      const revealTop = revealElement.getBoundingClientRect().top; 
      const windowHeight = window.innerHeight; 

      if (revealTop < windowHeight) {
          setTimeout(() => {
          setIsAnimated(true);
          }, 1000)
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);





  return (
    <div className='delivery'>
        <div className='delivery_welcome'>
            <h1>Delivery and Planting</h1>
            <p>
            Get your green fix without breaking a sweat. Let us deliver and plant, so you don't break a leg! (or a nail for that matter)
            </p>
        </div>

    <div className='delivery_body'>

        <h1>Jericho's Delivery Options</h1>


        <div className={isAnimated ? "" : "decoy"}></div>
        <div className={isAnimated ? "visible" : "reveal-content"}><DeliveryVan className='van'/></div>
  



        <h2>Delivery Range</h2>
        <p>We delivery to Albuquerque and the Greater Albuqueruque Area including Four Hills, the South Valley, West Mesa, Rio Rancho, Bernallop, Placitas, East Mountains, Los Lunas and Belen. Please ask about delivery options for areas like Snata Fe, Grants or Socorro.</p>
        <h2>Pricing</h2>
        <p>Pricing for delivery ranges from $75-$150 for most areas excluding large loads.</p>
        <h2>Planting</h2>
        <div   ref={revealRef}>
        </div>
        <p>Planting is included in the price of your delivery. Don't forget to order soil and root stimulator with your order so our gardening angels can set your plants up right!</p>



        <div className='delivery_img_container'>
        <img src={plantbox} alt='' className='delivery_img'/>
        </div>

        <div className='delivery_button'>
        <h2>Need some specifics?</h2>
        <p>Call us and we can get the ball rolling</p>
        <button href='tel:15058997555'>Call Now</button>
        </div>


    </div>
</div>
  )
}

export default Delivery