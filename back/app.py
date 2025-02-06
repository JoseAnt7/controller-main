from flask import Flask
from flask_jwt_extended import JWTManager
from flask_cors import CORS
from models import db
from routes import auth_bp

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///users.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['JWT_SECRET_KEY'] = 'your_jwt_secret_key'

db.init_app(app)
jwt = JWTManager(app)
CORS(app)  # Habilita CORS para todas las rutas

app.register_blueprint(auth_bp, url_prefix='/auth')

@app.route('/')
def home():
    return "¡Hola, Flask con Pipenv!"

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True)