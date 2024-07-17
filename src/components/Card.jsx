// src/components/Card.jsx
import React from 'react';
import './Card.css'; // Asegúrate de crear un archivo de estilo para el componente

const Card = ({ video, onEdit, onDelete }) => {
  return (
    <div className="card">
      <img src={video.image} alt={video.title} />
      <h3>{video.title}</h3>
      <p>{video.description}</p>
      <button onClick={() => onEdit(video)}>Editar</button>
      <button onClick={() => onDelete(video.id)}>Borrar</button>
    </div>
  );
};

export default Card;
