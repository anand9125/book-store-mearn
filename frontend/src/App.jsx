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
import Singlebook from './pages/Singlebook'
import { AuthProvider } from './context/AuthContext'
import Privatetroutes from './componets/Privatetroutes'

function App() {


  return (
       <div>
       
        <RecoilRoot>
         <BrowserRouter>
         <AuthProvider>
         <Navbar></Navbar>
           <Routes>
              <Route path="/" element={<Home></Home>}>Home</Route>
              <Route path="/login" element={<Login></Login>}>Login</Route> 
              <Route path="/register" element={<Register></Register>}>Register</Route> 
              <Route path="/cart" element={<Cart></Cart>}>Cart</Route> 
              <Route path="/checkout" element={<Privatetroutes><Checkout></Checkout></Privatetroutes>}>Cart</Route> 
              <Route path="/books/:id" element={<Singlebook></Singlebook>}>SingleBook</Route>   
          </Routes>
          <Footer></Footer> 
          </AuthProvider> 
        </BrowserRouter>
        </RecoilRoot>

        </div>
      )
    }

export default App

//routes" define the different URLs (or paths) in your application and determine what content or component should be rendered for each UR
//<Route path="/books/:id" element={<Singlebook></Singlebook>}>SingleBook</Route>
//in a route definition in React Router that sets up a dynamic route to render your SingleBook component.
//The path defines the URL pattern for this route.
//:id is a route parameter — it means that any value after /books/ will be captured and stored in a variable called id. 
