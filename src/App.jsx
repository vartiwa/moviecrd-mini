import './styles/App.css';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import About from './pages/About';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import { MovieProvider } from './contexts/movieContext';

function App() {
  return (
    <MovieProvider>
      <div>
        <NavBar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </div>
    </MovieProvider>
  );
}

export default App;

