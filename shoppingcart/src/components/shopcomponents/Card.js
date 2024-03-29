import Image from "react-image-webp"

export default function Card({ color, style, price, photo, onAdd}) {
  return (
    <section className="card">
        <h3 class="card-name">{color} {style} <br></br> ${price}</h3>
        <Image 
          webp={photo}
          width="300"
        />
        <div className='buttons'>
            <button onClick={() => onAdd(color, style, price, photo)} className="button">Add To Cart</button>
        </div>
    </section>
  )
}
