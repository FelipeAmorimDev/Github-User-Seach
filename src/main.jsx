import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { GlobalStorage } from './assets/GlobalContext.jsx'
import './style.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStorage>
      <App />
    </GlobalStorage>
  </React.StrictMode>,
)
