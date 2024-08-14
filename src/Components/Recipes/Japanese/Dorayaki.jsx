import React from 'react';
import DorayakiImage from '../../../Assets/Recipes/Japanese/dorayaki.jpg';
import './Dorayaki.css';

const Dorayaki = () => {

    return (
        <div className='bgdorayaki'>

            <section id="recipe">
                <h1>Dorayaki</h1>
                <div className="description">
                <p>This classic Japanese sweet treat is a delightful fusion of fluffy pancakes and sweet red bean filling! Dorayaki, a popular confection in Japan, offers a perfect balance of soft, pillowy texture and rich, sweet flavors, making it a beloved snack or dessert.</p>
                <p>Short on time? Don't worry! Dorayaki is easy to whip up with just a few simple ingredients, making it an ideal choice for a quick and delicious indulgence that will satisfy your sweet tooth.</p>


                </div>
                <div className="recipe_details">
                    <ul className='sbcolorjapanese'>
                    <li><span>Prep Time</span>10 min</li>
                    <li><span>Cook Time</span>15 min</li>
                    <li><span>Total Time</span>25 min</li>


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
                            <img src={DorayakiImage} alt="DorayakiImage" />
                        </figure>
                    </div>
                    <div className="recipe-list">
                        <h2>The Process</h2>
                        <ol className="instructions">
              <li>Mix Batter: Whisk together 1 cup flour, 1/2 cup sugar, 1/2 teaspoon baking powder, and 1/4 teaspoon baking soda.</li> 
              <li>In another bowl, beat 2 eggs with 1/4 cup honey, 1/4 cup milk, and 1 tablespoon vegetable oil. Combine wet and dry ingredients and let rest for 10 minutes.</li>
              <li>Heat Skillet: Preheat a non-stick skillet or griddle over medium-low heat and lightly grease it..</li>
              <li>Cook Pancakes: Pour 1/4 cup of batter onto the skillet, spreading it into a round shape.</li> 
              <li>Cook until bubbles form and edges set, then flip and cook until golden brown. Repeat with remaining batter.</li>
              <li>Cool Pancakes: Allow pancakes to cool slightly.</li>
              <li>Assemble Dorayaki: Spread red bean paste (anko) on one pancake, top with another pancake, and press gently to sandwich the filling.</li>
              <li>Serve: Enjoy immediately or store at room temperature for up to 2 days.</li>
                        </ol>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Dorayaki;
