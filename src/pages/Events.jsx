import { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { motion } from "framer-motion";
import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaClock,
  FaSearch,
  FaFilter,
  FaChevronRight,
} from "react-icons/fa";

const Events = () => {
  const { isDark } = useTheme();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  // Dados de exemplo para eventos
  const events = [];

  // Função para formatar a data no padrão brasileiro
  const formatDate = (dateString) => {
    const options = { day: "numeric", month: "long", year: "numeric" };
    return new Date(dateString).toLocaleDateString("pt-BR", options);
  };

  // Filtragem de eventos
  const categories = [
    "Todos",
    "Culto",
    "Retiro",
    "Infantil",
    "Seminário",
    "Social",
  ];

  const filteredEvents = events.filter((event) => {
    const matchesSearch =
      event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.description.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "Todos" || event.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  // Remover a separação de evento em destaque
  // Os eventos filtrados serão todos mostrados na lista regular

  return (
    <div
      className={`min-h-screen pt-20 ${
        isDark
          ? "bg-[#0A1126] text-white"
          : "bg-gradient-to-b from-gray-50 via-white to-gray-50 text-gray-800"
      } transition-colors duration-300`}
    >
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="mb-6">
            <h1 className="text-5xl md:text-6xl font-bold">
              Nossos <span className="text-[#FF6B00]">Eventos</span>
            </h1>
          </div>
          <div
            className={`text-xl max-w-3xl mx-auto ${
              isDark ? "text-gray-300" : "text-gray-600"
            }`}
          >
            <p>
              Confira nossa agenda de eventos e participe das atividades da
              nossa comunidade.
            </p>
          </div>
        </div>

        {/* Search and Filter Bar */}
        <div className="mb-16">
          <div
            className={`p-6 rounded-xl ${
              isDark ? "bg-[#141E3C]" : "bg-white shadow-md"
            }`}
          >
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-grow">
                <FaSearch
                  className={`absolute left-4 top-1/2 transform -translate-y-1/2 ${
                    isDark ? "text-gray-400" : "text-gray-500"
                  }`}
                />
                <input
                  type="text"
                  placeholder="Buscar eventos..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className={`w-full pl-12 pr-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6B00] ${
                    isDark
                      ? "bg-[#0A1126] text-white border-[#2D3B4E]"
                      : "bg-gray-50 text-gray-800 border-gray-200"
                  } border`}
                />
              </div>
              <div className="relative">
                <div className="flex items-center">
                  <FaFilter
                    className={`mr-2 ${
                      isDark ? "text-gray-400" : "text-gray-500"
                    }`}
                  />
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className={`pl-4 pr-10 py-3 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-[#FF6B00] ${
                      isDark
                        ? "bg-[#0A1126] text-white border-[#2D3B4E]"
                        : "bg-gray-50 text-gray-800 border-gray-200"
                    } border`}
                  >
                    {categories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                    <FaChevronRight
                      className={`rotate-90 ${
                        isDark ? "text-gray-400" : "text-gray-500"
                      }`}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Event List */}
        <div>
          <div>
            <h2
              className={`text-3xl font-bold mb-8 ${
                isDark ? "text-white" : "text-gray-800"
              }`}
            >
              Próximos <span className="text-[#FF6B00]">Eventos</span>
            </h2>
          </div>

          {filteredEvents.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredEvents.map((event) => (
                <div
                  key={event.id}
                  className={`rounded-xl overflow-hidden transition-all duration-300 ${
                    isDark
                      ? "bg-[#141E3C] border border-[#2D3B4E]"
                      : "bg-white border border-gray-100 shadow-md hover:shadow-xl"
                  } cursor-pointer`}
                >
                  <div className="h-96 overflow-hidden relative">
                    <img
                      src={event.image || "/event-placeholder.jpg"}
                      alt={event.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      onError={(e) => {
                        e.target.src = `https://source.unsplash.com/random/600x400/?church,worship,${event.id}`;
                        e.target.onerror = null; // Prevent infinite loop if unsplash fails
                      }}
                      loading="lazy"
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
                      aria-hidden="true"
                    ></div>
                    <div className="absolute top-4 right-4">
                      <span className="bg-[#FF6B00] text-white px-3 py-1 rounded-full text-xs font-medium shadow-md">
                        {event.category}
                      </span>
                    </div>
                    <h3 className="absolute bottom-4 left-4 right-4 text-xl font-bold text-white drop-shadow-lg">
                      {event.title}
                    </h3>
                  </div>
                  <div className="p-6">
                    <div className="mb-4 space-y-2">
                      <div
                        className={`flex items-center ${
                          isDark ? "text-gray-300" : "text-gray-600"
                        }`}
                      >
                        <FaCalendarAlt className="mr-2 text-[#FF6B00]" />
                        <span>{formatDate(event.date)}</span>
                      </div>
                      <div
                        className={`flex items-center ${
                          isDark ? "text-gray-300" : "text-gray-600"
                        }`}
                      >
                        <FaClock className="mr-2 text-[#FF6B00]" />
                        <span>{event.time}</span>
                      </div>
                      <div
                        className={`flex items-center ${
                          isDark ? "text-gray-300" : "text-gray-600"
                        }`}
                      >
                        <FaMapMarkerAlt className="mr-2 text-[#FF6B00]" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                    <p
                      className={`line-clamp-3 ${
                        isDark ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      {event.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div
              className={`text-center py-12 ${
                isDark ? "text-gray-300" : "text-gray-600"
              }`}
            >
              <h3 className="text-2xl font-medium mb-4">
                Nenhum evento encontrado
              </h3>
              <p>Tente ajustar os filtros ou voltar mais tarde.</p>
            </div>
          )}
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <div
            className={`p-12 rounded-2xl ${
              isDark
                ? "bg-gradient-to-r from-[#141E3C] to-[#1E293B]"
                : "bg-gradient-to-r from-gray-50 to-white"
            }`}
          >
            <h2 className="text-4xl font-bold mb-6">
              Quer <span className="text-[#FF6B00]">Sugerir</span> um Evento?
            </h2>
            <p
              className={`text-lg max-w-2xl mx-auto mb-8 ${
                isDark ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Tem uma ideia para um evento ou uma atividade que gostaria de ver
              em nossa igreja? Entre em contato conosco!
            </p>
            <button className="bg-gradient-to-r from-[#FF6B00] to-[#FF8533] hover:from-[#FF8533] hover:to-[#FF6B00] text-white py-4 px-8 rounded-xl transition-all duration-300 font-medium">
              Entre em Contato
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
