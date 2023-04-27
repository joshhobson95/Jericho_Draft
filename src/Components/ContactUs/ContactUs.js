import React from 'react'
import './ContactUs.css'
import MapButton from './MapButton'
import EmailButton from './EmailButton'

function ContactUs() {
  return (
    <div className='contact_us'>

        <div className='contact_us_welcome'>
                <h1>Contact Us</h1>
                <p>We would love to hear from you</p>
        </div>

        <div className='contact_us_body'>
            <h1>Phone</h1>
            <p>+1 (505) 899-7555</p>
            <button href='tel:15058997555'>Call Now</button>

            <h1>Address</h1>
            <p>101 Alameda Blvd NW
            Albuquerque, NM 87114</p>
            <div className='map_button'>
            <MapButton />
            </div>


            <h1>Email</h1>
            <p>manager@jerichonursery.com</p>
            <div className='email_button'>
            <EmailButton />
            </div>



     
            <h1>Social Media</h1>

            <h2>Facebook:</h2>
            <h2>Instagram:</h2>
            <h2>Youtube:</h2>


        </div>




    </div>
  )
}

export default ContactUs