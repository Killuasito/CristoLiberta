import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Donations from "./pages/Donations";
import Events from "./pages/Events";
import SliderPage from "./pages/SliderPage";
import ScrollToTop from "./components/ScrollToTop";
import ScrollToTopOnMount from "./components/ScrollToTopOnMount";
import { ThemeProvider } from "./context/ThemeContext";

// Wrapper component to handle AnimatePresence with useLocation
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<About />} />
        <Route path="/slider" element={<SliderPage />} />
        <Route path="/doacoes" element={<Donations />} />
        <Route path="/eventos" element={<Events />} />
        <Route
          path="/ministerios"
          element={<div className="pt-20">Ministérios</div>}
        />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <ScrollToTopOnMount />
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">
            <AnimatedRoutes />
          </main>
          <Footer />
          <ScrollToTop />
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
