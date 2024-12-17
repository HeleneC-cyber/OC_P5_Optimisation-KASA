import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style/main.scss'
import AppRouter from './appRouter.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppRouter/>
  </StrictMode>,
)
