from fastapi import FastAPI, HTTPException, Depends, Path
from pydantic import BaseModel, Field
from pymongo import MongoClient
from passlib.context import CryptContext
from typing import List, Optional
import jwt
import os
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Adjust this to match the URL of your frontend
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# MongoDB connection
client = MongoClient(os.getenv('MONGODB_URI'))
db = client.get_database('your_database_name')
users_collection = db.get_collection('users')
items_collection = db.get_collection('items')

# Password hashing
pwd_context = CryptContext(schemes=['bcrypt'], deprecated='auto')

# JWT secret
SECRET_KEY = os.getenv('JWT_SECRET')

class User(BaseModel):
    username: str
    password: str

class Item(BaseModel):
    id: Optional[str] = Field(None, alias="_id")
    name: str
    description: Optional[str] = None
    price: float
    tax: Optional[float] = None

@app.get("/databases")
async def get_databases():
    try:
        # Initialize the MongoDB client
        client = MongoClient(os.getenv('MONGODB_URI'))
        # List all database names
        databases = client.list_database_names()
        # Close the client after use
        client.close()
        return {"databases": databases}
    except Exception as e:
        print(f"Error accessing database: {str(e)}")
        raise HTTPException(status_code=500, detail="Internal Server Error")
    
@app.get("/collections/{db_name}")
async def get_collections(db_name: str):
    try:
        client = MongoClient(os.getenv('MONGODB_URI'))
        db = client[db_name]
        collections = db.list_collection_names()
        client.close()
        return {"collections": collections}
    except Exception as e:
        print(f"Error accessing collections for database {db_name}: {str(e)}")
        raise HTTPException(status_code=500, detail="Internal Server Error")

@app.post('/register')
async def register_user(user: User):
    # Hash the user's password
    hashed_password = pwd_context.hash(user.password)
    user_dict = user.dict()
    user_dict.update({"password": hashed_password})
    # Insert the new user into the database
    result = users_collection.insert_one(user_dict)
    return {"username": user.username, "id": str(result.inserted_id)}

@app.post("/items/", response_model=Item)
async def create_item(item: Item):
    item_dict = item.dict(by_alias=True)
    del item_dict["id"]
    result = items_collection.insert_one(item_dict)
    item.id = str(result.inserted_id)
    return item

@app.get("/items/{item_id}", response_model=Item)
async def read_item(item_id: str):
    try:
        oid = ObjectId(item_id)
    except:
        raise HTTPException(status_code=400, detail="Invalid item ID format")
    item = items_collection.find_one({"_id": oid})
    if item is not None:
        return Item(**item)
    raise HTTPException(status_code=404, detail="Item not found")

@app.put("/items/{item_id}", response_model=Item)
async def update_item(item_id: str, item: Item):
    try:
        oid = ObjectId(item_id)
    except:
        raise HTTPException(status_code=400, detail="Invalid item ID format")
    updated_item = items_collection.find_one_and_update(
        {"_id": oid},
        {"$set": item.dict(by_alias=True)},
        return_document=True
    )
    if updated_item is not None:
        return Item(**updated_item)
    raise HTTPException(status_code=404, detail="Item not found")

@app.delete("/items/{item_id}", status_code=204)
async def delete_item(item_id: str):
    delete_result = items_collection.delete_one({"_id": item_id})
    if delete_result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="Item not found")