import React, { useState } from "react";
import "./Gallery.css"; // Import custom styles

const images = [
  "/food1.jpg",
  "/food2.jpg",
  "/food3.jpg",
  "/food4.jpg",
  "/food5.jpg",
  "/food6.jpg",
  "/food7.jpg",
  "/food8.jpg",
  "/food9.jpg",
  "/food10.jpg",
  "/food11.jpg",
  "/food12.jpg",
  "/food13.jpg",
  "/food14.jpg",
  "/food16.jpg",
  "/food17.jpg",
  "/food18.jpg",
  "/food19.jpg",
  "/food20.jpg",
  "/food21.jpg",
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index) => {
    setSelectedImage(images[index]);
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const showPrevImage = (e) => {
    e.stopPropagation();
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setSelectedImage(images[newIndex]);
    setCurrentIndex(newIndex);
  };

  const showNextImage = (e) => {
    e.stopPropagation();
    const newIndex = (currentIndex + 1) % images.length;
    setSelectedImage(images[newIndex]);
    setCurrentIndex(newIndex);
  };

  return (
    <div className="gallery-container">
      {images.map((src, index) => (
        <div
          key={index}
          className="gallery-item"
          onClick={() => openModal(index)}
        >
          <img src={src} alt={`Food ${index + 1}`} className="gallery-image" />
        </div>
      ))}

      {selectedImage && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-btn" onClick={closeModal}>
              &times;
            </span>
            <img src={selectedImage} alt="Selected" className="modal-image" />
            <button className="prev-btn" onClick={showPrevImage}>
              &#10094;
            </button>
            <button className="next-btn" onClick={showNextImage}>
              &#10095;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
