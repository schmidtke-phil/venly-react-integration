import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { VenlyConnect } from '@venly/connect/dist/src/connect/connect'

// Initialize the Venly Widget
const venlyConnect = new VenlyConnect('Testaccount', {
  environment: "staging",
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
