import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx';

//will allow us to pull the app file content and render it
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />  
  </StrictMode>,
)
