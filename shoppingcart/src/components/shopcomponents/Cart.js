import CartItem from "./CartItem"

export default function Cart({ cartItems, onDelete }) {
  const items = cartItems.items
  const showItems = items.map((item) => (
    <CartItem color={item.color} style={item.style} price={item.price} photo={item.photo} id={item.id} onDelete={onDelete}/>
    )) 

  return (
    <div className="cartitems">
      {showItems}
      <h3 className="finalcost">Final Cost <br></br> ${cartItems.finalCost}</h3>
      <button className='checkout'>Checkout</button>
    </div>
  )
}
