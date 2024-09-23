import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'

import OrderPlace from './pages/OrderPlace/OrderPlace'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'



const App = () => {
  return (
    <div className="app">
      <Navbar/>
      <Routes/>
      <Home/>
      
    </div>
  
  )
}

export default App
