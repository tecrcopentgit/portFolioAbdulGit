import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App className="bg-gradient-to-r from-amber-800 to-purple-600 max-h-fit  text-amber-100"/>
  </StrictMode>,
)
