import React from 'react'
import Navbar from './components/Navbar';
import Home from "./components/Home";
import About from "./components/About";
import SignUp from "./components/Signup";
import Login from "./components/Login";
import Contact from "./components/Contact";
import { Route,Routes } from 'react-router-dom';


const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>

      <Routes>
        <Route path='/about' element={<About />} />
      </Routes>

      <Routes>
        <Route path='/signup' element={<SignUp />} />
      </Routes>

      <Routes>
        <Route path='/contact' element={<Contact />} />
      </Routes>

      <Routes>
        <Route path='/Login' element={<Login />} />
      </Routes>
    </>
  )
}

export default App
