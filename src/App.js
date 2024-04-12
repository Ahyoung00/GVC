//import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import SignUp from './SignUp';
import Home from './Home';


function App() {
  return (
    <SignUp />
    /*  <Router>
    <Routes>
    <Route path="/signup" element={<SignUp />} />
    <Route path="/home" element={<Home />} />
    <Route path="/" element={<SignUp />} />
  </Routes>
</Router>*/
  );
}

export default App;
