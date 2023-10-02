import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Pizzas from './components/Pizzas';
import RestaurantDetails from './components/RestaurantDetails';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/pizzas" component={Pizzas} />
      <Route path="/restaurant/:id" component={RestaurantDetails} />
    </Switch>
  </Router>,
  document.getElementById('root')
);



