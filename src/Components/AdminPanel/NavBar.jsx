import React from 'react';
import { Link } from 'react-router-dom';
import WelcomeCard from './WelcomeCard';
import RecipeCard from './RecipeCard';
import './NavBar.css';

import './AdminDashboard.css';
// const NavBar = () => {
  const NavBar = () => {
    const handleAddRecipe = (recipe) => {
      console.log('Adding recipe:', recipe);
      // Implement the logic to add the recipe (e.g., make an API call)
    }; 
  
    const handleRemoveRecipe = (recipeName) => {
      console.log('Removing recipe:', recipeName);
      // Implement the logic to remove the recipe (e.g., make an API call)
    };
  return (
    <div>
      {/* <WelcomeCard />
        <RecipeCard/> */}
    <div id="nav-bar">
      
      <input id="nav-toggle" type="checkbox" />
      
      <div id="nav-header">
        <a id="nav-title" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-codepen"></i>FLAVÖRS
        </a>
        <label htmlFor="nav-toggle">
          <span id="nav-toggle-burger"></span>
        </label>
        <hr />
      </div>

      <div id="nav-content">
        <div className="nav-button">
          <i className="fas fa-palette"></i>
          <Link to='/admindashboard'><span>Dashboard</span></Link>
        </div>
        <div className="nav-button">
          <i className="fas fa-images"></i>
          <Link to='/adminusers'><span>Admin Users</span></Link>
        </div>
        <div className="nav-button">
          <i className="fas fa-thumbtack"></i>
          <Link to='/adminstats'><span>Admin Stats</span></Link>
        </div>
        <hr />
        <div className="nav-button">
          <i className="fas fa-gem"></i>
          <Link to="/"><span>Logout</span></Link>
        </div>
        <div id="nav-content-highlight"></div>
      </div>

      <input id="nav-footer-toggle" type="checkbox" />
      
      <div id="nav-footer">
        <div id="nav-footer-heading">
          <div id="nav-footer-avatar">
            <img src="https://gravatar.com/avatar/4474ca42d303761c2901fa819c4f2547" alt="Avatar" />
          </div>
          <div id="nav-footer-titlebox">
            <a id="nav-footer-title" target="_blank" rel="noopener noreferrer">
              Rishi Raghavendran
            </a>
            {/* <span id="nav-footer-subtitle">Admin</span> */}
          </div>
          <label htmlFor="nav-footer-toggle">
            <i className="fas fa-caret-up"></i>
          </label>
        </div>
        <div id="nav-footer-content">
          BTech - Information Technology - 727822TUIT157
        </div>
      </div>
    </div>
    </div>
  );
};

export default NavBar;