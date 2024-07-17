// src/components/Banner.jsx
import React from 'react';
import './Banner.css'; // Asegúrate de crear un archivo de estilo para el componente

const Banner = ({ image }) => {
  return (
    <div className="banner" style={{ backgroundImage: `url(${image})` }}>
      <h2>Video Destacado</h2>
    </div>
  );
};

export default Banner;
