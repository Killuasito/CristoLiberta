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
  const events = [
    {
      id: 1,
      title: "Culto Especial de Adoração",
      date: "2023-12-24",
      time: "18:00",
      location: "Templo Principal",
      description:
        "Um momento especial de conexão com Deus através de louvor e adoração.",
      image: "/event1.jpg",
      category: "Culto",
    },
    {
      id: 2,
      title: "Retiro de Jovens",
      date: "2024-01-15",
      time: "09:00",
      location: "Chácara Recanto da Paz",
      description:
        "Um fim de semana dedicado ao crescimento espiritual e comunhão entre os jovens da igreja.",
      image: "/event2.jpg",
      category: "Retiro",
    },
    {
      id: 3,
      title: "Escola Bíblica de Férias",
      date: "2024-01-22",
      time: "14:00",
      location: "Área Infantil",
      description:
        "Um programa especial para crianças aprenderem sobre a Bíblia de maneira divertida e interativa.",
      image: "/event3.jpg",
      category: "Infantil",
    },
    {
      id: 4,
      title: "Seminário de Liderança",
      date: "2024-02-05",
      time: "19:30",
      location: "Sala de Conferências",
      description:
        "Treinamento especial para líderes e pessoas interessadas em desenvolver habilidades de liderança cristã.",
      image: "/event4.jpg",
      category: "Seminário",
    },
    {
      id: 5,
      title: "Ação Social na Comunidade",
      date: "2024-02-18",
      time: "09:00",
      location: "Bairro Jardim Esperança",
      description:
        "Distribuição de alimentos e serviços gratuitos para a comunidade local.",
      image: "/event5.jpg",
      category: "Social",
    },
  ];

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

  // Evento em destaque (primeiro da lista)
  const featuredEvent = events[0];
  // Eventos restantes
  const regularEvents = filteredEvents.slice(1);

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

        {/* Featured Event */}
        <div className="mb-16">
          <div>
            <h2
              className={`text-3xl font-bold mb-8 ${
                isDark ? "text-white" : "text-gray-800"
              }`}
            >
              Evento em <span className="text-[#FF6B00]">Destaque</span>
            </h2>
          </div>

          <div
            className={`overflow-hidden rounded-2xl ${
              isDark ? "bg-[#141E3C]" : "bg-white"
            } shadow-xl`}
          >
            <div className="grid md:grid-cols-2 gap-0">
              <div className="h-64 md:h-auto overflow-hidden relative">
                <div
                  className={`absolute inset-0 bg-black/50 flex items-center justify-center ${
                    isDark ? "bg-opacity-70" : "bg-opacity-40"
                  }`}
                >
                  <div className="text-center p-8">
                    <h3 className="text-3xl font-bold text-white mb-4">
                      {featuredEvent.title}
                    </h3>
                    <div className="flex justify-center gap-4">
                      <span className="bg-[#FF6B00] text-white px-4 py-2 rounded-full text-sm font-medium">
                        {featuredEvent.category}
                      </span>
                      <span className="bg-white text-[#FF6B00] px-4 py-2 rounded-full text-sm font-medium">
                        Em destaque
                      </span>
                    </div>
                  </div>
                </div>
                <img
                  src="/event-placeholder.jpg"
                  alt={featuredEvent.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src =
                      "https://images.unsplash.com/photo-1555708982-8645ec9ce3cc?q=80&w=1000";
                  }}
                />
              </div>
              <div className="p-8 flex flex-col justify-between">
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
                    <div
                      className={`flex items-center ${
                        isDark ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      <FaCalendarAlt className="mr-2 text-[#FF6B00]" />
                      <span>{formatDate(featuredEvent.date)}</span>
                    </div>
                    <div
                      className={`flex items-center ${
                        isDark ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      <FaClock className="mr-2 text-[#FF6B00]" />
                      <span>{featuredEvent.time}</span>
                    </div>
                  </div>

                  <div
                    className={`flex items-start mb-6 ${
                      isDark ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    <FaMapMarkerAlt className="mr-2 mt-1 text-[#FF6B00]" />
                    <span>{featuredEvent.location}</span>
                  </div>

                  <div
                    className={`mb-6 ${
                      isDark ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    <p>{featuredEvent.description}</p>
                  </div>
                </div>

                <button className="bg-gradient-to-r from-[#FF6B00] to-[#FF8533] hover:from-[#FF8533] hover:to-[#FF6B00] text-white py-4 px-8 rounded-xl transition-all duration-300 font-medium">
                  Mais informações
                </button>
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
              {regularEvents.map((event, index) => (
                <div
                  key={event.id}
                  className={`rounded-xl overflow-hidden transition-all duration-300 ${
                    isDark
                      ? "bg-[#141E3C] border border-[#2D3B4E]"
                      : "bg-white border border-gray-100 shadow-md hover:shadow-xl"
                  } cursor-pointer`}
                >
                  <div className="h-48 overflow-hidden relative">
                    <img
                      src={event.image || "/event-placeholder.jpg"}
                      alt={event.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src = `https://source.unsplash.com/random/600x400/?church,event,${event.id}`;
                      }}
                    />
                    <div className="absolute top-4 right-4">
                      <span className="bg-[#FF6B00] text-white px-3 py-1 rounded-full text-xs font-medium">
                        {event.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3
                      className={`text-xl font-bold mb-4 ${
                        isDark ? "text-white" : "text-gray-800"
                      }`}
                    >
                      {event.title}
                    </h3>
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
