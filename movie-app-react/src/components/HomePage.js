import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import MovieCard from './MovieCard';
import Header from './Header';
import AuthModal from './AuthModal';
import Footer from './Footer';
import '../styles/HomePage.css';

const API_KEY = '4176c9e03582a720c587f104ad3b113e';
const BASE_URL = 'https://api.themoviedb.org/3';

// Sample movies data (fallback if API key not provided)
const sampleMovies = [
    {
        id: 1,
        title: "The Shawshank Redemption",
        poster_path: "/sample1.jpg",
        vote_average: 9.3,
        overview: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency. Set in the 1940s, this timeless story of hope and friendship follows Andy Dufresne and Ellis Boyd 'Red' Redding.",
        trailer: "https://www.youtube.com/embed/6hB3S9bIaco"
    },
    {
        id: 2,
        title: "The Godfather",
        poster_path: "/sample2.jpg",
        vote_average: 9.2,
        overview: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
        description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son. A masterpiece of cinema that explores themes of family, power, and corruption.",
        trailer: "https://www.youtube.com/embed/sY1S34973zA"
    },
    {
        id: 3,
        title: "The Dark Knight",
        poster_path: "/sample3.jpg",
        vote_average: 9.0,
        overview: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests.",
        description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
        trailer: "https://www.youtube.com/embed/EXeTwQWrcwY"
    }
];

const HomePage = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [showSignupModal, setShowSignupModal] = useState(false);
    const [darkTheme, setDarkTheme] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        fetchMovies();
        // Check for saved theme preference
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'light') {
            setDarkTheme(false);
        }
    }, []);

    const fetchMovies = async (query = '') => {
        setLoading(true);
        
        try {
            let url;
            if (query) {
                url = `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`;
            } else {
                url = `${BASE_URL}/movie/popular?api_key=${API_KEY}`;
            }
            
            if (API_KEY === 'YOUR_API_KEY_HERE') {
                // Use sample data if API key not provided
                setMovies(sampleMovies);
                setLoading(false);
                return;
            }
            
            const response = await fetch(url);
            const data = await response.json();
            
            if (data.results) {
                // Add description and trailer to each movie
                const moviesWithDetails = data.results.map(movie => ({
                    ...movie,
                    description: movie.overview || 'No description available.',
                    trailer: `https://www.youtube.com/embed/dQw4w9WgXcQ` // Default trailer
                }));
                setMovies(moviesWithDetails);
            } else {
                setMovies([]);
            }
        } catch (error) {
            console.error('Error fetching movies:', error);
            setMovies(sampleMovies); // Fallback to sample data
        } finally {
            setLoading(false);
        }
    };

    const handleSearch = (e) => {
        e.preventDefault();
        fetchMovies(searchQuery);
    };

    const handleMovieClick = (movieId) => {
        navigate(`/movie/${movieId}`);
    };

    const toggleTheme = () => {
        setDarkTheme(!darkTheme);
        if (!darkTheme) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    };

    return (
        <div className={`home-page ${darkTheme ? 'dark-theme' : 'light-theme'}`}>
            <Header 
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                onSearch={handleSearch}
                onLoginClick={() => setShowLoginModal(true)}
                onSignupClick={() => setShowSignupModal(true)}
                darkTheme={darkTheme}
                onThemeToggle={toggleTheme}
            />

            <main className="main-content">
                {loading ? (
                    <div className="loading">Loading movies...</div>
                ) : (
                    <div className="movies-container">
                        {movies.length === 0 ? (
                            <p className="no-movies">No movies found.</p>
                        ) : (
                            movies.map(movie => (
                                <MovieCard 
                                    key={movie.id} 
                                    movie={movie} 
                                    onClick={() => handleMovieClick(movie.id)}
                                />
                            ))
                        )}
                    </div>
                )}
            </main>

            {/* Modals */}
            <AuthModal 
                isOpen={showLoginModal}
                onClose={() => setShowLoginModal(false)}
                type="login"
                onSwitchToSignup={() => {
                    setShowLoginModal(false);
                    setShowSignupModal(true);
                }}
            />

            <AuthModal 
                isOpen={showSignupModal}
                onClose={() => setShowSignupModal(false)}
                type="signup"
                onSwitchToLogin={() => {
                    setShowSignupModal(false);
                    setShowLoginModal(true);
                }}
            />

            <Footer />
        </div>
    );
};

export default HomePage;
