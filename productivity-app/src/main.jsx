import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
//import statements to get routing between pages set up
//by referencing dependencies installed in the command line
import React from 'react'
import ReactDOM from 'react-dom/client'
import {HashRouter} from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
    <App/>
    </HashRouter>
  </React.StrictMode>
)
