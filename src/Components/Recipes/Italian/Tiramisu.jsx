import React from 'react';
import tiramisuImage2 from '../../../Assets/Recipes/Italian/Tiramisu1.jpg';
import './Tiramisu.css';

const Tiramisu = () => {
    return (
        <div className='bg-tiramisu'>

            <section id="recipe-tiramisu">
                <h1>Tiramisu</h1>
                <div className="description-tiramisu">
                    <p>This classic Italian dessert is the perfect blend of rich mascarpone cream and aromatic coffee-soaked ladyfingers! With its layers of velvety custard and a dusting of cocoa powder, Tiramisu offers a delightful balance of sweetness and coffee flavor.</p>
                    <p>Don't have time for complex recipes? No problem! You can whip up this indulgent treat in no time with just a few simple ingredients, and it’s guaranteed to impress your guests.</p>
                </div>
                <div className="recipe-details-tiramisu">
                    <ul className='sbcolor-tiramisu'>
                        <li><span>Prep Time</span>30 min</li>
                        <li><span>Cook Time</span>0 min (no baking required)</li>
                        <li><span>Total Time</span>3 hrs (chilling time)</li>
                    </ul>
                </div>
                <div className="recipe-content-tiramisu">
                    <div className="ing-list-tiramisu">
                        <h2>The Ingredients</h2>
                        <div className="ingredients-tiramisu">
                            <h3>For the Filling:</h3>
                            <p>6 large egg yolks</p>
                            <p>3/4 cup granulated sugar</p>
                            <p>1 cup mascarpone cheese</p>
                            <p>1 1/2 cups heavy cream</p>
                            <br />
                            <h3>For the Assembly:</h3>
                            <p>1 1/2 cups strong brewed coffee, cooled</p>
                            <p>1/4 cup coffee liqueur (optional)</p>
                            <p>1 package (7 ounces) ladyfingers (savoiardi)</p>
                            <p>Unsweetened cocoa powder, for dusting</p>
                            <p>Dark chocolate shavings (optional)</p>
                        </div>
                        <figure className='tiramisu-image'>
                            <img src={tiramisuImage2} alt="Tiramisu2" />
                        </figure>
                    </div>
                    <div className="recipe-list-tiramisu">
                        <h2>The Process</h2>
                        <ol className="instructions-tiramisu">
                            <li>Prepare the Filling: Whisk together 6 egg yolks and 3/4 cup sugar over a double boiler until thick and pale (8-10 minutes), then cool.</li>
                            <li>Beat 1 cup mascarpone cheese until smooth, mix in the egg yolk mixture, and fold in 1 1/2 cups whipped heavy cream.</li>
                            <li> Make Coffee Mixture: Combine 1 1/2 cups brewed coffee with 1/4 cup coffee liqueur (optional) in a shallow dish</li>
                            <li>Dip Ladyfingers: Quickly dip ladyfingers into the coffee mixture, ensuring they are moistened but not soaked.</li>
                            <li>First Layer: Arrange a layer of dipped ladyfingers in the bottom of a 9x13-inch dish</li>
                            <li> Add Mascarpone Mixture: Spread half of the mascarpone mixture over the layer of ladyfingers. </li>
                            <li>Repeat with another layer of dipped ladyfingers and the remaining mascarpone mixture.</li>
                            <li>Chill and Serve: Refrigerate for at least 4 hours.</li>
                            <li>Before serving, dust with unsweetened cocoa powder and optionally sprinkle with dark chocolate shavings.</li>
                        </ol>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Tiramisu;
