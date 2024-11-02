import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { BrowserRouter ,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Navbar from './componets/Navbar'
import Footer from './componets/Footer'
import Register from './pages/Register'
import { RecoilRoot } from 'recoil'
import "sweetalert2/dist/sweetalert2.js"
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'


function App() {


  return (
       <div>
        <RecoilRoot>
         <BrowserRouter>
         <Navbar></Navbar>
           <Routes>
              <Route path="/" element={<Home></Home>}>Home</Route>
              <Route path="/login" element={<Login></Login>}>Login</Route> 
              <Route path="/register" element={<Register></Register>}>Register</Route> 
              <Route path="/cart" element={<Cart></Cart>}>Cart</Route> 
              <Route path="/checkout" element={<Checkout></Checkout>}>Cart</Route> 
               
          </Routes>
          <Footer></Footer>
        </BrowserRouter>
        </RecoilRoot>
        </div>
      )
    }

export default App
