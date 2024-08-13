import React from 'react';
import './AboutUs.css';
import aboutus from '../../../Assets/AboutUs/abus.png';
// import aboutus2 from '../Assets/aboutus2.webp';

const AboutUsPage = () => {
  return (
    <div className='about-us-page-body'>
      <div className="about-us-container">
        <div className="about-us-section">
          <div className="about-us-left">
            <h1>ABOUT US</h1>
            <hr />
            <p className='aboutustext'>
            At FLAVÖRS, we believe that cooking should be a delightful and interactive experience. 
            Our platform is dedicated to bringing the joy of multi-cuisine recipes right to your kitchen. 
            Whether you're a seasoned chef or a culinary novice, FLAVÖRS is here to guide you through every step of your cooking journey.
            </p>
            <p className='aboutustext'>
              We soon realized that it was necessary to go beyond basics and create a platform that could do much more than just solve the immediate problems of space and peripherals.
              With globalization and communication taking a forefront, we are aware that society is becoming more disparate. Our response to this is - No city should be a stranger; no person should feel discriminated.
            </p>
          </div>
          <div className="about-us-right">
            <img src={aboutus} alt="About Us" />
          </div>
          <div className="clearfix"></div>
        </div>
        <div className="mission-section">
          <div className="about-us-left">
            {/* <img src={aboutus2} alt="Mission Statement" /> */}
          </div>
          <div className="about-us-right">
            <h1>MISSION STATEMENT</h1>
            <hr />
            <p className='aboutustext'>
            Our mission is to inspire and empower home cooks with detailed, easy-to-follow recipes from around the world. 
            We aim to make cooking an enjoyable and accessible activity for everyone, fostering a community where food enthusiasts can explore new flavors and share their culinary creations.
            </p>
            <p className='aboutustext'>
            FLAVÖRS was born out of a love for cooking and a desire to share that passion with the world. 
            Our team of dedicated food enthusiasts and tech experts came together to create a platform that not only showcases delicious recipes but also provides an engaging and educational experience for users.
            We are constantly working to improve and expand our offerings, and we welcome your feedback and suggestions. 
            Together, we can make FLAVÖRS the go-to destination for all things culinary.
            </p>
          </div>
          <div className="clearfix"></div>
        </div>
        <div className="mission-section">
          <div className="about-us-left">
            {/* <img src={aboutus2} alt="Mission Statement" /> */}
          </div>
          <div className="about-us-right">
            <h1>FLAVÖRS KEY FEATURES</h1>
            <hr />
            <p className='aboutustext'>
              <h3>Diverse Cuisine Selection</h3>
            Explore a wide range of cuisines from around the world, including Italian, Indian, Chinese, Mexican, and more.
            </p>
            <p className='aboutustext'>
              <h3>Step-by-Step Instructions</h3>
              Detailed, easy-to-follow instructions for each recipe to ensure a successful cooking experience.
            </p>
            <p className='aboutustext'>
              <h3>Aritificial Intelligence</h3>
              AI chatbot is present to solve all customer requires.
            </p>
            <p className='aboutustext'>
              <h3>Community Engagement</h3>
              Community features such as forums, discussion boards, and social sharing options to connect with other food enthusiasts.
            </p>
          </div>
          <div className="clearfix"></div>
        </div>
        <div className="team-section">
          <h1>ADMINISTRATOR<hr /></h1>
          <div className="team-card">
            <div className="team-circle-container">
              <h1 style={{ color: '#fff' }}>R</h1>
            </div>
            <h2>Rishi R</h2>
            <p className='aboutustext'>BTech - Information Technology</p>
          </div>

          <div className="team-card">
            <div className="team-circle-container">
              <h1 style={{ color: '#fff' }}>R</h1>
            </div>
            <h2>Rishwanth S</h2>
            <p className='aboutustext'>BTech - Information Technology</p>
          </div>

          <div className="team-card">
            <div className="team-circle-container">
              <h1 style={{ color: '#fff' }}>R</h1>
            </div>
            <h2>Ritam Bhukta B</h2>
            <p className='aboutustext'>BTech - Information Technology</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
