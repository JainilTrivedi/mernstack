import React from 'react'
import Navbar from './components/Navbar';
import Home from "./components/Home";
import About from "./components/About";
import SignUp from "./components/Signup";
import Login from "./components/Login";
import Contact from "./components/Contact";
import ErrorPage from "./components/Error"
import { Route,Routes } from 'react-router-dom';
import "./App.css";

const App = () => {
  return (
    <>

      <Navbar />
      <Routes>
        <Route path='/*' element={<ErrorPage />} />
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/Login' element={<Login />} />
      </Routes>
    </>
  )
}

export default App
