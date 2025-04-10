// src/main.jsx (Corrección)
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'; // o import App from './App.jsx'; (Elige uno y sé consistente)
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)