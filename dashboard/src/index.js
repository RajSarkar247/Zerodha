import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Home from './components/Home';
const params = new URLSearchParams(window.location.search);
const token = params.get("token");
console.log("URL Token:", token);
if (token) {
  localStorage.setItem("token", token);

  // Remove token from URL after saving
  window.history.replaceState({}, document.title, "/");
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path="/*" element={<Home/>}/>
    </Routes>
  </BrowserRouter>
  </React.StrictMode>
);

