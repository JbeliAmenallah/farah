// App.js
import React from 'react';
import './App.css';
import Hello from './hello';
import Navbar from './navbar';
import Footer from './footer';
import Contact from './contact';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './home';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />




      <Routes>
        <Route path='/contactus' element={<Contact/>}/>
       < Route path='/' element={<Home/>}/>
      </Routes>

      <Footer />

    </div>
    </Router>
  );
}

export default App;
