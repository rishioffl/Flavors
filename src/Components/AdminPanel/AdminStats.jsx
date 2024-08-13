import React, { useState, useEffect } from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './AdminStats.css';
import NavBar from './NavBar';

const mockCuisinesAdded = [
  { name: 'Jan', Added: 9, Requested: 10 },
  { name: 'Feb', Added: 10, Requested: 8 },
  { name: 'Mar', Added: 9, Requested: 10 },
  { name: 'Apr', Added: 7, Requested: 13 },
  { name: 'May', Added: 8, Requested: 9 },
  { name: 'Jun', Added: 8, Requested: 8 },
  { name: 'Jul', Added: 5, Requested: 5 },
  { name: 'Aug', Added: 3, Requested: 4 },
  { name: 'Sep', Added: 6, Requested: 7 },
  { name: 'Oct', Added: 4, Requested: 3 },
  { name: 'Nov', Added: 3, Requested: 8 },
  { name: 'Dec', Added: 7, Requested: 4 },
];

const mockRecipesAdded = [
  { name: 'Jan', Added: 9, Requested: 3 },
  { name: 'Feb', Added: 2, Requested: 4 },
  { name: 'Mar', Added: 3, Requested: 5 },
  { name: 'Apr', Added: 4, Requested: 7 },
  { name: 'May', Added: 5, Requested: 5 },
  { name: 'Jun', Added: 7, Requested: 8 },
  { name: 'Jul', Added: 8, Requested: 6 },
  { name: 'Aug', Added: 9, Requested: 3 },
  { name: 'Sep', Added: 7, Requested: 2 },
  { name: 'Oct', Added: 2, Requested: 9 },
  { name: 'Nov', Added: 3, Requested: 1 },
  { name: 'Dec', Added: 4, Requested: 6 },
];

function AdminStats() {
  const [cuisinesData, setCuisinesData] = useState([]);
  const [recipesData, setRecipesData] = useState([]);

  useEffect(() => {
    // Simulate fetching data from an API
    setCuisinesData(mockCuisinesAdded);
    setRecipesData(mockRecipesAdded);
  }, []);

  return (
    <div className="adminstats-container">
      <NavBar />
      <div className="adminstats-content">
        <div className="adminstats-section">
          <h2>Cuisines Added</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={cuisinesData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="Added" fill="Green" />
              <Bar dataKey="Requested" fill="red" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="adminstats-section">
          <h2>Recipes Added</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={recipesData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="Added" stroke="Green" />
              <Line type="monotone" dataKey="Requested" stroke="red" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default AdminStats;
