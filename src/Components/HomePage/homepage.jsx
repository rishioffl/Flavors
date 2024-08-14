import React, { useEffect, useState, useRef } from 'react';
import './homepage.css';
import { Parallax } from "react-parallax";
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player';
import paris from '../../Assets/HomePage/FranceBg.jpg';
import india from '../../Assets/HomePage/india.jpg';
import japan from '../../Assets/HomePage/Sakura.jpg';
import china from '../../Assets/HomePage/ChinaBg.jpg';
import italy from '../../Assets/HomePage/italy.jpg';
import korea from '../../Assets/HomePage/KoreaBg copy.jpg';
import logo from '../../Assets/HomePage/logo.png';
import fb from '../../Assets/HomePage/fb.png';
import twitter from '../../Assets/HomePage/twitter.png';
import linkedin from '../../Assets/HomePage/linkedin.png';
import insta from '../../Assets/HomePage/insta.png';
import Button from '@mui/material/Button';
import video from '../../Assets/HomePage/HomePageVid.mp4';

// Slider Images
import food1 from '../../Assets/HomePage/food1.jpg';
import food2 from '../../Assets/HomePage/food2.jpg';
import food3 from '../../Assets/HomePage/food3.jpg';

import quichlorraine from '../../Assets/HomePage/QuicheLorraine1.png';
import paneertikka from '../../Assets/HomePage/paneertikka.jpg';
import soba from '../../Assets/HomePage/soba.jpg';
import hargow from '../../Assets/HomePage/hargow.jpg';
import arancini from '../../Assets/HomePage/Arancini1.jpg';
import tteokbokki from '../../Assets/HomePage/Tteokbokki1.jpg';
import ratatouille from '../../Assets/HomePage/Ratatouille1.jpg';
import hyderabadibiriyany from '../../Assets/HomePage/hyderabadibiriyani.jpg';
import donburi from '../../Assets/HomePage/donburi.jpg';
import kungpaochicken from '../../Assets/HomePage/kungpaochicken.jpg';
import branzinnoalforno from '../../Assets/HomePage/BranzinoalForno2.jpg';
import dakgalbi from '../../Assets/HomePage/DakGalbi2.jpg';
import cremebrulee from '../../Assets/HomePage/CremeBrulee1.jpg';
import thandai from '../../Assets/HomePage/thandai.jpg';
import dorayaki from '../../Assets/HomePage/dorayaki.jpg';
import jasminetea from '../../Assets/HomePage/jasminetea.jpg';
import tiramisu from '../../Assets/HomePage/Tiramisu1.jpg';
import mochi from '../../Assets/HomePage/Mochi2.jpg';

