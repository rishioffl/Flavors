import React from 'react';
import SobaImage from '../../../Assets/Recipes/Japanese/soba.jpg';
import './Soba.css';

const Soba = () => {

    return (
        <div className='bgsoba'>

            <section id="recipe">
                <h1>Soba</h1>
                <div className="description">
                <p>This traditional Japanese noodle dish is a perfect blend of simplicity and flavor, featuring thin buckwheat noodles that are both hearty and wholesome. Soba can be enjoyed hot in a comforting broth or cold with a refreshing dipping sauce, offering versatility for any occasion.</p>
                <p>In a hurry? No problem! Soba is quick and easy to prepare, requiring just a few ingredients for a delicious and satisfying meal that will bring a taste of Japan to your table.</p>



                </div>
                <div className="recipe_details">
                    <ul className='sbcolorjapanese'>
                    <li><span>Prep Time</span>5 min</li>
                    <li><span>Cook Time</span>10 min</li>
                    <li><span>Total Time</span>15 min</li>



                    </ul>
                </div>
                <div className="recipe-content">
                    <div className="ing-list">
                        <h2>The Ingredients</h2>
                        <div className="ingredients">
              <h3>For the Pancake Batter:</h3>
              <p>1 tablespoon vegetable oil</p>
              <p>1 onion, thinly sliced</p>
              <p>1/2 teaspoon baking powder</p>
              <p>1/4 teaspoon baking soda</p>
              <p>2 large eggs</p>
              <p>1/4 cup honey</p>
              <p>1/4 cup milk</p>
              <p>1 tablespoon vegetable oil</p>
            <br></br>
            <h3>For the Filling:</h3>
            <p>1 cup sweet red bean paste (anko)</p>
            <br></br>

                        </div>
                        <figure>
                            <img src={SobaImage} alt="SobaImage" />
                        </figure>
                    </div>
                    <div className="recipe-list">
                        <h2>The Process</h2>
                        <ol className="instructions">
              <li>Cook Noodles: Boil 8 ounces soba noodles according to package instructions, about 5-6 minutes. Drain and rinse under cold water.</li>
              <li>Make Sauce: Whisk together 1/4 cup soy sauce, 2 tablespoons sesame oil, 2 tablespoons mirin, 1 tablespoon rice vinegar, 1 tablespoon sugar, 1 minced garlic clove, and 1 teaspoon grated ginger.</li>
              <li>Combine: Toss the cooked soba noodles with the sauce until evenly coated.</li>
              <li>Garnish: Add optional garnishes like sliced green onions, toasted sesame seeds, and julienned cucumber and carrot.</li>
              <li>Assemble Quiche: Spread crumbled bacon and 1 cup grated Gruyère cheese over the crust.</li> 
              <li>Pour egg mixture on top.</li>
              <li>Serve: Serve the soba noodles cold or at room temperature.</li>
              <li>Enjoy: Enjoy as a refreshing and flavorful dish.</li>
                        </ol>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Soba;
