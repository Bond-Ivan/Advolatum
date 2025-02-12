import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ReactNotifications } from 'react-notifications-component'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ReactNotifications />
    <App />
  </StrictMode>,
)
