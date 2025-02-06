import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Inicio_Usuario } from './vistas/inicio_sesion/session.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Panel } from './vistas/panel/panel.jsx';
import 'bootstrap-icons/font/bootstrap-icons.css';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}/>
        <Route path='/login' element={<Inicio_Usuario />} />
        <Route path='/panel-control' element={<Panel />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);