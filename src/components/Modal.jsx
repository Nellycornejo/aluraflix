// src/components/Modal.jsx
import React, { useState } from 'react';
import './Modal.css'; // Asegúrate de crear un archivo de estilo para el componente

const Modal = ({ video, onClose, onSave }) => {
  const [formData, setFormData] = useState(video || {
    title: '',
    category: '',
    image: '',
    video: '',
    description: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Editar Card</h2>
        <form onSubmit={handleSubmit}>
          <label>Título</label>
          <input name="title" value={formData.title} onChange={handleChange} />
          <label>Categoría</label>
          <select name="category" value={formData.category} onChange={handleChange}>
            <option value="Frontend">Frontend</option>
            <option value="Backend">Backend</option>
            <option value="Innovación">Innovación</option>
            <option value="Gestión">Gestión</option>
          </select>
          <label>Imagen</label>
          <input name="image" value={formData.image} onChange={handleChange} />
          <label>Video</label>
          <input name="video" value={formData.video} onChange={handleChange} />
          <label>Descripción</label>
          <textarea name="description" value={formData.description} onChange={handleChange}></textarea>
          <button type="submit">Guardar</button>
          <button type="button" onClick={onClose}>Cerrar</button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
