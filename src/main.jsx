import React from 'react'
import ReactDOM from 'react-dom/client'
import { AppPrincipal } from './AppPrincipal'
import { BrowserRouter } from 'react-router-dom'
import { NavbarProvider } from './context/AppContext'



ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <NavbarProvider>
      
        <React.StrictMode>

          <AppPrincipal />

        </React.StrictMode>
      
    </NavbarProvider>
  </BrowserRouter>
)
