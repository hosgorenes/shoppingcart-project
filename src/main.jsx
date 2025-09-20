import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from './contexts/ThemeContext'
import { CardProvider } from './contexts/CardContext'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <ThemeProvider>
        <CardProvider>
          <App />
        </CardProvider>
      </ThemeProvider>
    </StrictMode>
  </BrowserRouter>
)
