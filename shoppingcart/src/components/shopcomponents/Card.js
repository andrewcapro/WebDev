export default function Card({ color, style, price, image}) {
  return (
      <section className="card">
            <h3>{color} {style}</h3>
            <img src={image} alt={color}/>
            <div className='buttons'>
                <button>-</button>
                <button>Add To Cart</button>
                <button>+</button>
            </div>
        </section>
  )
}
