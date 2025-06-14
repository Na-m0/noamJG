import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import { TransitionProvider } from './pages/Transition/Transition';

import NavBar from './pages/NavBar/NavBar';
import FirstPage from './pages/FirstPage/FirstPage';

import Home from './pages/Home/Home';
import A_propos from './pages/About/A_propos';
import Portfolio from './pages/Portfolio/Portfolio';
import Projects from './pages/Projects/Projets';
import Contact from './pages/Contact';
import DetailProjet from './components/Projet/DetailProjet';
import Footer from './pages/Footer/Footer';
import ScrollToTop from './pages/Transition/ScrollToTop';
import StageAsporta from './components/Stage/StageAsporta';
import SaeYoleau from './components/Sae/SaeS6';

function App() {
  const location = useLocation();
  const showNavBar = location.pathname !== '/';

  return (
    <TransitionProvider>
      {showNavBar && <NavBar />}
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<A_propos />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<DetailProjet />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/stage-asporta" element={<StageAsporta />} />
        <Route path="/sae-yoleau" element={<SaeYoleau />} />
      </Routes>
      {showNavBar && <Footer/>}
    </TransitionProvider>
  );
}

export default App;
