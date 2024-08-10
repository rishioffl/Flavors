import React from 'react';
import { Link } from 'react-router-dom';
import RatatouilleImage2 from '../../../Assets/Recipes/French/Ratatouille2.jpg';
import './Ratatouille.css';

const Ratatouille = () => {
    return (

        <div className='bgfrench'>

            <section id="ratatouille-recipe">
                <h1>Ratatouille</h1>
                <div className="ratatouille-description">
                <p>Indulge in the creamy, luxurious delight of Crème Brûlée, a timeless French dessert. With its silky smooth custard base and a perfectly caramelized sugar crust, each spoonful offers a delightful contrast of textures and flavors.</p>
                <p>Short on time? No worries! This classic dessert can be prepared with ease using just a few simple ingredients, and it's sure to leave a lasting impression on your guests.</p>

                </div>
                <div className="ratatouille-recipe_details">
                    <ul className='ratatouille-timings'>
                        <li><span>Prep Time</span>30 min</li>
                        <li><span>Cook Time</span>1 hr</li>
                        <li><span>Total Time</span>1 hrs 30 min</li>
                    </ul>
                </div>
                <div className="ratatouille-recipe-content">
                    <div className="ratatouille-ing-list">
                        <h2>The Ingredients</h2>
                        <div className="ratatouille-ingredients">
              <h3>For the Tomato Base:</h3>
              <p>2 tablespoons olive oil</p>
              <p>1 large onion, finely chopped</p>
              <p>4 cloves garlic, minced</p>
              <p>1 red bell pepper, finely chopped</p>
              <p>1 yellow bell pepper, finely chopped</p>
              <p>2 cans (14.5 ounces each) diced tomatoes</p>
              <p>2 tablespoons tomato paste</p>
              <p>1 teaspoon sugar</p>
              <p>Salt and pepper to taste</p>
              <p>1 tablespoon chopped fresh basil</p>
              <p>1 tablespoon chopped fresh parsley</p>

              <h3>For the Vegetables:</h3>
              <p>1 small eggplant</p>
              <p>1 small zucchini</p>
              <p>1 small yellow squash</p>
              <p>1 red bell pepper</p>
              <p>1 yellow bell pepper</p>
              <p>1 green bell pepper</p>
              <p>3 tablespoons olive oil</p>
              <p>Salt and pepper to taste</p>

              <h3>For the Herb Seasoning:</h3>
              <p>2 tablespoons olive oil</p>
              <p>1 tablespoon fresh thyme leaves</p>
              <p>1 tablespoon fresh rosemary, chopped</p>
              <p>1 tablespoon fresh basil, chopped</p>
              <p>1 tablespoon fresh parsley, chopped</p>
                        </div>
                        <figure>
                            <img src={RatatouilleImage2} alt="QuicheLorraineImage1" />
                        </figure>
                    </div>
                    <div className="ratatouille-recipe-list">
                        <h2>The Process</h2>
                        <ol className="ratatouille-instructions">
              <li>Sauté 1 chopped onion and 4 minced garlic cloves in 2 tablespoons olive oil, then add 1 chopped red bell pepper and 1 yellow bell pepper. Cook for 5 minutes.</li>
              <li>Stir in 2 cans diced tomatoes, 2 tablespoons tomato paste, 1 teaspoon sugar, salt, and pepper.</li>
              <li>Simmer for 20-25 minutes, then add 1 tablespoon each of chopped basil and parsley.</li>
              <li>Preheat oven to 375°F (190°C).</li>
              <li>Slice 1 eggplant, 1 zucchini, 1 yellow squash, and 1 each red, yellow, and green bell pepper into thin rounds.</li>
              <li>Toss vegetables with 3 tablespoons olive oil, salt, and pepper. Salt eggplant slices and rinse after 15 minutes.</li>
              <li>Spread tomato base in a baking dish, arrange vegetables on top.</li>
              <li>Drizzle with a mixture of 2 tablespoons olive oil and 1 tablespoon each of thyme, rosemary, basil, and parsley.</li>
              <li>Cover and bake for 35-40 minutes, uncover and bake for 10-15 more minutes. Let rest before serving.</li>
                        </ol>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Ratatouille;

