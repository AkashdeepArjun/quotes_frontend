import { useState } from 'react'
import viteLogo from '/vite.svg'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import './App.css'

import Login from "./pages/Login";

import Regiser from "./pages/Register";

import Quotes from "./pages/Quotes";
import ProtectedRoute from './components/ProtectedRoute';
import AddQuote from './pages/AddQuote';
import Navbar from './components/Navbar';
import Signup from './pages/Signup';


function App() {
  // const [count, setCount] = useState(0)

  return (
    
     <>
    <Navbar/>


      <Routes>

      <Route path='/' element={<Login/>} />

      <Route path='/signup' element={ <Signup/>} />

      <Route path='/quotes' element={ 


        <ProtectedRoute>
          
          <Quotes/>

        </ProtectedRoute>

      } />


      <Route path='/addQuote' element ={

          <ProtectedRoute>

          <AddQuote/>


          </ProtectedRoute>



      } />




      </Routes>



      </>
    
  )
};

export default App
