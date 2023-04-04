import React from 'react'
import ffc3 from '../../Assets/ffc3.png'
import arches from '../../Assets/arch.jpg'
import FFC_Form from './Form/FFC_Form'
import './FFC.css'

function FFC() {


  return (
    <div className='ffc'>

        <div className='ffc_welcome'>
            <h1>Frequent Flower Club</h1>
                <p>Welcome Statement:  dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    </p>
        </div>


<div className='ffc_body'>
            <div className='ffc_body_top'>
                <h1 className='w_it_is'>What it is</h1>
                <img alt='' src={ffc3} className='ffc3'/>
                <p>
                We are asked for our email address hundreds of times for every time we are asked for our mailing address, right? Well, the form you see on this screen really does ask for your mailing address, because several times a year we will be sending cards to members of the Jericho Frequent Flower Club. The cards will contain something of value, and we will be asking for your phone number as you check out in order to have a record of your choice to shop Jericho for all your yard and garden needs. 

                
                Honestly? It’s a work in progress, we are trying to find the best solution for rewarding our most loyal
customers. It’s free to join.

                </p>
                <img alt='' src='https://images.unsplash.com/photo-1455659817273-f96807779a8a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80' className='ffc_sunflowers'/>

            </div>

            <div className='ffc_body_bottom'>
                <h1 className='w_you_get'>What you Get</h1>
                <div className='b_h'>
                <p>
                /* We are asked for our email address hundreds of times for every time we are asked for our mailing address, right? Well, the form you see on this screen really does ask for your mailing address, because several times a year we will be sending cards to members of 
                Honestly? It’s a work in progress, we are trying to find the best solution for rewarding our most loyal
customers. It’s free to join.
                        <li>postcard</li>
                        <li>seminars</li>
                        <li>seminars</li>
                        <li>seminars</li>
                        <li>specials</li>
                </p>
             
                <img alt='' src={arches} className='ffc_arches'/>
                </div>

                <img alt='' src={ffc3} className='ffc3_s'/>

                <h1 className='h_to_join'>How to Join</h1>

                <div className='ffc_form_container'>
                    <h3>Fill out all infromation below to join!</h3>
                <div className='f_f'>                   
                     <FFC_Form />                
                </div>
                </div>
            </div>
</div>
    </div>
  )
}

export default FFC