import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Logo from './assets/logo.svg'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
      <img src={Logo} className="logo" alt="Logo" />
    
  </StrictMode>,
)
