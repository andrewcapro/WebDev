import React from 'react'
import Image from 'react-image-webp'

export default function CartItem({ color, style, price, photo, id, onDelete }) {
  return (
    <section className='cartitem'>
      <h3>{color} {style} <br></br> ${price} </h3>
      <Image
        webp={photo}
        width="150"
      />
      <div className='buttons'>
        <button onClick={() => onDelete(id, price)} className="button">DELETE FROM CART</button>
      </div>
    </section>
  )
}
