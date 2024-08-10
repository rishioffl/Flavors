import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import './Admin.css';

const LoginSignup = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        const signUpButton = document.getElementById('signUp');
        const signInButton = document.getElementById('signIn');
        const container = document.getElementById('container');

        const handleSignUpClick = () => {
            container.classList.add("admin-right-panel-active");
        };

        const handleSignInClick = () => {
            container.classList.remove("admin-right-panel-active");
        };

        if (signUpButton && signInButton && container) {
            signUpButton.addEventListener('click', handleSignUpClick);
            signInButton.addEventListener('click', handleSignInClick);
        }

        // Cleanup event listeners on unmount
        return () => {
            if (signUpButton) signUpButton.removeEventListener('click', handleSignUpClick);
            if (signInButton) signInButton.removeEventListener('click', handleSignInClick);
        };
    }, []);

    const handleSignUp = async (e) => {
        e.preventDefault();
        if (!username || !email || !password || !mobileNumber) {
            alert('All fields are required');
            return;
        }
        if (password.length < 6) {
            alert('Password must be at least 6 characters long');
            return;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            alert('Please enter a valid email');
            return;
        }
        try {
            const response = await axios.post('http://localhost:8080/api/admin/create', {
                username,
                email,
                password,
                mobileNumber,
            });
            alert('Admin registered successfully!');
        } catch (error) {
            console.error("There was an error registering the admin!", error);
            alert('Error registering admin');
        }
    };

    const handleSignIn = async (e) => {
        e.preventDefault();
        if (!loginEmail || !loginPassword) {
            alert('Email and password are required');
            return;
        }
        try {
            const response = await axios.post('http://localhost:8080/api/admin/login', {
                email: loginEmail,
                password: loginPassword,
            });
            alert('Login successful!');
            navigate('/admindashboard'); // Navigate to the admin home page after successful login
        } catch (error) {
            console.error("There was an error logging in!", error);
            alert('Error logging in');
        }
    };

    return (
        <div className="admin-backgroundimage">
            <div>
                <h2 className="admin-title">FLAVÖRS ADMINISTRATOR</h2>
                <div className="admin-container" id="container">
                    <div className="admin-form-container admin-sign-up-container">
                        <form className="admin-form" onSubmit={handleSignUp}>
                            <h1 className="loginpagetext">Register As Admin</h1>
                            <input
                                type="text"
                                placeholder="Username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <input
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <input
                                type="tel"
                                placeholder="Mobile Number"
                                value={mobileNumber}
                                onChange={(e) => setMobileNumber(e.target.value)}
                            />
                            <button className="admin-button" type="submit">Register As Admin</button>
                        </form>
                    </div>
                    <div className="admin-form-container admin-sign-in-container">
                        <form className="admin-form" onSubmit={handleSignIn}>
                            <h1 className="loginpagetext">Admin Portal</h1>
                            <input
                                type="email"
                                placeholder="Email"
                                value={loginEmail}
                                onChange={(e) => setLoginEmail(e.target.value)}
                            />
                            <input
                                type="password"
                                placeholder="Password"
                                value={loginPassword}
                                onChange={(e) => setLoginPassword(e.target.value)}
                            />
                            <button className="admin-button" type="submit">Enter Admin Portal</button>
                        </form>
                    </div>
                    <div className="admin-overlay-container">
                        <div className="admin-overlay">
                            <div className="admin-overlay-panel admin-overlay-left">
                                <h1 className="loginpagetext">Welcome Back Boss!</h1>
                                <p className="gradienttext">Ready to Manage Again?</p>
                                <button className="admin-ghost" id="signIn">Sign In</button>
                            </div>
                            <div className="admin-overlay-panel admin-overlay-right">
                                <h1 className="loginpagetext">Join Our Team!</h1>
                                <p className="gradienttext">Become an admin member and amplify your influence!</p>
                                <button className="admin-ghost" id="signUp">Register As Admin</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginSignup;
