import React, { useState } from "react";
import {recipesData} from '../data/data.js'

const RecipeFilterApp = () => {
  const [cart, setCart] = useState(0);
  const [filterr, setFilterr] = useState("");

  const minRating = parseFloat(filterr || 0);

  const filteredRecipes = recipesData.filter(
    (item) => item.rating >= minRating
  );

  const avgRating =
    filteredRecipes.length > 0
      ? (
        filteredRecipes.reduce((sum, item) => sum + item.rating, 0) /
        filteredRecipes.length
      ).toFixed(1)
      : 0;

  return (
    <div>
      <h1>🍽️ Recipe Explorer</h1>

      <div className="filters">
        <div>
          <label htmlFor="rating-filter">Filter by Rating:</label>

          <select
            id="rating-filter"
            value={filterr}
            onChange={(e) => setFilterr(e.target.value)}
          >
            <option value="4.0">4.0+</option>
            <option value="4.3">4.3+</option>
            <option value="4.5">4.5+</option>
            <option value="4.7">4.7+</option>
            <option value="4.9">4.9+</option>
          </select>
        </div>

        <div>
          <h1>{`Cart Items: ${cart}`}</h1>
        </div>
      </div>

      <h1>{`Average Rating: ${avgRating} (${filteredRecipes.length} recipes)`}</h1>

      <div className="container">
        {filteredRecipes.map((item) => (
          <div key={item.id} className="card">
            <img src={item.image} alt={item.name} />
            <h1>{item.name}</h1>
            <p>🍽️Cuisine: {item.cuisine}</p>
            <p>
              Rating: {item.rating} ({item.reviewCount})
            </p>
            <button onClick={() => setCart((prev) => prev + 1)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeFilterApp;