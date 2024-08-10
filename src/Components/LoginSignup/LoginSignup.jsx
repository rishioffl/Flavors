import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaMeta } from "react-icons/fa6";
import axios from 'axios';
import './LoginSignup.css';

const LoginSignup = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const [error, setError] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {
        const signUpButton = document.getElementById('signUp');
        const signInButton = document.getElementById('signIn');
        const container = document.getElementById('container');

        if (signUpButton && signInButton && container) {
            signUpButton.addEventListener('click', () => {
                container.classList.add("right-panel-active");
            });

            signInButton.addEventListener('click', () => {
                container.classList.remove("right-panel-active");
            });

            // Cleanup event listeners on unmount
            return () => {
                signUpButton.removeEventListener('click', () => {
                    container.classList.add("right-panel-active");
                });
                signInButton.removeEventListener('click', () => {
                    container.classList.remove("right-panel-active");
                });
            };
        }
    }, []);

    const handleSignUp = async (e) => {
        e.preventDefault();
        if (!username || !email || !password || !mobileNumber) {
            alert("All fields are required");
            return;
        }
        try {
            const response = await axios.post('http://localhost:8080/api/flavors/create', {
                username,
                emailId: email,
                password,
                mobileNumber,
            });
            alert('User registered successfully!');
            setError(null);
            // Optionally redirect to login page
            // navigate('/login');
        } catch (error) {
            console.error("There was an error registering the user!", error);
            alert('Error registering user');
        }
    };

    const handleSignIn = async (e) => {
        e.preventDefault();
        if (!loginEmail || !loginPassword) {
            alert("Email and password are required");
            return;
        }
        try {
            const response = await axios.post('http://localhost:8080/api/flavors/login', {
                emailId: loginEmail,
                password: loginPassword,
            });
            alert('Login successful!');
            setError(null);
            navigate('/home'); // Navigate to the home page after successful login
        } catch (error) {
            console.error("There was an error logging in!", error);
            alert('Error logging in');
        }
    };

    return (
        <div className="backgroundimage">
            <div>
                <h2 className="title">FLAVÖRS</h2>
                <div className="container" id="container">
                    <div className="container sign-up-container">
                        <form className='lsform' onSubmit={handleSignUp}>
                            <h1 className="loginpagetextcreate">Create Account</h1>
                            <div className="social-container">
                                <FcGoogle className="socialicon"/>
                                <FaFacebook className="socialicon"/>
                                <FaMeta className="socialicon"/>
                            </div>
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
                                type="text"
                                placeholder="Mobile Number"
                                value={mobileNumber}
                                onChange={(e) => setMobileNumber(e.target.value)}
                            />
                            {error && <p className="error-message">{error}</p>}
                            <button className="hpbutton" type="submit">Sign Up</button>
                        </form>
                    </div>
                    <div className="form-container sign-in-container">
                        <form className='lsform' onSubmit={handleSignIn}>
                            <h1 className="loginpagetext">Sign in</h1>
                            <div className="social-container">
                                <FcGoogle className="socialicon"/>
                                <FaFacebook className="socialicon"/>
                                <FaMeta className="socialicon"/>
                            </div>
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
                            <a href="#">Forgot your password?</a>
                            {error && <p className="error-message">{error}</p>}
                            <button className="hpbutton" type="submit">Sign In</button>
                            <br></br>
                            <button className="hpbuttonadmin" onClick={() => navigate('/admin')}>Admin Login</button>
                        </form>
                    </div>
                    <div className="overlay-container">
                        <div className="overlay">
                            <div className="overlay-panel overlay-left">
                                <h1 className="loginpagetext">Welcome Back!</h1>
                                <p className="gradienttext">To keep connected with us please login with your personal info</p>
                                <button className="hp-ghost" id="signIn">Sign In</button>
                            </div>
                            <div className="overlay-panel overlay-right">
                                <h1 className="loginpagetext">Hello, Friend!</h1>
                                <p className="gradienttext">Enter your personal details and start journey with us</p>
                                <button className="hp-ghost" id="signUp">Sign Up</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginSignup;
