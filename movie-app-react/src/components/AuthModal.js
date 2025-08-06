import React, { useState } from 'react';
import '../styles/AuthModal.css';

const AuthModal = ({ isOpen, onClose, type, onSwitchToSignup, onSwitchToLogin }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        fullName: '',
        confirmPassword: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (type === 'login') {
            alert('Login successful! (Demo)');
        } else {
            alert('Account created successfully! (Demo)');
        }
        setFormData({
            email: '',
            password: '',
            fullName: '',
            confirmPassword: ''
        });
        onClose();
    };

    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    if (!isOpen) return null;

    return (
        <div className="modal-backdrop" onClick={handleBackdropClick}>
            <div className="modal-content">
                <button className="close-button" onClick={onClose}>
                    &times;
                </button>
                
                <h2>{type === 'login' ? 'Login' : 'Sign Up'}</h2>
                
                <form onSubmit={handleSubmit} className="auth-form">
                    {type === 'signup' && (
                        <input
                            type="text"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleInputChange}
                            placeholder="Full Name"
                            required
                        />
                    )}
                    
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Email"
                        required
                    />
                    
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        placeholder="Password"
                        required
                    />
                    
                    {type === 'signup' && (
                        <input
                            type="password"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleInputChange}
                            placeholder="Confirm Password"
                            required
                        />
                    )}
                    
                    <button type="submit" className="submit-button">
                        {type === 'login' ? 'Login' : 'Sign Up'}
                    </button>
                </form>
                
                <p className="switch-auth">
                    {type === 'login' ? (
                        <>
                            Don't have an account?{' '}
                            <button 
                                type="button" 
                                className="switch-button" 
                                onClick={onSwitchToSignup}
                            >
                                Sign up
                            </button>
                        </>
                    ) : (
                        <>
                            Already have an account?{' '}
                            <button 
                                type="button" 
                                className="switch-button" 
                                onClick={onSwitchToLogin}
                            >
                                Login
                            </button>
                        </>
                    )}
                </p>
            </div>
        </div>
    );
};

export default AuthModal;
