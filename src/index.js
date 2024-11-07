import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Login from './Login';
import Signup from './Signup';
import reportWebVitals from './reportWebVitals';
import { HashRouter, Routes,Route } from 'react-router-dom';
import axios from 'axios';
import Dash from './Dash';

const root = ReactDOM.createRoot(document.getElementById('root'));
  axios.defaults.withCredentials=true;
  axios.defaults.baseURL="http://127.0.0.1:8000/"
root.render(
  <HashRouter>
  <Routes>
    
    <Route path='/login' element={<Login/>}/>
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/dash' element={<Dash/>}/>
  </Routes>
</HashRouter>
    
);
reportWebVitals();
