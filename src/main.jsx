import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './app.jsx';
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import StoreContextProvider from './context/StoreContext.jsx';

createRoot(document.getElementById('root')).render(

  <BrowserRouter>
    <StoreContextProvider>
      <App />
    </StoreContextProvider>
  </BrowserRouter>


)
