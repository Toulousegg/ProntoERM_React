import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Login from './pages/login/login'
import Sidebar from './components/sidebar/Sidebar'
import Principal from './pages/principal/principal'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/home/login" element={<Login />}/>
        <Route path='/sidebar' element={<Sidebar />}/>
        <Route path='/' element={<Principal />}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
