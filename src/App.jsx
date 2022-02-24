import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetail from './components/ItemDetail'
import CartDetail from './components/CartDetail'
import CartContextProvider from './components/CartContext'

function App() {

  return (
    <CartContextProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={
            <ItemListContainer>Nuestros Productos</ItemListContainer>
          } />
          <Route path='/item/:id' element={<ItemDetail />} />
          <Route path='/category/:categoryId' element={<ItemListContainer />} />
          <Route path='/cart' element={<CartDetail />} />
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
  )
}

export default App
