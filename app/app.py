from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/')
def index():
    pass

@app.route('pizzas')
def get_all_pizaa():
    pass

@app.route('/resturants')
def get_all_resturants():
    pass
if __name__ == '__main__':
    app.run()
