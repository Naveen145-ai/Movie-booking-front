import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../services/api';
import './Videos360.css';

const Videos360 = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [selectedVideo, setSelectedVideo] = useState(null);
  const navigate = useNavigate();

  // Fetch videos from backend API
  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    try {
      setLoading(true);
      setError('');
      const response = await api.getAllVideos360();
      if (response.success) {
        setVideos(response.data || []);
      } else {
        setError('Failed to load videos');
      }
    } catch (error) {
      console.error('Error fetching 360° videos:', error);
      setError('Failed to load videos. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const handleVideoSelect = (video) => {
    setSelectedVideo(video);
    // In a real app, you would navigate to a dedicated video player page
    // navigate(`/360-video/${video.id}`);
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p>Loading 360° videos...</p>
      </div>
    );
  }

  return (
    <div className="videos-360-container">
      <h1>360° Experience</h1>
      <p className="page-description">
        Immerse yourself in our collection of 360° videos. Click on any video to start the experience.
      </p>
      
      {error && (
        <div style={{ 
          padding: '1rem', 
          marginBottom: '2rem', 
          backgroundColor: '#fee', 
          color: '#c33', 
          borderRadius: '4px',
          textAlign: 'center'
        }}>
          {error}
        </div>
      )}
      
      {videos.length === 0 && !loading ? (
        <div style={{ textAlign: 'center', padding: '3rem' }}>
          <p>No 360° videos available yet. Check back soon!</p>
        </div>
      ) : (
        <div className="videos-grid">
          {videos.map((video) => (
            <div 
              key={video._id || video.id} 
              className="video-card"
              onClick={() => handleVideoSelect(video)}
            >
              <div className="video-thumbnail">
                <video 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  muted
                  onMouseEnter={(e) => e.target.play()}
                  onMouseLeave={(e) => {
                    e.target.pause();
                    e.target.currentTime = 0;
                  }}
                >
                  <source src={video.videoUrl} type="video/mp4" />
                </video>
                <div className="play-icon">▶</div>
              </div>
              <div className="video-info">
                <h3>{video.name}</h3>
                <div className="video-stats">
                  <span>📅 {new Date(video.uploadedAt).toLocaleDateString()}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {selectedVideo && (
        <div className="video-modal">
          <div className="modal-content">
            <span className="close-button" onClick={() => setSelectedVideo(null)}>×</span>
            <h2>{selectedVideo.name}</h2>
            <div className="video-player">
              {/* In a real app, you would use a proper 360° video player here */}
              <video 
                controls 
                autoPlay 
                style={{ width: '100%', maxHeight: '70vh' }}
              >
                <source src={selectedVideo.videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <p className="video-description">
                This is a 360° video. Use your mouse or finger to look around.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Videos360;
