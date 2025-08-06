import React from 'react';
import '../styles/Footer.css';
import '../styles/Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-content">
                    <div className="footer-section">
                        <h3 className="footer-title">🎬 Johnny's MovieApps</h3>
                        <p className="footer-description">
                            Your ultimate destination for discovering amazing movies, 
                            exploring detailed information, and watching trailers.
                        </p>
                    </div>
                    
                    <div className="footer-section">
                        <h4>Features</h4>
                        <ul className="footer-links">
                            <li>Browse Popular Movies</li>
                            <li>Search Movies</li>
                            <li>Movie Details & Trailers</li>
                            <li>Dark/Light Theme</li>
                        </ul>
                    </div>
                    
                    <div className="footer-section">
                        <h4>Technology</h4>
                        <ul className="footer-links">
                            <li>React.js</li>
                            <li>React Router</li>
                            <li>TMDb API</li>
                            <li>Responsive Design</li>
                        </ul>
                    </div>
                    
                    <div className="footer-section">
                        <h4>Connect</h4>
                        <div className="social-links">
                            <a href="#" className="social-link" aria-label="GitHub">
                                <span>⭐</span> GitHub
                            </a>
                            <a href="#" className="social-link" aria-label="Portfolio">
                                <span>🌐</span> Portfolio
                            </a>
                            <a href="#" className="social-link" aria-label="Contact">
                                <span>📧</span> Contact
                            </a>
                        </div>
                    </div>
                </div>
                
                <div className="footer-bottom">
                    <div className="footer-bottom-content">
                        <p>&copy; {currentYear} Johnny's MovieApps. Built with ❤️ using React.js</p>
                        <p className="footer-credits">
                            Movie data provided by{' '}
                            <a 
                                href="https://www.themoviedb.org/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="tmdb-link"
                            >
                                The Movie Database (TMDb)
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
