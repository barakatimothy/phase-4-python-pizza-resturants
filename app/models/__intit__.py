from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

from . import pizza
from . import restaurant
from . import restaurant_pizza
