document.getElementById("browserRouterAppJs").innerHTML = `
import Navigation from "./components/js/Navigation" 
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/js/Home'
import NextPage from './components/js/NextPage';
import About from './components/js/About';

function App() {
  return (
    &LT;BrowserRouter&GT;
      &LT;Navigation /&GT;
      &LT;Routes&GT;
        &LT;Route path='/' element={&LT;Home /&GT;} /&GT;
        &LT;Route path='Info' element={&LT;Info /&GT;}&GT;&LT;/Route&GT;
        &LT;Route path='Service' element={&LT;Service /&GT;}&GT;&LT;/Route&GT;
        &LT;Route path='MoreDetail' element={&LT;More Detail /&GT;}&GT;&LT;/Route&GT;
      &LT;/Routes&GT;
    &LT;/BrowserRouter&GT;
  );
}

export default App;
      `;

document.getElementById("browserRouterHeaderJs").innerHTML = `
import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from "./web_logo.png"

function Navigation() {
  return (
    &LT;div&GT;
     &lt;div class="Logo"&gt;
          &lt;img src={Logo} alt="Main-Logo" /&gt;
     &lt;/div&gt;
      &LT;NavLink to='/'&GT;Home&LT;/NavLink&GT;
      &LT;NavLink to='Info'&GT;Info&LT;/NavLink&GT;
      &LT;NavLink to='Service'&GT;Service&LT;/NavLink&GT;
      &LT;NavLink to='MoreDetail'&GT;More Detail&LT;/NavLink&GT;
    &LT;/div&GT;
  )
}

export default Navigation
      `;
