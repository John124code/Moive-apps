import React from 'react';
import '../styles/MovieCard.css';

const IMG_URL = 'https://image.tmdb.org/t/p/w500';

const MovieCard = ({ movie, onClick }) => {
    return (
        <div className="movie-card" onClick={onClick}>
            <img 
                src={movie.poster_path ? IMG_URL + movie.poster_path : 'https://via.placeholder.com/500x750?text=No+Image'} 
                alt={movie.title} 
                className="movie-poster"
                onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/500x750?text=No+Image';
                }}
            />
            <div className="movie-info">
                <h3 className="movie-title">{movie.title}</h3>
                <div className="movie-rating">
                    <span className="rating-star">⭐</span>
                    <span className="rating-value">
                        {movie.vote_average ? movie.vote_average.toFixed(1) : 'N/A'}
                    </span>
                </div>
                <p className="movie-overview">
                    {movie.overview || 'No overview available.'}
                </p>
            </div>
        </div>
    );
};

export default MovieCard;
