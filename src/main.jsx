import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style/main.scss'
import AppRouter from './appRouter.jsx'

createRoot(document.getElementById('root')).render(
  // Détecte les bugs courant durant le dév (rend 2x les composants)
  <StrictMode>
    <AppRouter/>
  </StrictMode>,
)
