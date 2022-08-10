import { Link } from "react-router-dom"

export default function NavBar() {
  return (
    <nav className='nav'>
      <Link to="/" className="home-link">Home</Link>
      <Link to="/items" className="items-link">Items</Link>
      <Link to="/cart" className="cart-link">Cart</Link>
    </nav>
  )
}
