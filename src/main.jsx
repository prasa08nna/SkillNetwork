import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route,RouterProvider } from 'react-router-dom';
import Home from './Components/Home/Home.jsx';
import About from './Components/About/About.jsx';
import Contact from './Components/Contact/Contact.jsx';
import Github from './Components/Github/Github.jsx';
import SignUp from './Components/SignUp/SignUp.jsx';
import Login from './Components/Login/Login.jsx';

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/'element={<App/>}>
      <Route path='/' element ={<Home/>}/>
      <Route path='About' element ={<About/>}/>
      <Route path='Contact' element ={<Contact/>}/>
      <Route path='Github' element ={<Github/>}/>
      <Route path='SignUp' element ={<SignUp/>}/>
      <Route path='Login' element ={<Login/>}/>
    </Route>

 
    
  )
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
