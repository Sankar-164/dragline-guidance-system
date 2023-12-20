import React from 'react';
import { useState } from 'react';

const VideoList = () => {
  const [videos, setVideos] = useState([
    // Replace with your actual video data
    { id: 1, title: 'Video 1', thumbnailUrl: 'video1.jpg' },
    { id: 2, title: 'Video 2', thumbnailUrl: 'video2.jpg' },
    // ...
  ]);

  return (
    <div className="videos-container">
      {videos.map((video) => (
        <a key={video.id} href={`/video/${video.id}`} className="video-card">
          <img src={video.thumbnailUrl} alt={video.title} />
          <h3>{video.title}</h3>
        </a>
      ))}
    </div>
  );
};
var video = document.getElementById('video');
if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({ video: true })
        .then(function(stream) {
            video.srcObject = stream;
            video.play();
        })
        .catch(function(err) {
            console.log("An error occurred: " + err);
        });
}
const cards = document.querySelectorAll('.video-card');

function adjustCardWidth() {
  const windowWidth = document.documentElement.clientWidth;
  const cardWidth = Math.floor(windowWidth / cards.length) - 10; // adjust padding/margin

  cards.forEach(card => card.style.width = `${cardWidth}px`);
}

window.addEventListener('resize', adjustCardWidth);
adjustCardWidth();
export default VideoList;
