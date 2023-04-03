import React from 'react'
import './Partners.css'
import logo1 from '../../Assets/bacastrees.jpg'
import logo2 from '../../Assets/justsprinklers.jpg'
import logo3 from '../../Assets/rehms.jpg'
import logo4 from '../../Assets/soilmender.jpg'
import logo5 from '../../Assets/505outside.jpg'

function Partners() {


  return (


    <div className='Partners'>
            <div className='partners_welcome'>
            <h1>Partners of Jericho</h1>
                <p>
                These are our proud sponsors. We can gurantee that these brands are some of the most reliable in Albuquerque, other than us.     
                </p>
        </div>


<div className='partners_body'>
            <div className='partners_body_top'>
                <h1>Garden Talk Sponsors</h1>

                <div className='gts_pics'>

                    <a href='https://www.505outside.com/' target="_blank"  rel="noreferrer">
                    <img src={logo5}alt='' className='partner_logos'/>
                    </a>
                    <a href='https://www.bacastrees.com/' target="_blank"  rel="noreferrer">
                    <img src={logo1} alt='' className='partner_logos'/>
                    </a>
                    <a href='https://www.justsprinklers.com/' target="_blank"  rel="noreferrer">
                    <img src={logo2} alt='' className='partner_logos'/>
                    </a>
                    <a href='https://www.rehmsnurserynm.com/' target="_blank"  rel="noreferrer">
                    <img src={logo3}alt='' className='partner_logos'/>
                    </a>
                    <a href='http://www.soilmender.com/' target="_blank"  rel="noreferrer">
                    <img src={logo4}alt='' className='partner_logos'/>
                    </a>


            

                </div>

                {/* <div className='gts_names'>

                </div>
     */}




            </div>

            <div className='partners_body_bottom'>
                    <h1>More of Jericho's Partners</h1>
                <p>
                /* We are asked for our email address hundreds of times for every time we are asked for our mailing address, right? Well, the form you see on this screen really does ask for your mailing address, because several times a year we will be sending cards to members of 
                Honestly? It’s a work in progress, we are trying to find the best solution for rewarding our most loyal
                customers. It’s free to join.
                </p>      
                </div>


         
    </div>



    <div className='partners_conclusion'>
        <h1>A Special thanks to all our Supporters</h1>
    </div>
</div>


        

  )
}

export default Partners;