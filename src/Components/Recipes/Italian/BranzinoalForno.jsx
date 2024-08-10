import React from 'react';
import BranzinoalFornoImage2 from '../../../Assets/Recipes/Italian/BranzinoalForno2.jpg';
import './BranzinoalForno.css';

const BranzinoalForno = () => {

    return (
        <div className='bg1'>

            <section id="recipe-branzino">
                <h1>Branzino al Forno</h1>
                <div className="description-branzino">
                <p>This classic Italian main course features a whole branzino baked to perfection with fresh herbs and lemon, creating a dish that's both elegant and simple! With its tender, flaky flesh and a burst of zesty flavors, Branzino al Forno offers a delightful taste of the Mediterranean in every bite.</p>
                <p>Pressed for time? No worries! You can prepare this impressive and delicious dish with minimal effort, making it a perfect choice for a quick yet sophisticated meal that will impress your guests.</p>

                </div>
                <div className="recipe-details-branzino">
                    <ul className='sbcoloritalian'>
                        <li><span>Prep Time</span>15 min</li>
                        <li><span>Cook Time</span>20 min</li>
                        <li><span>Total Time</span>35 min</li>
                    </ul>
                </div>
                <div className="recipe-content-branzino">
                    <div className="ing-list-branzino">
                        <h2>The Ingredients</h2>
                        <div className="ingredients-branzino">
            <p>1 whole branzino (sea bass), cleaned and scaled</p>
            <p>2 tablespoons olive oil</p>
            <p>1 lemon, thinly sliced</p>
            <p>3-4 garlic cloves, thinly sliced</p>
            <p>Fresh rosemary and thyme sprigs</p>
            <p>Salt and pepper to taste</p>
            <p>1/2 cup cherry tomatoes, halved</p>
            <p>1/2 cup black olives, pitted</p>
            <p>1/4 cup white wine (optional)</p>
                        </div>
                        <figure>
                            <img src={BranzinoalFornoImage2} alt="BranzinoalForno2" />
                        </figure>
                    </div>
                    <div className="recipe-list-branzino">
                        <h2>The Process</h2>
                        <ol className="instructions-branzino">
              <li>Preheat Oven: Preheat your oven to 400°F (200°C).</li>
              <li>Prepare the Fish: Pat the branzino dry with paper towels. Make 3-4 diagonal slashes on each side of the fish. Season the inside and outside of the fish with salt and pepper.</li>
              <li>Insert lemon slices, garlic slices, and sprigs of rosemary and thyme into the cavity and slashes.</li>
              <li>Arrange on Baking Dish: Place the fish on a baking dish lined with parchment paper. Arrange the cherry tomatoes and black olives around the fish.</li>
              <li>Drizzle everything with 2 tablespoons olive oil and, if using, pour 1/4 cup white wine over the fish and vegetables.</li>
              <li>Bake: Bake in the preheated oven for 20-25 minutes, or until the fish is cooked through and flakes easily with a fork.</li>
              <li>Serve: Transfer the fish to a serving platter, arranging the roasted tomatoes and olives around it.</li>
              <li>Enjoy: Serve immediately, garnished with additional lemon wedges and fresh herbs if desired.</li>
                        </ol>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BranzinoalForno;
