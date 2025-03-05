import { FaChurch, FaHeart, FaPray, FaUsers } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";
import { motion } from "framer-motion";
import { fadeInUp } from "../utils/animations";

const About = () => {
  const { isDark } = useTheme();

  const values = [
    {
      icon: FaHeart,
      title: "Amor",
      desc: "Demonstramos o amor de Cristo em tudo que fazemos",
    },
    {
      icon: FaPray,
      title: "Fé",
      desc: "Fundamentados na fé e na palavra de Deus",
    },
    {
      icon: FaUsers,
      title: "Comunidade",
      desc: "Unidos como uma família em Cristo",
    },
    {
      icon: FaChurch,
      title: "Adoração",
      desc: "Dedicados à verdadeira adoração",
    },
  ];

  return (
    <div
      className={`min-h-screen pt-20 ${
        isDark
          ? "bg-[#0A1126] text-white"
          : "bg-gradient-to-b from-gray-50 via-white to-gray-50 text-gray-800"
      } transition-colors duration-300`}
    >
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-[0.05]"></div>
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-6"
          >
            <h1
              className={`text-5xl md:text-6xl font-bold ${
                isDark ? "text-white" : "text-gray-800"
              }`}
            >
              Sobre Nossa <span className="text-[#FF6B00]">Igreja</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className={`text-xl max-w-3xl mx-auto leading-relaxed ${
              isDark ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Uma comunidade dedicada a compartilhar o amor de Cristo e
            transformar vidas através da palavra de Deus.
          </motion.p>
        </div>
      </section>

      {/* Valores - Redesigned as fluid elements */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className={`text-4xl font-bold mb-4 ${
                isDark ? "text-white" : "text-gray-800"
              }`}
            >
              Nossos <span className="text-[#FF6B00]">Valores</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className={`max-w-2xl mx-auto ${
                isDark ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Princípios que orientam nosso ministério e nossa comunidade
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">
            {values.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
                className="flex flex-col items-center text-center"
              >
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ duration: 0.3, type: "spring" }}
                  className={`w-16 h-16 rounded-full ${
                    isDark ? "bg-[#141E3C]" : "bg-gray-50"
                  } flex items-center justify-center mb-6 shadow-lg`}
                >
                  <item.icon className="w-8 h-8 text-[#FF6B00]" />
                </motion.div>

                <h3
                  className={`text-xl font-bold mb-3 ${
                    isDark ? "text-white" : "text-gray-800"
                  }`}
                >
                  {item.title}
                </h3>

                <p className={`${isDark ? "text-gray-400" : "text-gray-600"}`}>
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* História - Redesigned with fluid layout */}
      <section
        className={`relative py-20 px-4 ${
          isDark
            ? "bg-gradient-to-b from-[#0A1126] to-[#0A1126]/70"
            : "bg-gradient-to-b from-gray-50 to-white"
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className={`text-4xl font-bold mb-8 ${
                  isDark ? "text-white" : "text-gray-800"
                }`}
              >
                Uma mensagem de <span className="text-[#FF6B00]">Fé</span>
              </motion.h2>

              <motion.div
                variants={fadeInUp}
                initial="initial"
                animate="animate"
                className={`space-y-6 ${
                  isDark ? "text-gray-300" : "text-gray-600"
                }`}
              >
                <div className="flex">
                  <div className="mr-4 flex-shrink-0 self-start pt-1">
                    <div className="w-1 h-full bg-gradient-to-b from-[#FF6B00] to-transparent rounded-full"></div>
                  </div>
                  <blockquote className="relative italic">
                    <p className="mb-4">
                      "Não fui desobediente à visão celestial" (Atos 26:19)
                    </p>
                    <p className="mb-4">
                      Como faz bem ao meu coração poder fazer a mesma afirmação
                      do apóstolo Paulo. São 60 anos de firmeza e de fidelidade
                      na visão, e posso afirmar que eu também não fui
                      desobediente à visão que recebi do Senhor.
                    </p>
                  </blockquote>
                </div>

                <div className="ml-5">
                  <p className="my-4">
                    Quem não lembra a visão da Cristo Liberta que Deus me
                    revelou?
                  </p>
                  <p className="mb-4">
                    Em sonho, vinham as ovelhas comendo a grama verde e bem
                    viçosa em um campo, mas, quando chegavam perto de mim
                    estavam todas com os lábios machucados e cheios de sangue.
                  </p>
                  <p className="mb-4">
                    Quando as vi, gritei com toda a força dos meus pulmões: "Não
                    comam, tem vidros"
                  </p>
                  <p className="mb-4">
                    A Pastora Lourdes estava assustada pelos gritos, pois eu
                    estava sentado na cama e era uma hora da madrugada. Contei a
                    ela o sonho porque sabia que Deus queria me falar algo muito
                    importante, que eu não entendia.
                  </p>
                  <p className="mb-4">Oramos juntos e voltamos a dormir.</p>
                  <p className="mb-4">
                    Em sonho, voltei naquele gramado e là vinham as ovelhas,
                    todas machucadas... Gritei de novo e uma voz me disse: "Tem
                    azeite? Passa nas feridas, tu és um pastor".
                  </p>
                  <p className="mb-4">
                    Tirei o frasco do bolso e passei nas feridas.
                  </p>
                  <p className="mb-4">
                    Elas subiam em mim mostrando as feridas, enquanto eu passava
                    óleo.
                  </p>
                  <p className="mb-4">
                    A voz voltou a falar: "Entendeu o que estás fazendo?
                  </p>
                  <p className="mb-4">
                    Este é o teu ministério: passar azeite nas ovelhas feridas.
                  </p>
                  <p className="mb-4">
                    Há muitas das minhas ovelhas feridas que precisam do teu
                    ministério...
                  </p>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    className="mt-8 border-l-4 border-[#FF6B00] pl-4"
                  >
                    <p className="text-xl text-[#FF6B00] font-semibold">
                      "Amar é a minha vida, abençoar é a minha mensagem".
                    </p>
                    <p className="text-right mt-4 italic">
                      (Apóstolo Alfredo Tiezzi)
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action - Redesigned with softer style */}
      <section className="py-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div
            className={`rounded-3xl py-12 px-8 text-center relative overflow-hidden ${
              isDark ? "bg-[#141E3C]/50" : "bg-white/80"
            } shadow-lg`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B00]/5 via-transparent to-[#FF6B00]/5"></div>

            <div className="relative z-10">
              <h2
                className={`text-4xl font-bold mb-6 ${
                  isDark ? "text-white" : "text-gray-800"
                }`}
              >
                Venha nos <span className="text-[#FF6B00]">Visitar</span>
              </h2>

              <p
                className={`text-xl mb-10 max-w-xl mx-auto ${
                  isDark ? "text-gray-300" : "text-gray-600"
                }`}
              >
                Junte-se a nós em nossos cultos e atividades. Todos são
                bem-vindos na casa do Senhor!
              </p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-[#FF6B00] to-[#FF8533] text-white rounded-xl font-medium shadow-lg"
              >
                Entre em Contato
              </motion.button>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default About;
