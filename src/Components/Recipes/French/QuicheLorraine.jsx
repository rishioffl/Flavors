import React from 'react';
import { Link } from 'react-router-dom';
import QuicheLorraineImage1 from '../../../Assets/Recipes/French/QuicheLorraine1.png';
import './QuicheLorraine.css';

const QuicheLorraine = () => {
    return (

        <div className='bgfrench'>
            <section id="quiche-recipe">
                <h1>Quiche Lorraine</h1>
                <div className="quiche-description">
                <p>Indulge in the creamy, luxurious delight of Crème Brûlée, a timeless French dessert. With its silky smooth custard base and a perfectly caramelized sugar crust, each spoonful offers a delightful contrast of textures and flavors.</p>
                <p>Short on time? No worries! This classic dessert can be prepared with ease using just a few simple ingredients, and it's sure to leave a lasting impression on your guests.</p>

                </div>
                <div className="quiche-recipe-details">
                    <ul className='quiche-timings '>
                        <li><span>Prep Time</span>25 min</li>
                        <li><span>Cook Time</span>45 min</li>
                        <li><span>Total Time</span>1 hrs 5 min</li>
                    </ul>
                </div>
                <div className="quiche-recipe-content">
                    <div className="quiche-ing-list">
                        <h2>The Ingredients</h2>
                        <div className="quiche-ingredients">
              <h3>For the Crust:</h3>
              <p>1 1/2 cups all-purpose flour</p>
              <p>1/2 teaspoon salt</p>
              <p>1/2 cup unsalted butter, cold and cubed</p>
              <p>1/4 cup ice water</p>
              <p>2 tablespoons brown sugar (for topping)</p>
              <h3>For the Filling:</h3>
              <p>6 strips of bacon</p>
              <p>1 cup grated Gruyère cheese (or Swiss cheese)</p>
              <p>1 cup heavy cream</p>
              <p>1/2 cup milk</p>
              <p>4 large eggs</p>
              <p>1/2 teaspoon salt</p>
              <p>1/4 teaspoon black pepper</p>
              <p>1/4 teaspoon ground nutmeg (optional)</p>
              <p>1 tablespoon chopped fresh chives or parsley (optional)</p>
                        </div>
                        <figure>
                            <img src={QuicheLorraineImage1} alt="QuicheLorraineImage1" />
                        </figure>
                    </div>
                    <div className="quiche-recipe-list">
                        <h2>The Process</h2>
                        <ol className="quiche-instructions">
              <li>Prepare the Crust: Blend 1 1/2 cups flour, 1/2 teaspoon salt, and 1/2 cup cold butter in a food processor.</li>
              <li>Add 1/4 cup ice water until dough forms.</li>
              <li>Chill for 30 minutes, roll out, fit into a tart pan, and bake at 375°F (190°C) for 10 minutes with weights, then 5 more minutes without weights. Let it cool.</li>
              <li>Cook Bacon: Fry 6 strips of bacon until crispy, then crumble.</li>
              <li>Make Filling: Whisk together 1 cup heavy cream, 1/2 cup milk, 4 eggs, 1/2 teaspoon salt, 1/4 teaspoon pepper, and 1/4 teaspoon nutmeg.</li>
              <li>Assemble Quiche: Spread crumbled bacon and 1 cup grated Gruyère cheese over the crust. </li>
              <li>Pour egg mixture on top and spread it evenly.</li>
              <li>Bake: Bake at 375°F (190°C) for 35-40 minutes until set and golden.</li>
              <li>Serve: Cool slightly before slicing. Garnish with chopped chives or parsley if desired.</li>
                        </ol>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default QuicheLorraine;

