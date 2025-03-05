import { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const ImageSlider = ({ images, autoPlayTime = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isTransitioning) {
        handleSlideChange((currentIndex + 1) % images.length);
      }
    }, autoPlayTime);

    return () => clearInterval(timer);
  }, [currentIndex, images.length, autoPlayTime, isTransitioning]);

  const handleSlideChange = (newIndex) => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex(newIndex);
      setTimeout(() => setIsTransitioning(false), 700); // Combina com a duração da transição
    }
  };

  const goToPrevious = () => {
    handleSlideChange(
      currentIndex === 0 ? images.length - 1 : currentIndex - 1
    );
  };

  const goToNext = () => {
    handleSlideChange((currentIndex + 1) % images.length);
  };

  return (
    <div className="flex flex-col items-center gap-6">
      {/* Container do Slider */}
      <div className="relative w-full max-w-7xl mx-auto h-[400px] sm:h-[500px] md:h-[600px] lg:h-[650px] overflow-hidden rounded-2xl">
        {/* Slides Container */}
        <div className="relative h-full w-full">
          {images.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-500 ease-in-out
              ${index === currentIndex ? "opacity-100" : "opacity-0"}`}
            >
              <img
                src={slide.image}
                alt={slide.title || `Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/50"></div>

              {/* Conteúdo do Slide */}
              <div className="absolute inset-0 flex items-center justify-center px-4">
                <div className="text-center max-w-4xl mx-auto px-4 space-y-6">
                  {slide.title && (
                    <h2
                      className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg
                               transform transition-all duration-500 delay-100
                               translate-y-0 opacity-100"
                    >
                      {slide.title}
                    </h2>
                  )}
                  {slide.description && (
                    <p
                      className="text-xl md:text-2xl text-gray-100 drop-shadow-md
                             transform transition-all duration-500 delay-200
                             translate-y-0 opacity-100"
                    >
                      {slide.description}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Indicadores simplificados */}
        <div className="absolute bottom-4 sm:bottom-10 left-0 right-0">
          <div className="flex justify-center gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300
                ${
                  index === currentIndex
                    ? "w-8 bg-[#FF6B00]"
                    : "w-2 bg-white/70"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Contador simplificado */}
        <div className="absolute top-4 right-4 bg-black/30 backdrop-blur-sm text-white px-3 py-1 rounded-full">
          <span className="text-sm">
            {currentIndex + 1} / {images.length}
          </span>
        </div>
      </div>

      {/* Botões de navegação com bordas arredondadas */}
      <div className="flex justify-center gap-4">
        <button
          onClick={goToPrevious}
          className="w-16 h-10 bg-[#FF6B00] flex items-center justify-center
                   transition-colors duration-300 hover:bg-[#ff8534] rounded-xl"
        >
          <FaArrowLeft className="w-5 h-5 text-white" />
        </button>
        <button
          onClick={goToNext}
          className="w-16 h-10 bg-[#FF6B00] flex items-center justify-center
                   transition-colors duration-300 hover:bg-[#ff8534] rounded-xl"
        >
          <FaArrowRight className="w-5 h-5 text-white" />
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;
