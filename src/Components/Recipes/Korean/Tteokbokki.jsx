import React from 'react';
import TteokbokkiImage2 from '../../../Assets/Recipes/Korean/Tteokbokki2.jpg';
import './Tteokbokki.css';

const Tteokbokki = () => {
    return (

        <div className='bgkoraen'>

            <section id="recipe">
                <h1>Tteokbokki</h1>
                <div className="description">
                <p>Savor the bold, spicy flavors of Tteokbokki, a beloved Korean street food. This dish features chewy rice cakes simmered in a rich and spicy gochujang sauce, often accompanied by fish cakes, boiled eggs, and green onions for a delicious and satisfying meal.</p>
                <p>Pressed for time? No problem! This iconic dish can be prepared quickly with just a few simple ingredients, and it's sure to impress your guests with its delightful heat and texture.</p>

                </div>
                <div className="recipe_detailskorean">
                    <ul className='sbcolorkorean'>
                        <li><span>Prep Time</span>10 min</li>
                        <li><span>Cook Time</span>20 min</li>
                        <li><span>Total Time</span>30 min</li>
                    </ul>
                </div>
                <div className="recipe-content">
                    <div className="ing-list">
                        <h2>The Ingredients</h2>
                        <div className="ingredients">
            <p>1 pound Korean rice cakes (tteok)</p>
            <p>3 cups water</p>
            <p>1 sheet dried kelp (kombu)</p>
            <p>4 dried anchovies (optional)</p>
            <p>3 tablespoons gochujang (Korean red chili paste)</p>
            <p>1 tablespoon gochugaru (Korean red chili flakes)</p>
            <p>2 tablespoons soy sauce</p>
            <p>1 tablespoon sugar</p>
            <p>2 green onions, chopped</p>
            <p>1/2 cup fish cakes, sliced</p>
            <p>2 hard-boiled eggs (optional)</p>
            <p>Sesame seeds (optional, for garnish)</p>

                        </div>
                        <figure>
                            <img src={TteokbokkiImage2} alt="QuicheLorraineImage1" />
                        </figure>
                    </div>
                    <div className="recipe-list">
                        <h2>The Process</h2>
                        <ol className="instructions">
              <li>Prepare Rice Cakes: If using refrigerated or frozen rice cakes, soak them in warm water for 10-15 minutes to soften.</li>
              <li>Make Broth: In a pot, combine 3 cups water, 1 sheet dried kelp, and 4 dried anchovies (if using).</li> 
              <li>Bring to a boil, then simmer for 10 minutes. Remove kelp and anchovies.</li>
              <li>Make Sauce: Add 3 tablespoons gochujang, 1 tablespoon gochugaru, 2 tablespoons soy sauce, and 1 tablespoon sugar to the broth.</li> 
              <li>Stir it to dissolve.</li>
              <li>Cook Rice Cakes: Add rice cakes and sliced fish cakes to the pot.</li> 
              <li>Boil for 8-10 minutes, stirring occasionally, until rice cakes are soft and the sauce thickens.</li>
              <li>Add Green Onions and Eggs: Stir in chopped green onions and hard-boiled eggs (if using). Cook for another 2-3 minutes.</li>
              <li>Serve: Garnish with sesame seeds if desired, and serve hot.</li>
                        </ol>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Tteokbokki;

