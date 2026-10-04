import React from 'react'
import ReactDOM from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import App from './App.jsx'
import halalLogo from './assets/100-halal-sticker-label_24886-318.avif'
import './index.css'

const favicon = document.querySelector('#site-favicon')

if (favicon) {
  favicon.href = halalLogo
  favicon.type = 'image/avif'
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>,
)
