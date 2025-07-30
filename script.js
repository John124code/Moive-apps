const API_KEY = '4176c9e03582a720c587f104ad3b113e'; // Your TMDb API key
const BASE_URL = 'https://api.themoviedb.org/3';
const IMG_URL = 'https://image.tmdb.org/t/p/w500';

const moviesContainer = document.getElementById('moviesContainer');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const loading = document.getElementById('loading');

// Sample movies data (fallback if API key not provided)
const sampleMovies = [
    {
        id: 1,
        title: "The Shawshank Redemption",
        poster_path: "/sample1.jpg",
        vote_average: 9.3,
        overview: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency."
    },
    {
        id: 2,
        title: "The Godfather",
        poster_path: "/sample2.jpg",
        vote_average: 9.2,
        overview: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son."
    },
    {
        id: 3,
        title: "The Dark Knight",
        poster_path: "/sample3.jpg",
        vote_average: 9.0,
        overview: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests."
    }
];

async function fetchMovies(query = '') {
    loading.style.display = 'block';
    moviesContainer.innerHTML = '';
    
    try {
        let url;
        if (query) {
            url = `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`;
        } else {
            url = `${BASE_URL}/movie/popular?api_key=${API_KEY}`;
        }
        
        if (API_KEY === 'YOUR_API_KEY_HERE') {
            // Use sample data if API key not provided
            displayMovies(sampleMovies);
            return;
        }
        
        const response = await fetch(url);
        const data = await response.json();
        
        if (data.results) {
            displayMovies(data.results);
        } else {
            displayMovies([]);
        }
    } catch (error) {
        console.error('Error fetching movies:', error);
        displayMovies(sampleMovies); // Fallback to sample data
    } finally {
        loading.style.display = 'none';
    }
}

function displayMovies(movies) {
    if (movies.length === 0) {
        moviesContainer.innerHTML = '<p style="color: white; text-align: center; grid-column: 1/-1;">No movies found.</p>';
        return;
    }
    
    moviesContainer.innerHTML = movies.map(movie => `
        <div class="movie-card" onclick="showMovieDetails(${movie.id})">
            <img src="${movie.poster_path ? IMG_URL + movie.poster_path : 'https://via.placeholder.com/500x750?text=No+Image'}" 
                 alt="${movie.title}" 
                 class="movie-poster"
                 onerror="this.src='https://via.placeholder.com/500x750?text=No+Image'">
            <div class="movie-info">
                <h3 class="movie-title">${movie.title}</h3>
                <div class="movie-rating">
                    <span class="rating-star">⭐</span>
                    <span class="rating-value">${movie.vote_average ? movie.vote_average.toFixed(1) : 'N/A'}</span>
                </div>
                <p class="movie-overview">${movie.overview || 'No overview available.'}</p>
            </div>
        </div>
    `).join('');
}

async function getMovieTrailer(movieId) {
    try {
        const response = await fetch(`${BASE_URL}/movie/${movieId}/videos?api_key=${API_KEY}`);
        const data = await response.json();
        const trailer = data.results.find(video => video.type === 'Trailer' && video.site === 'YouTube');
        
        if (trailer) {
            showTrailerModal(trailer.key);
        } else {
            alert('No trailer available for this movie.');
        }
    } catch (error) {
        console.error('Error fetching trailer:', error);
        alert('Error loading trailer. Please try again.');
    }
}

function showTrailerModal(videoKey) {
    const trailerModal = document.getElementById('trailerModal');
    const trailerVideo = document.getElementById('trailerVideo');
    
    trailerVideo.src = `https://www.youtube.com/embed/${videoKey}?autoplay=1`;
    trailerModal.style.display = 'block';
}

function closeTrailerModal() {
    const trailerModal = document.getElementById('trailerModal');
    const trailerVideo = document.getElementById('trailerVideo');
    
    trailerVideo.src = '';
    trailerModal.style.display = 'none';
}

function showMovieDetails(movieId) {
    getMovieTrailer(movieId);
}

// Event listeners
searchBtn.addEventListener('click', () => {
    const query = searchInput.value.trim();
    fetchMovies(query);
});

searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        const query = searchInput.value.trim();
        fetchMovies(query);
    }
});

// Load popular movies on page load
fetchMovies();

// Add event listeners for auth buttons
const loginBtn = document.getElementById('loginBtn');
const signupBtn = document.getElementById('signupBtn');

// Remove these duplicate event listeners that show alerts
// loginBtn.addEventListener('click', () => {
//     alert('Login functionality coming soon!');
// });

// signupBtn.addEventListener('click', () => {
//     alert('Sign up functionality coming soon!');
// });

// Modal functionality
const loginModal = document.getElementById('loginModal');
const signupModal = document.getElementById('signupModal');
const switchToSignup = document.getElementById('switchToSignup');
const switchToLogin = document.getElementById('switchToLogin');
const closeBtns = document.querySelectorAll('.close');

// Open modals
loginBtn.addEventListener('click', () => {
    loginModal.style.display = 'block';
});

signupBtn.addEventListener('click', () => {
    signupModal.style.display = 'block';
});

// Switch between modals
switchToSignup.addEventListener('click', (e) => {
    e.preventDefault();
    loginModal.style.display = 'none';
    signupModal.style.display = 'block';
});

switchToLogin.addEventListener('click', (e) => {
    e.preventDefault();
    signupModal.style.display = 'none';
    loginModal.style.display = 'block';
});

// Close modals
closeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const modalId = btn.getAttribute('data-modal');
        if (modalId === 'trailerModal') {
            closeTrailerModal();
        } else {
            document.getElementById(modalId).style.display = 'none';
        }
    });
});

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === loginModal) {
        loginModal.style.display = 'none';
    }
    if (e.target === signupModal) {
        signupModal.style.display = 'none';
    }
    if (e.target === trailerModal) {
        closeTrailerModal();
    }
});

// Handle form submissions
document.getElementById('loginForm').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Login successful! (Demo)');
    loginModal.style.display = 'none';
});

document.getElementById('signupForm').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Account created successfully! (Demo)');
    signupModal.style.display = 'none';
});

// Theme toggle functionality
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.querySelector('.theme-icon');
const body = document.body;

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.classList.add(savedTheme);
    updateThemeIcon();
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-theme');
    
    // Save theme preference
    if (body.classList.contains('light-theme')) {
        localStorage.setItem('theme', 'light-theme');
    } else {
        localStorage.removeItem('theme');
    }
    
    updateThemeIcon();
});

function updateThemeIcon() {
    if (body.classList.contains('light-theme')) {
        themeIcon.textContent = '☀️';
        themeToggle.title = 'Switch to Dark Theme';
    } else {
        themeIcon.textContent = '🌙';
        themeToggle.title = 'Switch to Light Theme';
    }
}

