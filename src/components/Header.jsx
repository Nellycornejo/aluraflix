// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Asegúrate de crear un archivo de estilo para el componente

const Header = () => {
  return (
    <header className="header">
      <div className="logo">AluraFlix</div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/new-video">Nuevo Video</Link>
      </nav>
    </header>
  );
};

export default Header;
