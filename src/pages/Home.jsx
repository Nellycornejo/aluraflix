
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Card from '../components/Card';
import Modal from '../components/Modal';
import './Home.css'; 

const Home = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    axios.get('/api/videos').then((response) => setVideos(response.data));
  }, []);

  const handleEdit = (video) => {
    setSelectedVideo(video);
    setIsModalOpen(true);
  };

  const handleDelete = (id) => {
    axios.delete(`/api/videos/${id}`).then(() => {
      setVideos(videos.filter((video) => video.id !== id));
    });
  };

  const handleSave = (video) => {
    axios.put(`/api/videos/${video.id}`, video).then((response) => {
      setVideos(videos.map((v) => (v.id === video.id ? response.data : v)));
      setIsModalOpen(false);
    });
  };

  return (
    <div>
      <Header />
      <Banner image="/path/to/featured/image.jpg" />
      <div className="categories">
        {['Frontend', 'Backend', 'Innovación', 'Gestión'].map((category) => (
          <div key={category} className="category">
            <h2>{category}</h2>
            <div className="cards">
              {videos.filter((video) => video.category === category).map((video) => (
                <Card key={video.id} video={video} onEdit={handleEdit} onDelete={handleDelete} />
              ))}
            </div>
          </div>
        ))}
      </div>
      {isModalOpen && (
        <Modal video={selectedVideo} onClose={() => setIsModalOpen(false)} onSave={handleSave} />
      )}
    </div>
  );
};

export default Home;
