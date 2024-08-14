import React from 'react';
import DonburiImage from '../../../Assets/Recipes/Japanese/donburi.jpg';
import './Donburi.css';

const Donburi = () => {

    return (
        <div className='bgdonburi'>

            <section id="recipe">
                <h1>Donburi</h1>
                <div className="description">
                <p>This traditional Japanese dish brings comfort in a bowl, combining savory toppings with fluffy rice for a hearty and satisfying meal! Donburi, meaning "rice bowl," offers a harmonious blend of flavors, textures, and colors, all layered atop a bed of steamed rice.</p>
                <p>Pressed for time? No problem! Donburi is quick to prepare with just a few staple ingredients, making it a perfect option for a wholesome and delicious meal that will impress at any table.</p>

                </div>
                <div className="recipe_details">
                    <ul className='sbcolorjapanese'>
                        <li><span>Prep Time</span>15 min</li>
                        <li><span>Cook Time</span>20 min</li>
                        <li><span>Total Time</span>35 min</li>

                    </ul>
                </div>
                <div className="recipe-content">
                    <div className="ing-list">
                        <h2>The Ingredients</h2>
                        <div className="ingredients">
              <h3>For the Topping:</h3>
              <p>1 tablespoon vegetable oil</p>
              <p>1 onion, thinly sliced</p>
              <p>2 boneless, skinless chicken thighs, cut into bite-sized pieces</p>
              <p>1 cup dashi stock (or chicken broth)</p>
              <p>2 tablespoons soy sauce</p>
              <p>2 tablespoons mirin</p>
              <p>11 tablespoon sake (optional)</p>
              <p>2 large eggs, lightly beaten</p>
              <p>2 green onions, sliced (for garnish)</p>
            <br></br>
            <h3>For Serving:</h3>
            <p>2 cups cooked white rice (steamed or short-grain).</p>
            <br></br>

                        </div>
                        <figure>
                            <img src={DonburiImage} alt="DonburiImage" />
                        </figure>
                    </div>
                    <div className="recipe-list">
                        <h2>The Process</h2>
                        <ol className="instructions">
              <li>Cook Onion and Chicken: Heat 1 tablespoon oil in a skillet over medium heat. Sauté 1 sliced onion until softened, then add 2 cups chicken pieces and cook until no longer pink.</li>
              <li>Prepare Sauce: Add 1 cup dashi stock (or chicken broth), 2 tablespoons soy sauce, 2 tablespoons mirin, and 1 tablespoon sake (if using). Simmer for 5 minutes.</li>
              <li>Add Eggs: Pour 2 beaten eggs over the chicken mixture. Cover and cook for 2-3 minutes until eggs are set but slightly soft.</li>
              <li>Serve: Divide 2 cups cooked rice into bowls.</li>
              <li>Top with Mixture: Spoon the chicken and egg mixture over the rice.</li>
              <li>Garnish and Enjoy: Sprinkle with sliced green onions and serve hot.</li>
                        </ol>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Donburi;
