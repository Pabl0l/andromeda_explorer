import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App.tsx';
import './index.css';
import Detalles from './components/Detalles.tsx';
import Apod from './components/Apod.tsx';
import Libreria from './components/Libreria.tsx';
import Aside from './components/Aside.tsx';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <div className='div__main'>
      <Aside/>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/libreria_de_imagenes" element={<Libreria />} />
        <Route path="/detalles/:idNasa" element={<Detalles />} />
        <Route path="/apod" element={<Apod />} />
      </Routes>
      </div>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
