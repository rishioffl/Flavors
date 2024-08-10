import React from 'react';
import AranciniImage2 from '../../../Assets/Recipes/Italian/Arancini2.jpg';
import './Arancini.css';

const Arancini = () => {

    return (
        <div className='bg1'>

            <section id="recipe">
                <h1>Arancini</h1>
                <div className="description">
                <p>This classic Italian appetizer is a delicious combination of creamy risotto and gooey cheese, encased in a crispy golden crust! With its savory flavors and satisfying crunch, Arancini offers a delightful taste of Sicily in every bite.</p>
                <p>Short on time? Don't worry! You can prepare these indulgent rice balls quickly with a few simple ingredients, and they're sure to impress your guests at any gathering.</p>

                </div>
                <div className="recipe_details">
                    <ul className='sbcoloritalian'>
                        <li><span>Prep Time</span>30 min</li>
                        <li><span>Cook Time</span>20 min (for frying the arancini)</li>
                        <li><span>Total Time</span>50 min</li>
                    </ul>
                </div>
                <div className="recipe-content">
                    <div className="ing-list">
                        <h2>The Ingredients</h2>
                        <div className="ingredients">
              <h3>For the Risotto:</h3>
              <p>1 cup Arborio rice</p>
              <p>2 tablespoons olive oil</p>
              <p>1 small onion, finely chopped</p>
              <p>2 cloves garlic, minced</p>
              <p>1/2 cup dry white wine (optional)</p>
              <p>3 cups chicken or vegetable broth, kept warm</p>
              <p>1/2 cup grated Parmesan cheese</p>
              <p>Salt and pepper to taste</p>
            <br></br>
            <h3>For the Filling:</h3>
            <p>1/2 cup mozzarella cheese, cubed</p>
            <p>1/4 cup cooked peas (optional)</p>
            <br></br>
            <h3>For Coating and Frying:</h3>
              <p>1 cup all-purpose flour</p>
              <p>2 large eggs, beaten</p>
              <p>1 cup breadcrumbs</p>
              <p>Vegetable oil, for frying</p>
                        </div>
                        <figure>
                            <img src={AranciniImage2} alt="AranciniImage2" />
                        </figure>
                    </div>
                    <div className="recipe-list">
                        <h2>The Process</h2>
                        <ol className="instructions">
                        <li>Prepare Risotto: Sauté 1 chopped onion and 2 minced garlic cloves in 2 tablespoons olive oil until softened. Add 1 cup Arborio rice and toast lightly.</li>
                        <li> Gradually add 3 cups warm broth, stirring until absorbed. Stir in 1/2 cup grated Parmesan cheese, season with salt and pepper, and let cool.</li>
                        <li>Form Balls: Take a handful of cooled risotto, flatten it, and place a cube of mozzarella (and a few peas if desired) in the center.</li> 
                        <li>Shape the rice around the filling to form balls.</li>
                        <li>Coat Balls: Place 1 cup flour, 2 beaten eggs, and 1 cup breadcrumbs in separate bowls.</li>
                        <li>Roll each rice ball in flour, dip in beaten eggs, and coat with breadcrumbs.</li>
                        <li>Heat Oil: Heat vegetable oil in a deep fryer or large pot to 350°F (175°C), ensuring there is enough oil to fully submerge the arancini.</li>
                        <li>Fry Arancini: Fry the rice balls in batches until golden brown and crispy, about 3-4 minutes per batch. Drain on paper towels.</li>
                        <li>Serve: Serve hot, optionally with marinara sauce for dipping. Enjoy your crispy and cheesy arancini!</li>
                        </ol>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Arancini;
