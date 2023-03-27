import React from 'react'
import NavBar from './components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Dogs from './pages/Dogs'
import Cats from './pages/Cats'
import Contacts from './pages/Contacts'
import NotFound from './pages/NotFound'


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>  
          <Route path='/' element={<Home />} Home={Home}/>
          <Route path='/dogs' element={<Dogs />} />
          <Route path='/cats' element={<Cats />} />
          <Route path='/contact' element={<Contacts />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter> 
    </div>
  )
}

export default App