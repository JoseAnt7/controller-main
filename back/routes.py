from flask import Blueprint, request, jsonify
from models import db, User
from flask_jwt_extended import create_access_token, jwt_required, JWTManager, get_jwt_identity

auth_bp = Blueprint('auth', __name__)
user_bp = Blueprint('user', __name__)

@auth_bp.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    username = data.get('username')
    email = data.get('email')
    password = data.get('password')

    if User.query.filter_by(username=username).first() or User.query.filter_by(email=email).first():
        return jsonify({"msg": "User already exists"}), 400

    new_user = User(username=username, email=email)
    new_user.set_password(password)
    db.session.add(new_user)
    db.session.commit()

    return jsonify({"msg": "User registered successfully"}), 201

@auth_bp.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    username_or_email = data.get('username') or data.get('email')
    password = data.get('password')

    user = User.query.filter(
        (User.username == username_or_email) | (User.email == username_or_email)
    ).first()

    if user is None or not user.check_password(password):
        return jsonify({"msg": "Bad username or password"}), 401

    access_token = create_access_token(identity=user.id)
    return jsonify(access_token=access_token), 200

@user_bp.route('/users', methods=['GET'])
def get_all_users():
    users = User.query.all()
    user_list = [
        {"id": user.id, "username": user.username, "email": user.email}
        for user in users
    ]
    return jsonify(user_list), 200


@user_bp.route('/users/<int:id>', methods=['GET'])
def get_user(id):
    user = User.query.get(id)
    if not user:
        return jsonify({"msg": "User not found"}), 404

    return jsonify({
        "id": user.id,
        "username": user.username,
        "email": user.email
    }), 200

# Endpoint para actualizar un usuario
@user_bp.route('/users/<int:id>', methods=['PUT'])
def update_user(id):
    current_user_id = get_jwt_identity()
    if current_user_id != id:
        return jsonify({"msg": "Unauthorized"}), 403

    user = User.query.get(id)
    if not user:
        return jsonify({"msg": "User not found"}), 404

    data = request.get_json()
    if 'username' in data:
        user.username = data['username']
    if 'email' in data:
        user.email = data['email']
    if 'password' in data:
        user.set_password(data['password'])

    db.session.commit()
    return jsonify({"msg": "User updated successfully"}), 200

# Endpoint para eliminar un usuario
@user_bp.route('/users/<int:id>', methods=['DELETE'])
def delete_user(id):
    current_user_id = get_jwt_identity()
    if current_user_id != id:
        return jsonify({"msg": "Unauthorized"}), 403

    user = User.query.get(id)
    if not user:
        return jsonify({"msg": "User not found"}), 404

    db.session.delete(user)
    db.session.commit()
    return jsonify({"msg": "User deleted successfully"}), 200