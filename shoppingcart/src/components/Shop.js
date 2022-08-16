import Items from './shopcomponents/Items'
import { v4 as uuidv4 } from 'uuid'

export default function Shop({ cartItems, setcartItems }) {
  const addCartItem = (color, style, price, photo) => {
    setcartItems((prevState) => ({
      finalCost: cartItems.finalCost + price,
      items: [
        ...prevState.items,
        {
          color: color,
          style: style,
          price: price,
          photo: photo,
          id: uuidv4(),
        },
      ],
    }))
  }

  return (
    <div className="shop">
      <Items onAdd={addCartItem}/>
    </div>
  )
}
