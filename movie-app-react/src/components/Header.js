import React from 'react';
import '../styles/Header.css';

const Header = ({ 
    searchQuery, 
    setSearchQuery, 
    onSearch, 
    onLoginClick, 
    onSignupClick, 
    darkTheme, 
    onThemeToggle 
}) => {
    return (
        <header className="header">
            <nav className="navbar">
                <h1 className="app-title">🎬 Johnny's MovieApps</h1>
                <div className="nav-controls">
                    <button 
                        className="theme-toggle" 
                        onClick={onThemeToggle}
                        title={darkTheme ? "Switch to Light Theme" : "Switch to Dark Theme"}
                    >
                        <span className="theme-icon">
                            {darkTheme ? '🌙' : '☀️'}
                        </span>
                    </button>
                    <div className="auth-buttons">
                        <button className="auth-btn" onClick={onLoginClick}>
                            Login
                        </button>
                        <button className="auth-btn signup" onClick={onSignupClick}>
                            Sign Up
                        </button>
                    </div>
                </div>
            </nav>
            <div className="search-container">
                <form onSubmit={onSearch} className="search-form">
                    <input 
                        type="text" 
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search movies..."
                        className="search-input"
                    />
                    <button type="submit" className="search-btn">
                        Search
                    </button>
                </form>
            </div>
        </header>
    );
};

export default Header;
