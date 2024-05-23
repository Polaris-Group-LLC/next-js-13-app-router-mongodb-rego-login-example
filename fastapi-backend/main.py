from fastapi import FastAPI, HTTPException, Depends
from pydantic import BaseModel
from pymongo import MongoClient
from passlib.context import CryptContext
import jwt
import os

app = FastAPI()

# MongoDB connection
client = MongoClient(os.getenv('MONGODB_URI'))
db = client.get_database('your_database_name')
users_collection = db.get_collection('users')

# Password hashing
pwd_context = CryptContext(schemes=['bcrypt'], deprecated='auto')

# JWT secret
SECRET_KEY = os.getenv('JWT_SECRET')

class User(BaseModel):
    username: str
    password: str

@app.post('/register')
async def register(user: User):
    if users_collection.find_one({'username': user.username}):
        raise HTTPException(status_code=400, detail='Username already taken')
    hashed_password = pwd_context.hash(user.password)
    users_collection.insert_one({'username': user.username, 'password': hashed_password})
    return {'message': 'User registered successfully'}

@app.post('/login')
async def login(user: User):
    db_user = users_collection.find_one({'username': user.username})
    if not db_user or not pwd_context.verify(user.password, db_user['password']):
        raise HTTPException(status_code=400, detail='Invalid username or password')
    token = jwt.encode({'username': user.username}, SECRET_KEY, algorithm='HS256')
    return {'access_token': token}

@app.get('/users')
async def get_users():
    users = users_collection.find({}, {'_id': 0, 'username': 1})
    return list(users)
