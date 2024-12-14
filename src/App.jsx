// src/index.js or src/main.jsx


import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Outlet} from 'react-router-dom'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'


function App() {
  

  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  )
}

export default App
