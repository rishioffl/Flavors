import React from 'react';
import { Link } from 'react-router-dom';
import CremeBruleeImage2 from '../../../Assets/Recipes/French/CremeBrulee2.jpg';
import './CremeBrulee.css';

const CremeBrulee = () => {
    return (
        <div className='rishi'>
        <div className='creme-brulee-bg'>
            {/* section#recipe */}
            <section id="recipe">
                <h1>Crème Brûlée</h1>
                <div className="creme-brulee-description">
                    <p>Indulge in the creamy, luxurious delight of Crème Brûlée, a timeless French dessert. With its silky smooth custard base and a perfectly caramelized sugar crust, each spoonful offers a delightful contrast of textures and flavors.</p>
                    <p>Short on time? No worries! This classic dessert can be prepared with ease using just a few simple ingredients, and it's sure to leave a lasting impression on your guests.</p>
                </div>
                <div className="creme-brulee-details">
                    <ul className='creme-brulee-timings'>
                        <li><span>Prep Time</span>15 min</li>
                        <li><span>Cook Time</span>30 min</li>
                        <li><span>Total Time</span>45 min</li>
                    </ul>
                </div>
                <div className="creme-brulee-content">
                    <div className="creme-brulee-ingredients">
                        <h2>The Ingredients</h2>
                        <div className="ingredients-list">
                            <p>2 cups heavy cream</p>
                            <p>1 vanilla bean (or 2 teaspoons vanilla extract)</p>
                            <p>5 large egg yolks</p>
                            <p>1/2 cup granulated sugar</p>
                            <p>2 tablespoons brown sugar (for topping)</p>
                        </div>
                        <figure>
                            <img src={CremeBruleeImage2} alt="Creme Brulee" />
                        </figure>
                    </div>
                    <div className="creme-brulee-process">
                        <h2>The Process</h2>
                        <ol className="instructions-list">
                            <li>Preheat Oven: Set to 325°F (160°C). Heat 2 cups heavy cream with 1 split vanilla bean (or 2 teaspoons vanilla extract) until simmering.</li>
                            <li>Mix Yolk and Sugar: Whisk 5 egg yolks and 1/2 cup granulated sugar until thick and pale.</li>
                            <li>Combine Mixtures: Gradually whisk hot cream into the egg yolk mixture, then strain back into the pan and cook gently until slightly thickened.</li>
                            <li>Bake: Pour custard into ramekins, place in a baking dish, and fill the dish with hot water halfway up the sides of the ramekins.</li>
                            <li>Bake for 35-40 minutes until set but jiggly. Chill for at least 2 hours.</li>
                            <li>Caramelize: Sprinkle a thin layer of brown sugar on top of each custard. Use a kitchen torch or broiler to caramelize the sugar until golden.</li>
                            <li>Serve: Let sit for a minute or two after caramelizing, then serve and enjoy.</li>
                        </ol>
                    </div>
                </div>
            </section>
            </div>
        </div>
    );
};

export default CremeBrulee;

