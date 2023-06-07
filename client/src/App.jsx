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


  // fetch('/api/favorite/get_favorite_product/1')
  //   .then(response => response.json()) 
  //   .then(data => {
  //     console.log(data);
  //   })
  //   .catch(error => {
  //     console.error('Ошибка:', error);
  //   });




  // async function getUserFavorites(userId) {
  //   try {
  //     const responce = await fetch(`http://localhost:5252/api/favorite/get_favorite_product/${userId}`)
  //     const data = await responce.json()
  //     return data
  //   }
  //   catch (e) {
  //     return null
  //   }
  // };




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
