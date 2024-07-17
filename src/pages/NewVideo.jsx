
import React, { useState } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './NewVideo.css'; 

const NewVideo = () => {
  const [formData, setFormData] = useState({
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
    axios.post('/api/videos', formData).then((response) => {
      // Manejar la respuesta después de crear el nuevo video
    });
  };

  const handleClear = () => {
    setFormData({
      title: '',
      category: '',
      image: '',
      video: '',
      description: '',
    });
  };

  return (
    <div>
      <Header />
      <main className="new-video">
        <h2>Nuevo Video</h2>
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
          <button type="button" onClick={handleClear}>Limpiar</button>
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default NewVideo;
