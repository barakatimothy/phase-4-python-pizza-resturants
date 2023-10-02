import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Restaurants = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:5555/restaurants');
        setRestaurants(response.data);
      } catch (error) {
        console.error('Error fetching restaurants:', error);
      }
    };

    fetchRestaurants();
  }, []);

  return (
    <div>
      {restaurants.map((restaurant) => (
        <div key={restaurant.id}>
          <h2>{restaurant.name}</h2>
          <p>{restaurant.address}</p>
        </div>
      ))}
    </div>
  );
};

export default Restaurants;
