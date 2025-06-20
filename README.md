# 📚 Book Review Platform - Backend

This is the **backend** of the Book Review Platform, built using **Node.js**, **Express.js**, and **MongoDB**. It provides RESTful APIs for managing books, users, and reviews.

---

## 🛠 Tech Stack

- Node.js
- Express.js
- MongoDB with Mongoose
- JWT for Authentication
- dotenv for environment management
- express-validator for validation
```
```
  ## Deployed Url
  https://latracal-backend-assignment.onrender.com
```
```
## 📦 Installation & Running the Server
```
# Step 1: Navigate to backend
cd book-api

# Step 2: Install dependencies
npm install

# Step 3: Start server
npm run dev

Server will run at: http://localhost:5000
```
## 🔗 API Endpoints
📘 Books
GET /books — Get all books (with pagination)

GET /books/:id — Get single book

POST /books — Add new book (Admin only)

✍️ Reviews
GET /reviews?bookId=BOOK_ID — Get reviews for a book

POST /reviews — Submit a review

👤 Users
GET /users/:id — Get user profile

PUT /users/:id — Update user profile
```
## ✅ Features
RESTful API
JWT-based authentication
Centralized error handling
Mongoose schema validation
