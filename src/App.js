import React from 'react';
import { Routes, Route } from 'react-router-dom';

import NavBar from './Components/Navbar/NavBar';
import ErrorRoute from './Components/ErrorRoute';
import Home from './Components/routes/Home/Home';
import Calculator from './Components/routes/Calculator/Calculator';
import Quote from './Components/routes/Quote/Quote';

const App = () => (
  <>
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/calculator" element={<Calculator />} />
      <Route path="/quote" element={<Quote />} />
      <Route path="*" element={<ErrorRoute />} />
    </Routes>
  </>
);

export default App;
