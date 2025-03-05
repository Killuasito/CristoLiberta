import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Mostrar botão quando rolar 300px
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Função para rolar para o topo
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 p-4 bg-[#FF6B00] hover:bg-[#ff8534] 
                 rounded-full shadow-lg transition-all duration-300 z-50
                 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#FF6B00]
                 ${
                   isVisible
                     ? "translate-y-0 opacity-100"
                     : "translate-y-12 opacity-0"
                 }`}
      aria-label="Voltar ao topo"
    >
      <FaArrowUp className="w-6 h-6 text-white" />
    </button>
  );
};

export default ScrollToTop;
