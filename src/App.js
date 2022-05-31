import React from 'react';
import './App.css';
import Registration from './components/Login/Registration';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../src/components/pages/Home';
import Contact from '../src/components/pages/Contact';
import NoPage from '../src/components/pages/NoPage';
import Layout from './components/Navbar/Layout';
import Login from './components/Login/Login';

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout />
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="contact" element={<Contact />} />
            <Route path="login" element={<Login />} />
            <Route path="registration" element={<Registration />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
