import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Videos360.css';

const Videos360 = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const navigate = useNavigate();

  // In a real app, you would fetch this from your backend
  useEffect(() => {
    // Simulating API call
    const fetchVideos = async () => {
      try {
        // Replace this with actual API call to fetch 360° videos
        // const response = await fetch('/api/360-videos');
        // const data = await response.json();
        
        // For demo purposes, using mock data
        const mockVideos = [
          {
            id: 1,
            name: 'Mountain View 360°',
            thumbnail: 'https://via.placeholder.com/300x169?text=Mountain+View',
            videoUrl: 'https://example.com/360-mountain.mp4',
            duration: '2:30',
            views: 1245
          },
          {
            id: 2,
            name: 'City Tour 360°',
            thumbnail: 'https://via.placeholder.com/300x169?text=City+Tour',
            videoUrl: 'https://example.com/360-city.mp4',
            duration: '3:15',
            views: 876
          },
          // Add more mock videos as needed
        ];
        
        setVideos(mockVideos);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching 360° videos:', error);
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

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
      
      <div className="videos-grid">
        {videos.map((video) => (
          <div 
            key={video.id} 
            className="video-card"
            onClick={() => handleVideoSelect(video)}
          >
            <div className="video-thumbnail">
              <img src={video.thumbnail} alt={video.name} />
              <div className="video-duration">{video.duration}</div>
              <div className="play-icon">▶</div>
            </div>
            <div className="video-info">
              <h3>{video.name}</h3>
              <div className="video-stats">
                <span>👁️ {video.views} views</span>
              </div>
            </div>
          </div>
        ))}
      </div>

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
