# **Node.js User Management and Video API**

This project is a RESTful API built with **Node.js** and **MongoDB**. It supports user authentication, video management, and secure token-based access using **JWT (JSON Web Tokens)**. The application integrates **Cloudinary** for image and video uploads and includes advanced features like token refresh, user watch history, and more.

---

## **Features**

- **User Management**:  
  - Registration with avatar and cover image uploads.  
  - Login with email or username.  
  - Secure authentication using JWT (access and refresh tokens).  
  - Token refresh mechanism for session management.  
  - Logout functionality with cookie clearance.  

- **Video Management**:  
  - Upload videos and thumbnails to Cloudinary.  
  - Store video metadata (title, description, duration).  
  - Video ownership tracking.  

- **Security**:  
  - Password hashing with **bcrypt**.  
  - Secure cookie storage for tokens.  
  - Expiry-based token validation.  

- **Scalability**:  
  - Modular architecture for controllers, models, routes, and utilities.  
  - MongoDB aggregation with pagination.  

---

## **Project Structure**

```plaintext
project-directory
├── src
│   ├── controllers
│   │   ├── user.controller.js        # Handles user operations
│   │   └── video.controller.js       # Handles video operations
│   ├── models
│   │   ├── user.model.js             # User schema and methods
│   │   └── video.model.js            # Video schema and methods
│   ├── routes
│   │   ├── user.routes.js            # Routes for user-related operations
│   │   └── video.routes.js           # Routes for video-related operations
│   ├── middlewares
│   │   ├── multer.middleware.js      # File upload handling
│   │   └── auth.middleware.js        # Authentication middleware
│   ├── utils
│   │   ├── ApiResponse.js            # Response wrapper
│   │   ├── ApiError.js               # Custom error handling
│   │   ├── asyncHandler.js           # Async error handling
│   │   └── cloudinary.js             # Cloudinary configuration
│   ├── config
│   │   └── db.js                     # MongoDB connection setup
│   ├── app.js                        # Express app setup
├── package.json                      # Project dependencies
├── .env                              # Environment variables
├── .gitignore                        # Files to ignore in Git
└── README.md                         # Project documentation
```

---

## **Setup Instructions**

### **1. Clone the repository**
```bash
git clone <repository-url>
cd project-directory
```

### **2. Install dependencies**
```bash
npm install
```

### **3. Configure environment variables**
- Create a `.env` file in the root directory.
- Add the following variables:
```plaintext
PORT=8000
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net
CORS_ORIGIN=*

ACCESS_TOKEN_EXPIRY=1d
ACCESS_TOKEN_SECRET=
REFRESH_TOKEN_SECRET=
REFRESH_TOKEN_EXPIRY=

CLOUDINARY_CLOUD_NAME=dll6ruqj2
CLOUDINARY_API_KEY=573812851338754
CLOUDINARY_API_SECRET=gcMkfvLracADh2zQHV1H7g8vvJs
```

### **4. Start the server**
```bash
npm start
```
The API will run on `http://localhost:8000`.

---

## **API Endpoints**

### **User Routes** (`/api/v1/users`)
1. **Register a New User**  
   **POST** `/register`  
   - Body Parameters:
     ```json
     {
       "fullName": "John Doe",
       "email": "johndoe@example.com",
       "username": "john_doe",
       "password": "password123"
     }
     ```
   - Requires `avatar` (image file) and `coverImage` (optional).

2. **Login User**  
   **POST** `/login`  
   - Body Parameters:
     ```json
     {
       "email": "johndoe@example.com",
       "password": "password123"
     }
     ```

3. **Logout User**  
   **POST** `/logout`  
   - Requires valid access token.

4. **Refresh Access Token**  
   **POST** `/refresh-token`  
   - Requires valid refresh token.

---

### **Video Routes** (`/api/v1/videos`)  
1. **Upload a Video**  
   **POST** `/upload`  
   - Body Parameters:
     ```json
     {
       "title": "Sample Video",
       "description": "A description of the video",
       "duration": 300
     }
     ```
   - Requires `videoFile` (file) and `thumbnail` (file).

2. **Get All Videos**  
   **GET** `/`  
   - Query Parameters (optional): `page`, `limit`, `sort`.

---

## **Deployment**

1. **Prepare Environment**:
   - Ensure `.env` is correctly configured for the production server.

2. **Choose a Hosting Platform**:
   - [Heroku](https://devcenter.heroku.com/articles/deploying-nodejs)
   - [AWS](https://aws.amazon.com/elasticbeanstalk/)
   - [Vercel](https://vercel.com/)

3. **Run the application**:
   ```bash
   npm start
   ```

---

## **Future Enhancements**

- Add **video analytics** (e.g., views, likes).
- Implement **user roles** (e.g., admin, viewer).
- Add **commenting and social sharing** features for videos.
- Extend API documentation with tools like **Swagger**.

---



