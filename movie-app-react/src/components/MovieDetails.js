import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Footer from './Footer';
import '../styles/MovieDetails.css';

const API_KEY = '4176c9e03582a720c587f104ad3b113e';
const BASE_URL = 'https://api.themoviedb.org/3';
const IMG_URL = 'https://image.tmdb.org/t/p/w500';

// Sample movie details (fallback)
const sampleMovieDetails = {
    1: {
        id: 1,
        title: "The Shawshank Redemption",
        poster_path: "/sample1.jpg",
        vote_average: 9.3,
        overview: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency. Set in the 1940s, this timeless story of hope and friendship follows Andy Dufresne and Ellis Boyd 'Red' Redding as they navigate life in Shawshank State Penitentiary.",
        trailer: "https://www.youtube.com/embed/6hB3S9bIaco",
        release_date: "1994-09-23",
        runtime: 142,
        genres: [{ name: "Drama" }, { name: "Crime" }]
    },
    2: {
        id: 2,
        title: "The Godfather",
        poster_path: "/sample2.jpg",
        vote_average: 9.2,
        overview: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
        description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son. A masterpiece of cinema that explores themes of family, power, and corruption in the Italian-American crime family.",
        trailer: "https://www.youtube.com/embed/sY1S34973zA",
        release_date: "1972-03-24",
        runtime: 175,
        genres: [{ name: "Drama" }, { name: "Crime" }]
    },
    3: {
        id: 3,
        title: "The Dark Knight",
        poster_path: "/sample3.jpg",
        vote_average: 9.0,
        overview: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests.",
        description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice. Heath Ledger's iconic performance as the Joker makes this a must-watch.",
        trailer: "https://www.youtube.com/embed/EXeTwQWrcwY",
        release_date: "2008-07-18",
        runtime: 152,
        genres: [{ name: "Action" }, { name: "Crime" }, { name: "Drama" }]
    }
};

const MovieDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);
    const [trailerKey, setTrailerKey] = useState('');

    useEffect(() => {
        fetchMovieDetails();
        fetchMovieTrailer();
    }, [id]);

    const fetchMovieDetails = async () => {
        setLoading(true);
        
        try {
            // Check if we're using sample data
            if (API_KEY === 'YOUR_API_KEY_HERE' || sampleMovieDetails[id]) {
                const sampleMovie = sampleMovieDetails[id];
                if (sampleMovie) {
                    setMovie(sampleMovie);
                } else {
                    // If movie not found in sample data, navigate back
                    navigate('/');
                    return;
                }
                setLoading(false);
                return;
            }

            const response = await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);
            const data = await response.json();
            
            if (data.id) {
                // Add description and trailer info
                const movieWithDetails = {
                    ...data,
                    description: data.overview || 'No description available.',
                    trailer: '' // Will be set by fetchMovieTrailer
                };
                setMovie(movieWithDetails);
            } else {
                navigate('/');
            }
        } catch (error) {
            console.error('Error fetching movie details:', error);
            // Try to use sample data as fallback
            const sampleMovie = sampleMovieDetails[id];
            if (sampleMovie) {
                setMovie(sampleMovie);
            } else {
                navigate('/');
            }
        } finally {
            setLoading(false);
        }
    };

    const fetchMovieTrailer = async () => {
        try {
            // Use sample trailer for sample movies
            if (API_KEY === 'YOUR_API_KEY_HERE' || sampleMovieDetails[id]) {
                const sampleMovie = sampleMovieDetails[id];
                if (sampleMovie && sampleMovie.trailer) {
                    setTrailerKey(sampleMovie.trailer);
                }
                return;
            }

            const response = await fetch(`${BASE_URL}/movie/${id}/videos?api_key=${API_KEY}`);
            const data = await response.json();
            const trailer = data.results.find(video => video.type === 'Trailer' && video.site === 'YouTube');
            
            if (trailer) {
                setTrailerKey(`https://www.youtube.com/embed/${trailer.key}`);
            }
        } catch (error) {
            console.error('Error fetching trailer:', error);
        }
    };

    const handleBackToHome = () => {
        navigate('/');
    };

    if (loading) {
        return (
            <div className="movie-details-loading">
                <div className="loading">Loading movie details...</div>
            </div>
        );
    }

    if (!movie) {
        return (
            <div className="movie-details-error">
                <h2>Movie not found</h2>
                <button onClick={handleBackToHome} className="back-button">
                    Back to Home
                </button>
            </div>
        );
    }

    return (
        <div className="movie-details">
            <div className="movie-details-container">
                <button onClick={handleBackToHome} className="back-button">
                    ← Back to Home
                </button>
                
                <div className="movie-details-content">
                    <div className="movie-poster-section">
                        <img 
                            src={movie.poster_path ? IMG_URL + movie.poster_path : 'https://via.placeholder.com/500x750?text=No+Image'} 
                            alt={movie.title}
                            className="movie-details-poster"
                            onError={(e) => {
                                e.target.src = 'https://via.placeholder.com/500x750?text=No+Image';
                            }}
                        />
                    </div>
                    
                    <div className="movie-info-section">
                        <h1 className="movie-details-title">{movie.title}</h1>
                        
                        <div className="movie-meta">
                            <div className="movie-rating">
                                <span className="rating-star">⭐</span>
                                <span className="rating-value">
                                    {movie.vote_average ? movie.vote_average.toFixed(1) : 'N/A'}
                                </span>
                            </div>
                            
                            {movie.release_date && (
                                <div className="movie-year">
                                    {new Date(movie.release_date).getFullYear()}
                                </div>
                            )}
                            
                            {movie.runtime && (
                                <div className="movie-runtime">
                                    {movie.runtime} min
                                </div>
                            )}
                        </div>

                        {movie.genres && movie.genres.length > 0 && (
                            <div className="movie-genres">
                                {movie.genres.map((genre, index) => (
                                    <span key={genre.id || index} className="genre-tag">
                                        {genre.name}
                                    </span>
                                ))}
                            </div>
                        )}
                        
                        <div className="movie-description">
                            <h3>Description</h3>
                            <p>{movie.description || movie.overview}</p>
                        </div>
                        
                        {trailerKey && (
                            <div className="movie-trailer">
                                <h3>Trailer</h3>
                                <div className="trailer-container">
                                    <iframe
                                        src={trailerKey}
                                        title={`${movie.title} Trailer`}
                                        frameBorder="0"
                                        allowFullScreen
                                        className="trailer-iframe"
                                    ></iframe>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default MovieDetails;
