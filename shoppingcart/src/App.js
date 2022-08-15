import Shop from './components/Shop'
import Home from './components/Home'
import CartPage from './components/CartPage'
import NavBar from './NavBar'
import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

export default function App() {

  const [cartItems, setcartItems] = useState({
    finalCost: 0,
    items: [{}] 
  })

  return (
    <>
      <NavBar />
      <div className='container'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/items" element={<Shop cartItems={cartItems} setcartItems={setcartItems}/>} />
          <Route path="/cart" element={<CartPage cartItems={cartItems} setcartItems={setcartItems}/>} />
        </Routes>
      </div>
    </>
  )
}
