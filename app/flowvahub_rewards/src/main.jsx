import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Rewards from './pages/Rewards.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Rewards />
  </StrictMode>,
)
