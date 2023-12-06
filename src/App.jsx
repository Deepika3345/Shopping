import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { ShopProvider } from './Context/ShopContext'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Electronics from './Pages/Electronics'
import Jewellery from './Pages/Jewellery'
import MensWear from './Pages/MensWear'
import WomensWear from './Pages/WomensWear'
import Cart from './Pages/Cart'
import Login from './Pages/Login'


const App = () => {
  return (
    <Router>
      <ShopProvider>

        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path="/cart" element={<Cart />} />

          <Route path="/login" element={<Login />} />

          <Route path='/electronic' element={<Electronics/>}/>
          <Route path='/jewellery' element={<Jewellery/>}/>
          <Route path='/menswear' element={<MensWear/>}/>
          <Route path='/womenswear' element={<WomensWear/>}/>
        </Routes>
        <Footer />
      </ShopProvider>
    </Router>
  )
}

export default App