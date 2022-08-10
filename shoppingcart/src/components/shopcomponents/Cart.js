import CartItem from "./CartItem"

export default function Cart() {
  return (
    <div>
      <button className='exit'>X</button>
      <CartItem />
      <h3>FINAL PRICE</h3>
      <button className='checkout'>Checkout</button>
    </div>
  )
}
