import { useState, useEffect } from 'react'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './components/AppRouter'
import Footer from "./components/Footer/Footer.jsx"
import Header from './components/Header/Header.jsx'
import CustomAlert from './GUI/Alert/CustomAlert'
import { ToastContainer } from 'react-toastify';


function App() {
  useEffect(() => {
    AOS.init()
  }, [])





  return (
    <BrowserRouter>
      <Header />

      <AppRouter />

      <Footer />
      <ToastContainer />

    </BrowserRouter>


  )
}

export default App
