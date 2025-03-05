import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaMoon } from "react-icons/fa";
import { IoSunnyOutline } from "react-icons/io5";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { isDark, toggleTheme } = useTheme();

  // Estado para controle de scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Fechar menu ao mudar de rota
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Array com todas as rotas disponíveis
  const menuItems = [
    { name: "Início", path: "/" },
    { name: "Sobre", path: "/sobre" },
    { name: "Eventos", path: "/eventos" },
    { name: "Imagens", path: "/slider" },
    { name: "Doações", path: "/doacoes" },
  ];

  // Função para verificar rota ativa
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-colors duration-300 ${
        isDark
          ? "bg-[#0A1126] text-white border-b border-white/5"
          : "bg-white text-gray-800 border-b border-gray-200"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="text-3xl font-bold relative group z-50">
            <span className="bg-gradient-to-r from-[#FF6B00] to-[#ff8534] bg-clip-text text-transparent">
              Cristo
            </span>{" "}
            <span className={isDark ? "text-white" : "text-gray-800"}>
              Liberta
            </span>
            <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-[#FF6B00] to-[#ff8534] transition-all group-hover:w-full"></span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative group py-2 ${
                  isActive(item.path)
                    ? "text-[#FF6B00]"
                    : isDark
                    ? "text-gray-300"
                    : "text-gray-600"
                }`}
              >
                <span className="text-lg font-medium group-hover:text-[#FF6B00] transition-colors duration-300">
                  {item.name}
                </span>
                <span
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#FF6B00] transition-transform duration-300 origin-center
                  ${
                    isActive(item.path)
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  }`}
                ></span>
              </Link>
            ))}

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-all duration-300 ${
                isDark ? "hover:bg-white/10" : "hover:bg-gray-100"
              }`}
              aria-label="Toggle theme"
            >
              {isDark ? (
                <IoSunnyOutline className="w-6 h-6 text-yellow-400" />
              ) : (
                <FaMoon className="w-5 h-5 text-gray-600" />
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-all duration-300 ${
                isDark ? "hover:bg-white/10" : "hover:bg-gray-100"
              }`}
              aria-label="Toggle theme"
            >
              {isDark ? (
                <IoSunnyOutline className="w-6 h-6 text-yellow-400" />
              ) : (
                <FaMoon className="w-5 h-5 text-gray-600" />
              )}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-10 h-10 relative focus:outline-none z-50"
            >
              <div className="absolute w-6 transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
                <span
                  className={`absolute h-0.5 w-6 transform transition duration-300 ease-in-out ${
                    isDark ? "bg-white" : "bg-gray-800"
                  } ${isOpen ? "rotate-45 delay-200" : "-translate-y-1.5"}`}
                ></span>
                <span
                  className={`absolute h-0.5 transform transition-all duration-200 ease-in-out ${
                    isDark ? "bg-white" : "bg-gray-800"
                  } ${isOpen ? "w-0 opacity-50" : "w-6 delay-200 opacity-100"}`}
                ></span>
                <span
                  className={`absolute h-0.5 w-6 transform transition duration-300 ease-in-out ${
                    isDark ? "bg-white" : "bg-gray-800"
                  } ${isOpen ? "-rotate-45 delay-200" : "translate-y-1.5"}`}
                ></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 transition-all duration-300 ease-in-out md:hidden ${
          isDark ? "bg-[#0A1126]" : "bg-white"
        } ${
          isOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
        style={{ top: "80px", height: "calc(100vh - 80px)" }}
      >
        <div className="flex flex-col items-center justify-start pt-12 h-full overflow-y-auto">
          {menuItems.map((item, index) => (
            <div key={item.path} className="w-full px-6 py-3">
              <Link
                to={item.path}
                className={`relative group flex flex-col items-center py-4 ${
                  isActive(item.path)
                    ? "text-[#FF6B00]"
                    : isDark
                    ? "text-gray-400"
                    : "text-gray-600"
                }`}
                onClick={() => setIsOpen(false)}
              >
                <span
                  className={`text-2xl font-medium transition-all duration-300 ${
                    isDark
                      ? "group-hover:text-white"
                      : "group-hover:text-[#FF6B00]"
                  }`}
                  style={{
                    animation: isOpen
                      ? `slideIn 0.4s ease-out ${index * 0.1}s forwards`
                      : "none",
                    opacity: 0,
                  }}
                >
                  {item.name}
                </span>
                <span
                  className={`mt-2 h-0.5 bg-[#FF6B00] transition-all duration-300 ${
                    isActive(item.path) ? "w-16" : "w-0 group-hover:w-16"
                  }`}
                ></span>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <style>
        {`
          @keyframes slideIn {
            0% {
              opacity: 0;
              transform: translateY(20px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </nav>
  );
};

export default Navbar;
