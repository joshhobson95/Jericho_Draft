import React from 'react'
import './GiftCard.css'
import GiftCardIcon from '../../SVGs/GiftCardIcon'

function GiftCard() {
  return (
    <div className='GiftCard_Main'>
        <div className='gc_main_welcome'>
            <h1>
                Give the gift of Growing
            </h1>
            <p> You can purchase giftcards for Jericho right here! </p>
            <GiftCardIcon />
        </div>

        <div className='gc_main_body'>
            <h2> GiftCard checkout</h2>
        </div>
    

    </div>
  )
}

export default GiftCard