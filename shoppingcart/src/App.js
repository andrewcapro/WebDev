import Shop from './components/Shop'
import Home from './components/Home'
import Sidebar from './components/shopcomponents/Sidebar'
import NavBar from './NavBar'
import { Routes, Route } from 'react-router-dom'

export default function App() {
  return (
    <>
      <NavBar />
      <div className='container'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/items" element={<Shop />} />
          <Route path="/cart" element={<Sidebar />} />
        </Routes>
      </div>
    </>
  )
}
