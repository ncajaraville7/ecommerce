import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetail from './components/ItemDetail'

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={
          <ItemListContainer>Nuestros Productos</ItemListContainer>
        } />
        <Route path='/item/:id' element={<ItemDetail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
