import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Bg from '../../../Assets/RequestRecipe/RequestBg.jpg';
import axios from 'axios';
import './RecipeRequest.css';

const RecipeRequest = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    contactNumber: '',
    email: '',
    city: '',
    recipeTitle: '',
    recipeDescription: '',
    coverPhotoSuggestion: '',
    foodLabelSuggestion: '',
    cuisine: '',
    cuisineExistence: '',
    experience: '',
    signupForNotices: false,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (event) => {
    const { name, files } = event.target;
    setFormData({
      ...formData,
      [name]: files[0].name,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post('http://localhost:8080/api/requestdata/save', formData);
      setSubmitted(true);
      alert('Recipe request submitted successfully! Our team will get back to you shortly.');
    } catch (error) {
      console.error("There was an error submitting the request!", error);
      alert('There was an error submitting your request.');
    }
  };

  return (
      <div className="recipe-request-back" style={{
        background: `linear-gradient(
          rgba(0, 0, 0, 0.4), 
          rgba(0, 0, 0, 0.4)
        ), url(${Bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}>
        <div className="recipe-request-container">
          <h1>REQUEST RECIPE</h1>
          <p>You can now request recipes and our team will take the efforts to add them into the menu.</p>
          {submitted ? (
            <div className="recipe-request-submission-message">
              <p>Thank you for submitting your outfit details! We will get back to you shortly.</p>
            </div>
          ) : (
            <form className="recipe-request-form" onSubmit={handleSubmit}>
              <div className="recipe-request-form-row">
                <div className="recipe-request-form-group recipe-request-full-name">
                  <label>Username</label>
                  <input type="text" name="username" value={formData.username} onChange={handleChange} required />
                </div>
                <div className="recipe-request-form-group recipe-request-contact-number">
                  <label>Contact Number</label>
                  <input type="text" name="contactNumber" value={formData.contactNumber} onChange={handleChange} required />
                </div>
              </div>
              <div className="recipe-request-form-row">
                <div className="recipe-request-form-group recipe-request-email">
                  <label>Email</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div className="recipe-request-form-group recipe-request-city">
                  <label>City</label>
                  <input type="text" name="city" value={formData.city} onChange={handleChange} required />
                </div>
              </div>
              <div className="recipe-request-form-row">
                <div className="recipe-request-form-group recipe-request-designer">
                  <label>Recipe Title</label>
                  <input type="text" name="recipeTitle" value={formData.recipeTitle} onChange={handleChange} required />
                </div>
                <div className="recipe-request-form-group recipe-request-description">
                  <label>Recipe Description</label>
                  <input type="text" name="recipeDescription" value={formData.recipeDescription} onChange={handleChange} required />
                </div>
              </div>
              <div className="recipe-request-form-row">
                <div className="recipe-request-form-group recipe-request-upload-front">
                  <label>Cover Photo Suggestion</label>
                  <input type="file" name="coverPhotoSuggestion" className="recipe-request-file-input" onChange={handleFileChange} />
                </div>
                <div className="recipe-request-form-group recipe-request-upload-label">
                  <label>Food Label Suggestion</label>
                  <input type="file" name="foodLabelSuggestion" className="recipe-request-file-input" onChange={handleFileChange} />
                </div>
              </div>
              <div className="recipe-request-form-row">
                <div className="recipe-request-form-group recipe-request-original-price">
                  <label>Which Cuisine does it fall into?</label>
                  <input type="text" name="cuisine" value={formData.cuisine} onChange={handleChange} required />
                </div>
                <div className="recipe-request-form-group recipe-request-purchase-year">
                  <label>Does that cuisine exist with us currently?</label>
                  <input type="text" name="cuisineExistence" value={formData.cuisineExistence} onChange={handleChange} required />
                </div>
              </div>
              <div className="recipe-request-form-group recipe-request-offer-price">
                <label>How was the experience in requesting recipe?</label>
                <input type="text" name="experience" value={formData.experience} onChange={handleChange} required />
              </div>
              <div className="recipe-request-form-group recipe-request-rent">
                <label>Would you like to signup for new recipe notices?</label>
                <br></br>
                <div className="recipe-request-radio-group">
                  <Button variant="contained" color="success" onClick={() => setFormData({ ...formData, signupForNotices: true })}>
                    Yes
                  </Button>
                  <div> <br></br></div>
                  <Button variant="contained" color="error" onClick={() => setFormData({ ...formData, signupForNotices: false })}>
                    No
                  </Button>
                </div>
              </div>
              <button type="submit" className="recipe-request-submit-button">Submit</button>
            </form>
          )}
        </div>
      </div>
  );
};

export default RecipeRequest;
