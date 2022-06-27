import React from 'react'
import ReactDOM from 'react-dom/client'
import { init } from '@tipy/locale';
import en from './assets/locales/en.json';
import App from './App'
import './index.css'

init({ resource: en });

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
