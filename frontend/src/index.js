import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import HomePage from './landing_page/home/HomePage.js';
import SignUp from './landing_page/signup/Signup.js';
import About from './landing_page/about/AboutPage.js';
import Product from './landing_page/products/ProductsPage.js';
import Pricing from './landing_page/pricing/PricingPage.js';
import Support from './landing_page/support/SupportPage.js';
import Navbar from './landing_page/Navbar.js';
import Footer from './landing_page/Footer.js';
import NotFound from './landing_page/NotFound.js';
import Login from './landing_page/login/login';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route path="/" element={<HomePage/>}></Route>
    <Route path="/signup" element={<SignUp/>}></Route>
    <Route path="/about" element={<About/>}></Route>
    <Route path="/product" element={<Product/>}></Route>
    <Route path="/pricing" element={<Pricing/>}></Route>
    <Route path="/support" element={<Support/>}></Route>
    <Route path="/login" element={<Login/>}></Route>
    <Route path="*" element={<NotFound/>}></Route>
  </Routes>
  <Footer/> 
  </BrowserRouter>
);
