import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Routes (Pages)
import Home from './routes/Home';
import About from './routes/About';
import Dashboard from './routes/Dashboard';
import Products from './routes/Products';
import DetailProduct from './routes/DetailProduct';
import Login from './routes/Login';
import Register from './routes/Register';

// Library
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer />
      <Navbar />
      <Router>
          <Routes>
            <Route index element={ <Home />} />
            <Route path="/p/:product_id" element={<DetailProduct />} />
            <Route path="/about" element={ <About />} />
            <Route path="/products" element={ <Products />} />
            <Route path="/dashboard" element={ <Dashboard />} />
            <Route path="/login" element={ <Login />} />
            <Route path="/register" element={ <Register />} />
          </Routes>
      </Router>
      <Footer/>
    </>
  );
}

export default App;