const HomePage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState('left');

  const images = [food1, food2, food3];

  const playerRef = useRef(null);
  const [playbackTime, setPlaybackTime] = useState(0);

  useEffect(() => {
    // Load saved time from localStorage
    const savedTime = localStorage.getItem('videoTime');
    if (savedTime && playerRef.current) {
      playerRef.current.seekTo(parseFloat(savedTime), 'seconds');
    }

    // Save playback time to localStorage on unload
    const handleBeforeUnload = () => {
      if (playerRef.current) {
        const currentTime = playerRef.current.getCurrentTime();
        localStorage.setItem('videoTime', currentTime);
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  // Save current playback time periodically
  const handleProgress = (progress) => {
    setPlaybackTime(progress.playedSeconds);
    localStorage.setItem('videoTime', progress.playedSeconds);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection('left');
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  const scrollDown = () => {
    window.scrollBy({
      top: window.innerHeight,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div>
      <header role="banner" className="header">
        <div className="header-content">
          <img id="logo-main" src={logo} width="200" alt="Logo Thing main logo" />
          <nav id="navbar-primary" className="navbar navbar-default" role="navigation">
            <div className="container-fluid">
              <div className="collapse navbar-collapse" id="navbar-primary-collapse">
                <ul className="nav navbar-nav">
                  <Link to="/admindashboard"><li className='contactuslist'>Admin</li></Link>
                  <Link to="/contactus"><li className='contactuslist'>Contact Us</li></Link>
                  <Link to="/requestrecipe"><li className='contactuslist'>Request Recipe</li></Link>
                  <Link to="/aboutus"><li className='Aboutlist'>About-Us</li></Link>
                  <Link to="/"><li className='Aboutlist'>Logout</li></Link>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>

      {/* Video Section */}
      <div className="video">
        <ReactPlayer
          ref={playerRef}
          url={video}
          controls={false}
          playing
          loop
          width="100%"
          height="100%"
          onProgress={handleProgress}
        />
        <div className="video-overlay">
          <p className="video-text">Delicious recipes</p>
          <p className="video-texts"> And guides you on how to cook them, making meal preparation easy and fun!</p>
        </div>
      </div>


        <div className="App">
          <Parallax strength={100} blur={{ min: -15, max: 15 }} bgImage={paris}>
            <div className="content">
              <div className="text-content">French Cuisine</div>
              <div className="cards-section">
                <div className="card">
                  <img src={quichlorraine} alt="Quich Lorraine" />
                  <div className="card-content">
                    <Link to="/quichelorraine"><h2 className='recipename'>Quiche Lorraine</h2></Link>
                    <p className='desc'>A savory French tart filled with a rich custard made from eggs, cream, and bacon or ham, typically baked in a pastry crust.</p>
                  </div>
                </div>
                <div className="card">
                  <img src={ratatouille} alt="ratatouille" />
                  <div className="card-content">
                  <Link to="/ratatouille"><h2 className='recipename'>Ratatouille</h2></Link>
                    <p className='desc'> A traditional Provençal stewed vegetable dish originating from Nice, France, made with tomatoes, onions, zucchini, eggplant, and bell peppers, seasoned with herbs.</p>
                  </div>
                </div>
                <div className="card">
                  <img src={cremebrulee} alt="cremebrulee" />
                  <div className="card-content">
                  <Link to="/cremebrulee"><h2 className='recipename'>Creme Brulee</h2></Link>
                    <p className='desc'>A classic French dessert consisting of a rich custard base topped with a layer of hard caramel, created by caramelizing sugar under a broiler or with a torch.</p>
                  </div>
                </div>
              </div>
            </div>
          </Parallax>
        </div>


        <div className="App">
          <Parallax strength={100} blur={{ min: -15, max: 15 }} bgImage={india}>
            <div className="content">
              <div className="text-content">Indian Cuisine</div>
              <div className="cards-section">
                <div className="card">
                  <img src={paneertikka} alt="paneertikka" />
                  <div className="card-content">
                    <h2 className='recipename'>Paneer Tikka</h2>
                    <p className='desc'>An Indian appetizer made from chunks of paneer marinated in spices and yogurt, then grilled or baked until charred.</p>
                  </div>
                </div>
                <div className="card">
                  <img src={hyderabadibiriyany} alt="hyderabadibiriyany" />
                  <div className="card-content">  
                    <h2 className='recipename'>Hyderabadi Biriyani</h2>
                    <p className='desc'>A flavorful, aromatic Indian rice dish made with basmati rice, marinated meat (often chicken or lamb), and a blend of spices, cooked together in a sealed pot.</p>
                  </div>
                </div>
                <div className="card">
                  <img src={thandai} alt="thandai" />
                  <div className="card-content">
                    <h2 className='recipename'>Thandai</h2>
                    <p className='desc'>A traditional Indian cold drink prepared with a mixture of almonds, fennel seeds, rose petals, pepper, cardamom, saffron, milk, and sugar, often enjoyed during Holi.</p>
                  </div>
                </div>
              </div>
            </div>
          </Parallax>

          <Parallax strength={100} blur={{ min: -15, max: 15 }} bgImage={japan}>
            <div className="content">
              <div className="text-content">Japanese Cuisine</div>
              <div className="cards-section">
                <div className="card">
                  <img src={soba} alt="soba" />
                  <div className="card-content">
                    <h2 className='recipename'>Soba</h2>
                    <p className='desc'> Thin Japanese noodles made from buckwheat flour, served either chilled with a dipping sauce or in hot broth as a noodle soup.</p>
                  </div>
                </div>
                <div className="card">
                  <img src={donburi} alt="donburi" />
                  <div className="card-content">
                    <h2 className='recipename'>Donburi</h2>
                    <p className='desc'>A Japanese rice bowl dish topped with various ingredients such as meat, fish, vegetables, and a simmered sauce.</p>
                  </div>
                </div>
                <div className="card">
                  <img src={dorayaki} alt="dorayaki" />
                  <div className="card-content">
                    <h2 className='recipename'>Dorayaki</h2>
                    <p className='desc'>A Japanese confection consisting of two small pancake-like cakes filled with sweet red bean paste.</p>
                  </div>
                </div>
              </div>
            </div>
          </Parallax>

          <Parallax strength={100} blur={{ min: -15, max: 15 }} bgImage={china}>
            <div className="content">
              <div className="text-content">Chinese Cuisine</div>
              <div className="cards-section">
                <div className="card">
                  <img src={hargow} alt="hargow" />
                  <div className="card-content">
                    <h2 className='recipename'>Har Gow</h2>
                    <p className='desc'>Chinese dim sum dumplings with a translucent wrapper, filled with a mixture of shrimp, bamboo shoots, and seasonings.</p>
                  </div>
                </div>
                <div className="card">
                  <img src={kungpaochicken} alt="kungpaochicken" />
                  <div className="card-content">
                    <h2 className='recipename'>Kung Pao Chicken</h2>
                    <p className='desc'> A spicy, stir-fried Chinese dish made with chicken, peanuts, vegetables, and chili peppers, flavored with Sichuan peppercorns.</p>
                  </div>
                </div>
                <div className="card">
                  <img src={jasminetea} alt="Jasminetea" />
                  <div className="card-content">
                    <h2 className='recipename'>Jasmine tea</h2>
                    <p className='desc'>A fragrant Chinese tea scented with the aroma of jasmine blossoms, often enjoyed for its soothing and floral flavor.</p>
                  </div>
                </div>
              </div>
            </div>
          </Parallax>

          <Parallax strength={100} blur={{ min: -15, max: 15 }} bgImage={italy}>
            <div className="content">
              <div className="text-content">Italian Cuisine</div>
              <div className="cards-section">
                <div className="card">
                  <img src={arancini} alt="arancini" />
                  <div className="card-content">
                  <Link to="/arancini"><h2 className='recipename'>Arancini</h2></Link>
                    <p className='desc'>Italian rice balls that are coated with breadcrumbs and deep-fried, typically filled with ragù (meat sauce), mozzarella, and peas.</p>
                  </div>
                </div>
                <div className="card">
                  <img src={branzinnoalforno} alt="branzinoalforno" />
                  <div className="card-content">
                    <Link to="/branzinoalforno"><h2 className='recipename'>Branzino al Forno</h2></Link>
                    <p className='desc'> An Italian dish featuring oven-roasted Mediterranean sea bass, often flavored with herbs, lemon, and olive oil.</p>
                  </div>
                </div>
                <div className="card">
                  <img src={tiramisu} alt="Tiramisu" />
                  <div className="card-content">
                    <Link to="/tiramisu"><h2 className='recipename'>Tiramisu</h2></Link>
                    <p className='desc'>A popular Italian dessert made of layers of coffee-soaked ladyfingers, mascarpone cheese, eggs, sugar, and cocoa powder.</p>
                  </div>
                </div>
              </div>
            </div>
          </Parallax>

          <Parallax strength={100} blur={{ min: -15, max: 15 }} bgImage={korea}>
            <div className="content">
              <div className="text-content">Korean Cuisine</div>
              <div className="cards-section">
                <div className="card">
                  <img src={tteokbokki} alt="tteokbokki" />
                  <div className="card-content">
                  <Link to="/tteokkbokki"><h2 className='recipename'>Tteokbokki</h2></Link>
                    <p className='desc'>A popular Korean street food made with chewy rice cakes cooked in a spicy and sweet gochujang (Korean chili paste) sauce.</p>
                  </div>
                </div>
                <div className="card">
                  <img src={dakgalbi} alt="DakGalbi" />
                  <div className="card-content">
                  <Link to="/dakgalbi"><h2 className='recipename'>Dak Galbi</h2></Link>
                    <p className='desc'>A Korean dish made by stir-frying marinated chicken pieces in a gochujang-based sauce with vegetables like cabbage, sweet potatoes, and rice cakes.</p>
                  </div>
                </div>
                <div className="card">
                  <img src={mochi} alt="Mochi" />
                  <div className="card-content">
                  <Link to="/mochi"><h2 className='recipename'>Mochi</h2></Link>
                    <p className='desc'>Rice cake made from glutinous rice pounded into a sticky, chewy texture, often filled with sweet or savory fillings.</p>
                  </div>
                </div>
              </div>
            </div>
          </Parallax>
        </div>

{/* FOOTER */}
      <footer>
        <div className="footer">
            <div className=""sb__footer section__padding>
                <div className="sb__footer-links">

                    <div className="sb__footer-links_div">
                        <h4>Find us on</h4>
                        <div className="socialmedia">
                            <p><a href="https://www.facebook.com/"><img src={fb} alt="facebook"/></a> </p>
                            <p><a href="https://twitter.com/i/flow/login"><img src={twitter} alt="twitter"/></a> </p>
                            <p><a href="https://in.linkedin.com/"><img src={linkedin} alt="linkedin"/></a> </p>
                            <p><a href="https://www.instagram.com/"><img src={insta} alt="instagram"/></a> </p>
                        </div>
                    </div>
                </div>
                <hr></hr>
                <div className="sb__footer-below">
                    <div className="sb__footer-copyright">
                        <p>
                            @{new Date().getFullYear()} FLAVÖRS. All right reserved.
                        </p>
                    </div>
                    <div className="sb__footer-below-links">
                        <a href="/terms">
                            <div>
                                <p>
                                    Terms & Conditons
                                </p>
                            </div>
                        </a>
                        <a href="/privacy">
                            <div>
                                <p>
                                    Privacy Policy
                                </p>
                            </div>
                        </a>
                    </div>
                </div>
           </div>
        </div>   
      </footer>

    </div>
  );
};

export default HomePage;

