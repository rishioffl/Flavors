import React, { useState, useEffect } from 'react';
import './AdminDashboard.css';
import NavBar from './NavBar'; // Import the new NavBar component
import { useNavigate } from 'react-router-dom';
import WelcomeCard from './WelcomeCard';

const AdminDashboard = () => {
  const [houses, setHouses] = useState(0);
  const [owners, setOwners] = useState(0);
  const [users, setUsers] = useState(0); // Initialize users count to 0
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate the ticker effect
    let housesCount = 0;
    let ownersCount = 0;
    let usersCount = 0;

    const housesInterval = setInterval(() => {
      if (housesCount < 250) {
        housesCount += 1;
        setHouses(housesCount);
      } else {
        clearInterval(housesInterval);
      }
    }, 10); // Adjust speed by changing the interval

    const ownersInterval = setInterval(() => {
      if (ownersCount < 50) {
        ownersCount += 1;
        setOwners(ownersCount);
      } else {
        clearInterval(ownersInterval);
      }
    }, 30); // Adjust speed by changing the interval

    const usersInterval = setInterval(() => {
      if (usersCount < 200) {
        usersCount += 1;
        setUsers(usersCount);
      } else {
        clearInterval(usersInterval);
      }
    }, 20); // Adjust speed by changing the interval

    return () => {
      clearInterval(housesInterval);
      clearInterval(ownersInterval);
      clearInterval(usersInterval);
    };
  }, []);

  return (
    <div className='admin-body'>
      <div className="admin-dashboard-container">
        <NavBar /> {/* Replace the old sidebar with NavBar */}
        <main className="admin-main-content">
          <h1>Admin Dashboard</h1>
          <div className="admin-stats-container">
            <div className="admin-stats-card">
              <h3>{users}+ Users</h3>
              <p>Total number of registered users.</p>
            </div>
            <div className="admin-stats-card">
              <h3>{houses}+ Recipes</h3>
              <p>Total number of available Recipes.</p>
            </div>
            <div className="admin-stats-card">
              <h3>{owners}+ Cuisines</h3>
              <p>Total number of available cuisines.</p>
            </div>
          </div>
          <div className="admin-recent-activities">
            <h3>Recent Activities</h3>
            <div className="admin-activity-card">
              <i className="fas fa-user-plus"></i>
              <p>New Recipe added: Thai Red Curry </p>
            </div>
            <div className="admin-activity-card">
              <i className="fas fa-home"></i>
              <p>New Cuisine Added: Thai</p>
            </div>
            <div className="admin-activity-card">
              <i className="fas fa-user-plus"></i>
              <p>New User registration: Rishi Raghavendran</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
