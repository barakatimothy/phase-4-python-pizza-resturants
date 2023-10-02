import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const RestaurantDetails = () => {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    const fetchRestaurantDetails = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:5555/restaurants/${id}`);
        setRestaurant(response.data);
      } catch (error) {
        console.error('Error fetching restaurant details:', error);
      }
    }; 

    fetchRestaurantDetails();
  }, [id]);

  return (
    <div>
      {restaurant ? (
        <>
          <h1>{restaurant.name}</h1>
          <p>Address: {restaurant.address}</p>
          <h2>Pizzas:</h2>
          <ul>
            {restaurant.pizzas.map((pizza) => (
              <li key={pizza.id}>
                <h3>{pizza.name}</h3>
                <p>Ingredients: {pizza.ingredients}</p>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <p>Loading restaurant details...</p>
      )}
    </div>
  );
};

export default RestaurantDetails;
