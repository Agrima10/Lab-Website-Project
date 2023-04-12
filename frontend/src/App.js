import logo from './logo.svg';
import './App.css';
import Homepage from './components/Homepage.js';
import { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom'



function App() {
  return (
    <div className="App">
       <Routes>
          <Route exact path="/" element={<Homepage />} />
      </Routes>
    </div>
  );
}
export default App;
