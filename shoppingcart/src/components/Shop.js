import Items from './shopcomponents/Items'
import { v4 as uuidv4 } from 'uuid'

export default function Shop({ cartItems, setcartItems }) {
  const addCartItem = () => {
    setcartItems((prevState) => ({
      finalCost: cartItems.finalCost + 50,
      items: [
        ...prevState.items,
        {
          item: 'blue',
          style: 'croc',
          price: 50,
          photo: 'https://media.crocs.com/images/t_pdphero/f_auto%2Cq_auto/products/207713_100_ALT140/crocs',
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
