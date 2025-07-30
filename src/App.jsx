import { useState } from 'react';
import './styles/App.css';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';

const API_KEY = '555f75386b25196965cc81153e84ba1c';
const BASE_URL = 'https://api.themoviedb.org/3';

export const getPopularMovies = async () => {
    const url = `${BASE_URL}/movie/popular?api_key=${API_KEY}`;
    const response = await fetch(url);
    const data = await response.json();
    return data.results;
}

export const searchMovies = async (query) => {
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
    const data = await response.json();
    return data.results;  
}

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    
   <main className="main-content">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/favorites" element={<Favorites />} />
    </Routes>
   </main>
   </div>
  );
}

export default App;

