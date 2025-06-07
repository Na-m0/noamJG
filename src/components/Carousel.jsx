import React, { useState, useRef } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

// Composant Modal
const Modal = ({ images, currentIndex, onClose }) => {
  const [modalIndex, setModalIndex] = useState(currentIndex);

  const prevImage = () => {
    setModalIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const nextImage = () => {
    setModalIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
      <div className="relative">
        <img
          src={images[modalIndex].url}
          alt={`Image agrandie ${modalIndex + 1}`}
          className="max-w-[90vw] max-h-[80vh] rounded"
        />
        {images[modalIndex].figure && (
            <p className="text-[11px] text-gray-400 mt-2 text-center">{images[modalIndex].figure}</p>
        )}
        <button
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-70 p-2 rounded-full"
          onClick={prevImage}
        >
          <IoIosArrowBack />
        </button>
        <button
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-70 p-2 rounded-full"
          onClick={nextImage}
        >
          <IoIosArrowForward />
        </button>
        <button
          className="absolute top-4 right-4 bg-white bg-opacity-70 p-2 rounded-full"
          onClick={onClose}
        >
          ✖
        </button>
      </div>
    </div>
  );
};

// Composant Carousel
const Carousel = ({ competences }) => {
    const [currentCompetenceIndex, setCurrentCompetenceIndex] = useState(0);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
  
    const dragStartX = useRef(null);
    const dragCurrentX = useRef(null);
    const dragDiffX = useRef(0);
    const containerRef = useRef(null);
  
    const competence = competences[currentCompetenceIndex];
    const images = competence.images || [];
  
    const containerWidth = containerRef.current?.offsetWidth || 300;
  
    const prevCompetence = () => {
      setCurrentCompetenceIndex((prev) =>
        prev === 0 ? competences.length - 1 : prev - 1
      );
      setCurrentImageIndex(0);
    };
  
    const nextCompetence = () => {
      setCurrentCompetenceIndex((prev) =>
        prev === competences.length - 1 ? 0 : prev + 1
      );
      setCurrentImageIndex(0);
    };
  
    const onDragStart = (e) => {
      dragStartX.current = e.type === "touchstart" ? e.touches[0].clientX : e.clientX;
      dragCurrentX.current = dragStartX.current;
      dragDiffX.current = 0;
      if (containerRef.current) {
        containerRef.current.style.transition = "none";
      }
    };
  
    const onDragMove = (e) => {
      if (dragStartX.current === null) return;
      dragCurrentX.current = e.type === "touchmove" ? e.touches[0].clientX : e.clientX;
      dragDiffX.current = dragCurrentX.current - dragStartX.current;
      if (containerRef.current) {
        containerRef.current.style.transform = `translateX(${dragDiffX.current}px)`;
      }
    };
  
    const onDragEnd = () => {
      if (dragStartX.current === null) return;
      const seuil = containerWidth / 4;
      if (dragDiffX.current > seuil) {
        prevCompetence();
      } else if (dragDiffX.current < -seuil) {
        nextCompetence();
      }
      if (containerRef.current) {
        containerRef.current.style.transition = "transform 0.3s ease";
        containerRef.current.style.transform = "translateX(0)";
      }
  
      dragStartX.current = null;
      dragCurrentX.current = null;
      dragDiffX.current = 0;
    };
  
    const prevImage = () => {
      setCurrentImageIndex((prev) =>
        prev === 0 ? images.length - 1 : prev - 1
      );
    };
  
    const nextImage = () => {
      setCurrentImageIndex((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      );
    };
  
    return (
      <div>
        <div className="flex items-center justify-center mt-10">
          {competences.length > 1 && (
            <button
              className="rounded-full mr-10"
              onClick={prevCompetence}
            >
              <IoIosArrowBack />
            </button>
          )}
  
          <div
            ref={containerRef}
            className="flex flex-col md:flex-row items-center gap-10 cursor-grab select-none"
            onMouseDown={onDragStart}
            onMouseMove={onDragMove}
            onMouseUp={onDragEnd}
            onMouseLeave={onDragEnd}
            onTouchStart={onDragStart}
            onTouchMove={onDragMove}
            onTouchEnd={onDragEnd}
            style={{
              userSelect: "none",
            }}
          >
            {/* Texte à gauche */}
            <div className="w-full md:w-1/2">
              <div className="text-[20px] font-semibold mb-4">{competence.title}</div>
              <p className="text-left text-[16px]">{competence.description}</p>
            </div>
  
            {/* Images à droite */}
            <div className="w-full md:w-1/2 relative">
              {images.length > 0 && (
                <div className="relative flex flex-col items-center">
                  <div className="relative flex items-center justify-center w-full">
                    <img
                      src={images[currentImageIndex].url}
                      alt={`${competence.title} - ${currentImageIndex + 1}`}
                      className="w-full rounded cursor-pointer transition"
                      onClick={() => setIsModalOpen(true)}
                    />
                    {images.length > 1 && (
                      <>
                        <button
                          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-200 bg-opacity-70 p-2 rounded-full"
                          onClick={prevImage}
                        >
                          <IoIosArrowBack />
                        </button>
                        <button
                          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-200 bg-opacity-70 p-2 rounded-full"
                          onClick={nextImage}
                        >
                          <IoIosArrowForward />
                        </button>
                      </>
                    )}
                  </div>
  
                  {/* Figure sous l'image */}
                  {images[currentImageIndex].figure && (
                    <div className="text-[11px] text-gray-400 mt-2">
                      {images[currentImageIndex].figure}
                    </div>
                  )}
  
                  {/* Indicateurs d’images */}
                  {images.length > 1 && (
                    <div className="flex justify-center mt-2 space-x-2">
                      {images.map((_, idx) => (
                        <div
                          key={idx}
                          className={`w-3 h-3 rounded-full ${
                            idx === currentImageIndex ? "bg-gray-700" : "bg-gray-300"
                          }`}
                        ></div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
  
          {competences.length > 1 && (
            <button
              className="rounded-full ml-10"
              onClick={nextCompetence}
            >
              <IoIosArrowForward />
            </button>
          )}
        </div>
  
        {isModalOpen && (
          <Modal
            images={images}
            currentIndex={currentImageIndex}
            onClose={() => setIsModalOpen(false)}
          />
        )}
      </div>
    );
  };
  

export default Carousel;
