from flask import Flask,jsonify
from models.restaurant import Restaurant
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'  
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

# Create database tables
with app.app_context():
    db.create_all()
    
@app.route('/restaurants', methods=['GET'])
def get_restaurants():
    restaurants = Restaurant.query.all()
    restaurants_list = []
    for restaurant in restaurants:
        restaurants_list.append({
            "id": restaurant.id,
            "name": restaurant.name,
            "address": restaurant.address
        })
    return jsonify(restaurants_list), 200


@app.route('/restaurants/<int:id>', methods=['GET'])
def get_restaurant_by_id(id):
    restaurant = Restaurant.query.get(id)
    if restaurant:
        pizzas = [{"id": pizza.id, "name": pizza.name, "ingredients": pizza.ingredients} for pizza in restaurant.pizzas]
        restaurant_data = {
            "id": restaurant.id,
            "name": restaurant.name,
            "address": restaurant.address,
            "pizzas": pizzas
        }
        return jsonify(restaurant_data), 200
    else:
        return jsonify({"error": "Restaurant not found"}), 404



if __name__ == "__main__":
    app.run(debug=True)