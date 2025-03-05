import { motion } from "framer-motion";
import { FaHandHoldingHeart, FaQrcode, FaRegCopy } from "react-icons/fa";
import { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import AnimatedSection, {
  AnimatedElement,
} from "../components/AnimatedSection";
import { AnimatedText, AnimatedGradientText } from "../components/AnimatedText";

const Donations = () => {
  const { isDark } = useTheme();
  const [copied, setCopied] = useState(false);

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const donationMethods = [
    {
      icon: FaQrcode,
      title: "PIX",
      info: "cristoliberta@oul.com.br",
      copyValue: "cristoliberta@oul.com.br",
      showCopy: true,
    },
  ];

  const impactAreas = [
    "Auxílio a famílias necessitadas",
    "Manutenção do templo",
    "Projetos sociais",
    "Evangelização",
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className={`min-h-screen pt-20 ${
        isDark
          ? "bg-[#0A1126] text-white"
          : "bg-gradient-to-b from-gray-50 via-white to-gray-50 text-gray-800"
      } transition-colors duration-300`}
    >
      <div className="max-w-7xl mx-auto px-4 py-20">
        <AnimatedSection animation="fadeIn" className="text-center mb-16">
          <AnimatedElement animation="fadeUp" delay={0.1}>
            <AnimatedText
              text="Faça uma Doação"
              highlightWords={["Doação"]}
              className="text-5xl md:text-6xl font-bold mb-6"
            />
          </AnimatedElement>

          <AnimatedElement animation="fadeUp" delay={0.3}>
            <p
              className={`text-xl max-w-3xl mx-auto ${
                isDark ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Sua contribuição nos ajuda a continuar nosso trabalho e impactar
              mais vidas.
            </p>
          </AnimatedElement>
        </AnimatedSection>

        {/* Métodos de Doação - Removed bank transfer */}
        <AnimatedSection animation="fadeUp" delay={0.4} className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {donationMethods.map((method, index) => (
              <motion.div
                key={index}
                whileHover={{
                  y: -10,
                  boxShadow: isDark
                    ? "0 20px 25px -5px rgba(0, 0, 0, 0.4), 0 8px 10px -6px rgba(0, 0, 0, 0.4)"
                    : "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
                }}
                className={`p-8 rounded-xl transition-all duration-300 border ${
                  isDark
                    ? "bg-[#13213d] border-[#18294e]"
                    : "bg-white border-gray-100 shadow-lg"
                }`}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    delay: 0.5 + 0.1 * index,
                  }}
                >
                  <method.icon className="w-12 h-12 text-[#FF6B00] mb-6" />
                </motion.div>

                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + 0.1 * index }}
                  className={`text-xl font-bold mb-4 ${
                    isDark ? "text-gray-200" : "text-gray-800"
                  }`}
                >
                  {method.title}
                </motion.h3>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 + 0.1 * index }}
                >
                  <div
                    className={`${
                      isDark ? "text-gray-300" : "text-gray-600"
                    } whitespace-pre-line`}
                  >
                    {method.showCopy ? (
                      <div className="relative">
                        <div className="flex items-center justify-between p-3 bg-gray-100 dark:bg-[#0A1126] rounded-lg">
                          <span className="text-gray-800 dark:text-gray-200 font-mono">
                            {method.copyValue}
                          </span>
                          <motion.button
                            whileTap={{ scale: 0.95 }}
                            onClick={() => handleCopy(method.copyValue)}
                            className="ml-2 p-2 text-[#FF6B00] hover:text-[#ff8534] focus:outline-none"
                            aria-label="Copiar"
                          >
                            <FaRegCopy />
                          </motion.button>
                        </div>
                        {copied && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            className="absolute -bottom-6 left-0 right-0 text-center text-xs text-green-500"
                          >
                            Copiado!
                          </motion.div>
                        )}
                      </div>
                    ) : (
                      <p>{method.info}</p>
                    )}
                  </div>
                </motion.div>
              </motion.div>
            ))}

            {/* QR Code */}
            <motion.div
              whileHover={{
                y: -10,
                boxShadow: isDark
                  ? "0 20px 25px -5px rgba(0, 0, 0, 0.4), 0 8px 10px -6px rgba(0, 0, 0, 0.4)"
                  : "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
              }}
              className={`flex flex-col items-center justify-center p-8 rounded-xl transition-all duration-300 border ${
                isDark
                  ? "bg-[#13213d] border-[#18294e]"
                  : "bg-white border-gray-100 shadow-lg"
              }`}
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                <div className="bg-white p-4 rounded-lg">
                  <img
                    src="/qrcode.png"
                    alt="QR Code PIX"
                    className="w-40 h-40 object-contain mx-auto"
                    onError={(e) => {
                      e.target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23ffffff'/%3E%3Ctext x='50%' y='50%' font-family='Arial' font-size='20' text-anchor='middle' fill='%23000000'%3EQR Code%3C/text%3E%3C/svg%3E`;
                    }}
                  />
                </div>
                <p
                  className={`text-center mt-4 ${
                    isDark ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  Escaneie o código QR
                </p>
              </motion.div>
            </motion.div>
          </div>
        </AnimatedSection>

        {/* Seção de Impacto */}
        <AnimatedSection animation="fadeUp" delay={0.5}>
          <motion.div
            whileHover={{
              boxShadow:
                "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
            }}
            className={`rounded-xl p-8 md:p-12 border ${
              isDark
                ? "bg-[#13213d] border-[#18294e]"
                : "bg-white border-gray-100 shadow-lg"
            }`}
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <AnimatedElement animation="fadeUp">
                  <h2
                    className={`text-3xl font-bold mb-6 ${
                      isDark ? "text-gray-200" : "text-gray-800"
                    }`}
                  >
                    Seu Impacto na <AnimatedGradientText text="Comunidade" />
                  </h2>
                </AnimatedElement>

                <AnimatedElement animation="fadeUp" delay={0.2}>
                  <p
                    className={`${
                      isDark ? "text-gray-300" : "text-gray-600"
                    } mb-8`}
                  >
                    Suas doações nos ajudam a manter nossos projetos sociais e
                    alcançar mais pessoas com a mensagem de Cristo.
                  </p>
                </AnimatedElement>

                <div className="space-y-4">
                  {impactAreas.map((item, index) => (
                    <AnimatedElement
                      key={index}
                      animation="fadeLeft"
                      delay={0.3 + index * 0.1}
                    >
                      <div className="flex items-center space-x-3">
                        <FaHandHoldingHeart className="text-[#FF6B00]" />
                        <span className="text-gray-600 dark:text-gray-200">
                          {item}
                        </span>
                      </div>
                    </AnimatedElement>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatedSection>
      </div>
    </motion.div>
  );
};

export default Donations;
