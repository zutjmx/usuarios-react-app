import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import {UsuariosApp} from './UsuariosApp'
import { AuthProvider } from './auth/context/AuthProvider';
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <UsuariosApp />
      </AuthProvider>
    </BrowserRouter>    
  </React.StrictMode>,
)
