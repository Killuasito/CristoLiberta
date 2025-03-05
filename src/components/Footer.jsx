import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaChurch,
  FaArrowRight,
  FaClock,
  FaLink,
} from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  fadeInUp,
  staggerContainer,
  staggerItem,
  fadeIn,
} from "../utils/animations";

const Footer = () => {
  const { isDark } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();
  const [activeLink, setActiveLink] = useState("/");

  // Update active link when location changes
  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  // Function to handle navigation with error checking
  const handleNavigation = (path, e) => {
    e.preventDefault();

    try {
      console.log(`Trying to navigate to: ${path}`);
      navigate(path);
      setActiveLink(path);
      window.scrollTo(0, 0);
    } catch (error) {
      console.error(`Navigation error: ${error}`);
    }
  };

  // Updated quick links that match your existing application routes
  const quickLinks = [
    { name: "Início", path: "/" },
    { name: "Sobre Nós", path: "/sobre" },
    { name: "Eventos", path: "/eventos" },
    { name: "Galeria", path: "/imagens" },
    { name: "Doações", path: "/doacoes" },
  ];

  // Contact information
  const contactInfo = [
    {
      icon: FaMapMarkerAlt,
      text: "Estr. Victor's, 360 - Recanto dos Victor's, Cotia - SP",
      link: "https://maps.app.goo.gl/KfFKdky9T8U9V1Rx8",
    },
  ];

  // Social media links
  const socialLinks = [
    {
      icon: FaFacebookF,
      label: "Facebook",
      link: "https://www.facebook.com/CristoLibertaCotiaOficial/?locale=pt_BR",
    },
    {
      icon: FaInstagram,
      label: "Instagram",
      link: "https://www.instagram.com/icl_cotia/",
    },
  ];

  return (
    <footer
      className={`relative mt-16 border-t ${
        isDark
          ? "bg-[#0c1526] text-white border-white/10"
          : "bg-gray-50 text-gray-800 border-gray-100"
      } transition-colors duration-300`}
    >
      {/* Wave separator */}
      <motion.div
        className="absolute top-0 left-0 w-full overflow-hidden -translate-y-full line-height-0 transform rotate-180"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className={`relative block w-full h-[50px] ${
            isDark ? "fill-[#0c1526]" : "fill-gray-50"
          }`}
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </motion.div>

      {/* Background elements */}
      <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-[0.03]"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#FF6B00]/[0.02] to-transparent"></div>

      {/* Newsletter Section */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 -mt-16">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
          className={`relative p-8 rounded-2xl shadow-xl ${
            isDark
              ? "bg-gradient-to-br from-[#1E293B] to-[#0f172a] border border-white/5"
              : "bg-white border border-gray-100"
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B00]/5 to-transparent rounded-2xl"></div>
          <div className="relative grid gap-8 md:grid-cols-3 md:gap-12 items-center">
            <div className="md:col-span-2 space-y-4">
              <div className="flex items-center">
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <FaChurch className="w-8 h-8 mr-4 text-[#FF6B00]" />
                </motion.div>
                <h2
                  className={`text-2xl md:text-3xl font-bold ${
                    isDark ? "text-white" : "text-gray-800"
                  }`}
                >
                  Conecte-se Conosco
                </h2>
              </div>
              <p
                className={`text-base max-w-xl ${
                  isDark ? "text-gray-300" : "text-gray-600"
                }`}
              >
                Receba inspirações diárias e mantenha-se atualizado com nossas
                atividades e eventos especiais.
              </p>
            </div>

            <div>
              <form className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Seu e-mail"
                  className={`px-4 py-3 rounded-lg flex-grow ${
                    isDark
                      ? "bg-[#0A1126] text-white border-white/10 focus:border-[#FF6B00]/50"
                      : "bg-gray-50 text-gray-700 border-gray-200 focus:border-[#FF6B00]/50"
                  } border focus:outline-none focus:ring-2 focus:ring-[#FF6B00]/30 transition-all duration-300`}
                  required
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-5 py-3 bg-gradient-to-r from-[#FF6B00] to-[#FF8533] text-white rounded-lg hover:from-[#FF8533] hover:to-[#FF6B00] transition-all duration-500 font-medium flex items-center justify-center gap-2 whitespace-nowrap shadow-md hover:shadow-lg"
                >
                  Inscrever-se
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{
                      repeat: Infinity,
                      duration: 1.5,
                      ease: "easeInOut",
                    }}
                  >
                    <FaArrowRight className="h-3.5 w-3.5" />
                  </motion.div>
                </motion.button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Main Content */}
      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16"
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* About Section */}
          <motion.div variants={staggerItem} className="space-y-6">
            <div>
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="text-xl font-bold mb-4"
              >
                <span className="bg-gradient-to-r from-[#FF6B00] via-[#ff8534] to-[#FF6B00] text-transparent bg-clip-text tracking-wide">
                  Cristo Liberta
                </span>
              </motion.h3>
              <motion.p
                variants={fadeIn}
                className={`leading-relaxed text-sm ${
                  isDark ? "text-gray-300" : "text-gray-600"
                } mb-6`}
              >
                Um lugar de fé, esperança e amor para todos. Venha fazer parte
                desta família e crescer em comunhão com Cristo.
              </motion.p>
            </div>

            <motion.div variants={staggerContainer} className="space-y-3">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={index}
                  variants={staggerItem}
                  whileHover={{
                    scale: 1.02,
                    backgroundColor: isDark
                      ? "rgba(255, 107, 0, 0.1)"
                      : "rgba(255, 107, 0, 0.05)",
                  }}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center space-x-3 ${
                    isDark
                      ? "text-gray-300 hover:text-white"
                      : "text-gray-600 hover:text-gray-900"
                  } group cursor-pointer p-2 rounded-lg transition-all duration-300`}
                >
                  <motion.div
                    whileHover={{ rotate: 10 }}
                    className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                      isDark ? "bg-[#1E293B]" : "bg-gray-100"
                    } group-hover:bg-[#FF6B00]/10 transition-colors duration-300`}
                  >
                    <item.icon className="w-4 h-4 text-[#FF6B00]" />
                  </motion.div>
                  <span className="text-sm group-hover:text-[#FF6B00] transition-colors duration-300">
                    {item.text}
                  </span>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Quick Links Section */}
          <motion.div variants={staggerItem} className="space-y-6">
            <div className="flex items-center space-x-3 mb-4">
              <motion.div
                whileHover={{ rotate: 180 }}
                transition={{ duration: 0.3 }}
              >
                <FaLink className="w-4 h-4 text-[#FF6B00]" />
              </motion.div>
              <h3 className="text-xl font-bold">
                <span className="bg-gradient-to-r from-[#FF6B00] via-[#ff8534] to-[#FF6B00] text-transparent bg-clip-text tracking-wide">
                  Links Rápidos
                </span>
              </h3>
            </div>

            <motion.ul
              variants={staggerContainer}
              className="grid grid-cols-1 gap-2"
            >
              {quickLinks.map((link, index) => {
                const isActive = activeLink === link.path;
                return (
                  <motion.li
                    key={link.name}
                    variants={staggerItem}
                    custom={index}
                  >
                    <motion.a
                      whileHover={{
                        backgroundColor: isDark
                          ? "rgba(255, 107, 0, 0.2)"
                          : "rgba(255, 107, 0, 0.1)",
                        x: 5,
                      }}
                      href={link.path}
                      onClick={(e) => handleNavigation(link.path, e)}
                      className={`group flex items-center p-2 rounded-lg 
                      ${
                        isActive
                          ? `bg-[#FF6B00]/10 ${
                              isDark ? "text-[#FF6B00]" : "text-[#FF6B00]"
                            }`
                          : `${isDark ? "text-gray-300" : "text-gray-700"}`
                      } transition-all duration-300 cursor-pointer`}
                    >
                      <motion.span
                        animate={{ scale: isActive ? 1.2 : 1 }}
                        className={`w-2 h-2 rounded-full bg-[#FF6B00] mr-3 ${
                          isActive ? "w-3" : "group-hover:w-3"
                        } transition-all duration-300`}
                      ></motion.span>
                      <span className="text-sm font-medium group-hover:text-[#FF6B00] transition-colors duration-300">
                        {link.name}
                      </span>
                    </motion.a>
                  </motion.li>
                );
              })}
            </motion.ul>
          </motion.div>

          {/* Service Times Section */}
          <motion.div variants={staggerItem} className="space-y-6">
            <div className="flex items-center space-x-3 mb-4">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              >
                <FaClock className="w-4 h-4 text-[#FF6B00]" />
              </motion.div>
              <h3 className="text-xl font-bold">
                <span className="bg-gradient-to-r from-[#FF6B00] via-[#ff8534] to-[#FF6B00] text-transparent bg-clip-text tracking-wide">
                  Horários
                </span>
              </h3>
            </div>

            <motion.div variants={staggerContainer} className="space-y-3">
              {[
                {
                  dia: "Domingo",
                  horarios: ["18:00 - 20:00 - Culto com a Família"],
                },
                {
                  dia: "Segunda",
                  horarios: [
                    "19:30 - 20:00 - Intercessão",
                    "20:00 - 21:00 - Estudo Bíblico",
                  ],
                },
                {
                  dia: "Quarta",
                  horarios: ["19:30 - 21:00 - Culto de Propósitos"],
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={staggerItem}
                  whileHover={{
                    y: -5,
                    boxShadow: isDark
                      ? "0 10px 15px -3px rgba(0, 0, 0, 0.4)"
                      : "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
                  }}
                  className={`block p-4 rounded-xl transition-all duration-300 border ${
                    isDark
                      ? "bg-[#1E293B] hover:bg-[#2D3B4E] border-white/10"
                      : "bg-white hover:bg-gray-50 border-gray-100"
                  } shadow-sm`}
                >
                  <h4 className="text-lg font-bold mb-2 text-[#FF6B00] flex items-center">
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2 * index, duration: 0.3 }}
                      className="w-2 h-2 rounded-full bg-[#FF6B00] mr-2"
                    ></motion.span>
                    {item.dia}
                  </h4>
                  {item.horarios.map((horario, idx) => (
                    <motion.p
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * (idx + 1), duration: 0.3 }}
                      className={`text-sm ${
                        isDark ? "text-gray-300" : "text-gray-600"
                      } ml-4`}
                    >
                      {horario}
                    </motion.p>
                  ))}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Social Media Section */}
          <motion.div variants={staggerItem} className="space-y-6">
            <div className="flex items-center space-x-3 mb-4">
              <motion.div
                whileHover={{ scale: 1.3, rotate: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FaInstagram className="w-4 h-4 text-[#FF6B00]" />
              </motion.div>
              <h3 className="text-xl font-bold">
                <span className="bg-gradient-to-r from-[#FF6B00] via-[#ff8534] to-[#FF6B00] text-transparent bg-clip-text tracking-wide">
                  Redes Sociais
                </span>
              </h3>
            </div>

            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-1 gap-3"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  variants={staggerItem}
                  whileHover={{ y: -5, scale: 1.02 }}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-lg flex items-center space-x-4 group transition-all duration-300 border ${
                    isDark
                      ? "bg-[#1E293B] hover:bg-[#2D3B4E] border-white/10"
                      : "bg-white hover:bg-gray-50 border-gray-100"
                  } hover:shadow-md`}
                >
                  <motion.div
                    whileHover={{ rotate: 20 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FF6B00] to-[#FF8533] flex items-center justify-center shadow-md"
                  >
                    <social.icon className="w-5 h-5 text-white" />
                  </motion.div>
                  <span
                    className={`text-sm font-medium ${
                      isDark ? "text-gray-200" : "text-gray-700"
                    } group-hover:text-[#FF6B00]`}
                  >
                    {social.label}
                  </span>
                </motion.a>
              ))}

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className={`text-xs mt-3 ${
                  isDark ? "text-gray-400" : "text-gray-500"
                }`}
              >
                Siga-nos para receber atualizações, reflexões diárias e conteúdo
                inspirador.
              </motion.p>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className={`mt-12 pt-8 border-t ${
            isDark ? "border-white/10" : "border-gray-200"
          }`}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div>
              <p
                className={`text-xs ${
                  isDark ? "text-gray-400" : "text-gray-500"
                }`}
              >
                © {new Date().getFullYear()} Igreja Cristo Liberta <br />
                <span className="opacity-75">
                  Todos os direitos reservados.
                </span>
              </p>
            </div>

            <div className="flex items-center space-x-4">
              {[
                { name: "Privacidade", path: "/privacidade" },
                { name: "Termos", path: "/termos" },
                { name: "FAQ", path: "/faq" },
              ].map((item, index) => (
                <motion.a
                  key={item.name}
                  whileHover={{ scale: 1.2, color: "#FF6B00" }}
                  href={item.path}
                  onClick={(e) => handleNavigation(item.path, e)}
                  className={`text-xs transition-all duration-300 cursor-pointer ${
                    isDark ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  {item.name}
                </motion.a>
              ))}

              <span
                className={`text-xs ${
                  isDark ? "text-gray-600" : "text-gray-300"
                }`}
              >
                |
              </span>

              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#top"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className={`text-xs flex items-center space-x-1 ${
                  isDark
                    ? "text-gray-400 hover:text-[#FF6B00]"
                    : "text-gray-500 hover:text-[#FF6B00]"
                } transition-colors duration-300`}
              >
                <span>Voltar ao topo</span>
                <motion.svg
                  animate={{ y: [0, -3, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 15l7-7 7 7"
                  />
                </motion.svg>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
