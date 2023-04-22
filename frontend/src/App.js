import logo from './logo.svg';
import './App.css';
import Homepage from './components/Homepage.js';
import Awards from './components/Awards';
import Navbar1 from './components/Navbar';
import Footer from './components/Footer';
import News from './components/News';
import People from './components/People';
// import PhD from './components/PhD';
import Patents from './components/Patents';
import Research from './components/Research';
// import Footer from './components/Footer/Footer';
// import People from './components/People';
// import { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Navbar1/>
       <Routes>
          <Route exact="true" path="/" element={<Homepage />} />
          <Route exact="true"  path="/awards" element={<Awards />} />
          <Route exact="true"  path="/news" element={<News />} />
          <Route exact="true"  path="/patents" element={<Patents/>} />
          <Route exact="true" path="/members" element={<People />} />
          <Route exact="true" path="/research" element={<Research />} />
      </Routes>
      <Footer/>
    </div>
  );
}
export default App;
