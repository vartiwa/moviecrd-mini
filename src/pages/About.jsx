import '../styles/Favorites.css';

function About() {
  return (
    <div className="favorites" style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <div className="favorites-header">
        <h1>About This Project</h1>
        <p>Movie Search & Favorites App</p>
      </div>
      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <h2>Created by Varun Tiwari</h2>
        <p>This project allows you to search for movies, add favorites, and view your favorite list. Built with React, Vite, and TMDB API.</p>
      </div>
    </div>
  );
}

export default About;
