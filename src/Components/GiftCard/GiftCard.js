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
            <p>The issue is now I am not sure what code is being added and what isnt, I am making small tweaks as I go and i can't see anything about it</p>
        </div>
    

    </div>
  )
}

export default GiftCard