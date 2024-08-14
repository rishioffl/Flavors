import React from 'react';
import MochiImage2 from '../../../Assets/Recipes/Korean/Mochi1.jpg';
import './Mochi.css';

const Mochi = () => {
    return (

        <div className='bgkoraen'>

            <section id="recipe">
                <h1>Mochi</h1>
                <div className="description">
                <p>Experience the unique, chewy texture of Mochi, a beloved Japanese treat. With its soft and elastic rice dough encasing a sweet filling, each bite offers a delightful combination of textures and flavors.</p>
                <p>Pressed for time? No problem! This traditional dessert can be easily made with just a handful of ingredients, and it's guaranteed to impress your guests with its delicate and delightful taste.</p>


                </div>
                <div className="recipe_detailskorean">
                    <ul className='sbcolorkorean'>
                        <li><span>Prep Time</span>20 min</li>
                        <li><span>Cook Time</span>10 min</li>
                        <li><span>Total Time</span>30 min</li>
                    </ul>
                </div>
                <div className="recipe-content">
                    <div className="ing-list">
                        <h2>The Ingredients</h2>
                        <div className="ingredients">
            <p>1 cup glutinous rice flour (mochiko)</p>
            <p>1 cup water</p>
            <p>1/4 cup sugar</p>
            <p>Cornstarch or potato starch for dusting</p>

                        </div>
                        <figure>
                            <img src={MochiImage2} alt="QuicheLorraineImage1" />
                        </figure>
                    </div>
                    <div className="recipe-list">
                        <h2>The Process</h2>
                        <ol className="instructions">
              <li>Mix Ingredients: In a microwave-safe bowl, mix 1 cup glutinous rice flour, 1 cup water, and 1/4 cup sugar until smooth.</li>
              <li>Microwave: Cover the bowl with plastic wrap, leaving a small vent. Microwave on high for 2 minutes.</li>
              <li>Stir and Continue Microwaving: Stir the mixture with a wet spatula. Cover again and microwave for another 1-2 minutes until the dough is translucent and sticky.</li>
              <li>Dust and Knead: Dust a clean surface with cornstarch or potato starch. Turn the mochi dough onto the surface and dust your hands with starch. Knead the dough lightly to coat it in starch.</li>
              <li>Shape Mochi: Pinch off small pieces of dough and shape them into balls or flatten them into discs. You can also wrap the mochi around a filling like sweet red bean paste if desired.</li>
              <li>Serve: Dust off any excess starch and serve the mochi fresh. Enjoy!</li>
                        </ol>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Mochi;

