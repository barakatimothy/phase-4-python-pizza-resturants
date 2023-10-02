import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Pizzas = () => {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    const fetchPizzas = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:5555/pizzas');
        setPizzas(response.data);
      } catch (error) {
        console.error('Error fetching pizzas:', error);
      }
    };

    fetchPizzas();
  }, []);

  return (
    <div>
      <h1>Pizzas</h1>
      <ul>
        {pizzas.map((pizza) => (
          <li key={pizza.id}>
            <h2>{pizza.name}</h2>
            <p>Ingredients: {pizza.ingredients}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pizzas;
