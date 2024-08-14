import React from 'react';
import DakGalbiImage2 from '../../../Assets/Recipes/Korean/DakGalbi1.jpeg';
import './DakGalbi.css';

const DakGalbi = () => {
    return (
        <div className='bgkoraen'>

            <section id="recipe">
                <h1>Dak Galbi</h1>
                <div className="description">
                <p>Delight in the bold, spicy flavors of Dak Galbi, a popular Korean dish. This savory stir-fry features tender chicken pieces marinated in a flavorful gochujang-based sauce, complemented by an array of vegetables for a hearty and satisfying meal.</p>
                <p>Short on time? No worries! This delicious dish can be whipped up quickly with just a few simple ingredients, and it's sure to impress your guests with its rich, vibrant flavors.</p>

                </div>
                <div className="recipe_detailskorean">
                    <ul className='sbcolorkorean'>
                        <li><span>Prep Time</span>20 min</li>
                        <li><span>Cook Time</span>20 min</li>
                        <li><span>Total Time</span>40 min</li>
                    </ul>
                </div>
                <div className="recipe-content">
                    <div className="ing-list">
                        <h2>The Ingredients</h2>
                        <div className="ingredients">
            <p>1 pound boneless chicken thighs, cut into bite-sized pieces</p>
            <p>2 tablespoons gochujang (Korean red chili paste)</p>
            <p>1 tablespoon gochugaru (Korean red chili flakes)</p>
            <p>1 tablespoon soy sauce</p>
            <p>1 tablespoon rice wine (mirin)</p>
            <p>1 tablespoon sugar</p>
            <p>1 tablespoon honey or corn syrup</p>
            <p>1 tablespoon minced garlic</p>
            <p>1 teaspoon grated ginger</p>
            <p>1 tablespoon sesame oil</p>
            <p>1 tablespoon vegetable oil</p>
            <p>1 small sweet potato, peeled and thinly sliced</p>
            <p>1/2 small cabbage, chopped</p>
            <p>1 small carrot, julienned</p>
            <p>1/2 onion, sliced</p>
            <p>2 green onions, chopped</p>
            <p>Sesame seeds (optional, for garnish)</p>

                        </div>
                        <figure>
                            <img src={DakGalbiImage2} alt="QuicheLorraineImage1" />
                        </figure>
                    </div>
                    <div className="recipe-list">
                        <h2>The Process</h2>
                        <ol className="instructions">
              <li>Marinate Chicken: Mix gochujang, gochugaru, soy sauce, rice wine, sugar, honey, garlic, ginger, and sesame oil.</li>
              <li>Marinate chicken for 30 minutes.</li>
              <li>Prepare Vegetables: Slice sweet potato, chop cabbage, julienne carrot, and slice onion.</li>
              <li>Cook Chicken: Heat vegetable oil in a skillet or wok.</li> 
              <li>Stir-fry marinated chicken for 5 minutes.</li>
              <li>Add Vegetables: Add sweet potato, cabbage, carrot, and onion.</li> 
              <li>Stir-fry for 10-15 minutes until tender.</li>
              <li>Add Green Onions: Add chopped green onions, cook for 2-3 minutes.</li>
              <li>Serve: Garnish with sesame seeds if desired, and serve hot with rice or lettuce wraps.</li>
                        </ol>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default DakGalbi;

