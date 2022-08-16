import Cart from './shopcomponents/Cart'

export default function CartPage({ cartItems, setcartItems }) {  
  const deleteCartItem = (id, price) => {
    setcartItems((prevState) => {
      const newCart = prevState.items.filter(
        (itemsitem) => itemsitem.id !== id
      )
      return { ...prevState, items: [...newCart] }
    })
    setcartItems(prevState => ({
      ...prevState,
      finalCost: cartItems.finalCost - price,
    }))
  }

  return (
    <div className='cartpage'>
      <Cart cartItems={cartItems} setcartItems={setcartItems} onDelete={deleteCartItem} />
    </div>
  )
}
