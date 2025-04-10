import './App.css'
import { Link, Route, Routes } from 'react-router'
import Login from './components/Login'
import Join from './components/Join'
import Admin from './components/Admin'
import UserPage from './components/UserPage'
import Header from './components/Header'
import Menu from './components/Menu'
import { useEffect } from 'react'
import { axiosInstance } from './redux/axiosInstance'


function App() {

  useEffect(()=>{
    axiosInstance.get('/test1')
    .then()
    .catch()
  },[])
  
  return (
    <div>
      <Header />
      <Menu />
      <Routes>
          <Route path='' element={<div>메인페이지</div>}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/join' element={<Join />}/>
          <Route path='/user' element={<UserPage/>}/>          
          <Route path='/admin' element={<Admin />}/>
      </Routes>
    </div>
  )
}

export default App

