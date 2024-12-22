# **Node.js Video Streaming and Social Interaction API**

This project is a comprehensive RESTful API built with **Node.js** and **MongoDB**, offering features for video streaming, user management, social interactions (like comments, likes, and tweets), and subscription handling. The application includes secure authentication mechanisms using **JWT**, integrates **Cloudinary** for media storage, and ensures scalability and maintainability with its modular architecture.

---

## **Features**

### **Video Management**
- Upload, retrieve, update, and delete videos with metadata.
- Manage video visibility (publish/unpublish).
- Track watch history for users.

### **User Management**
- Register, login, logout, and update account details.
- Change passwords securely.
- Manage user avatars and cover images.
- Fetch user channel profiles with subscription details.

### **Social Interactions**
- Like and unlike videos, comments, and tweets.
- Add, update, and delete comments on videos.
- Create, retrieve, update, and delete tweets.

### **Subscriptions**
- Subscribe to channels and manage subscriptions.
- Retrieve lists of subscribers and subscribed channels.

### **Playlists**
- Create, update, and delete playlists.
- Add and remove videos from playlists.
- Fetch user-specific playlists and their details.

### **Dashboard and Analytics**
- Fetch channel statistics (total views, subscribers, videos, likes).
- Retrieve all videos uploaded by a user.

### **Health Check**
- Simple endpoint to verify the health of the API.

---

## **Project Structure**

```plaintext
project-directory
├── src
│   ├── controllers
│   │   ├── comment.controller.js        # Handles comment operations
│   │   ├── dashboard.controller.js      # Handles dashboard analytics
│   │   ├── healthcheck.controller.js    # Healthcheck endpoint
│   │   ├── like.controller.js           # Handles like/unlike operations
│   │   ├── playlist.controller.js       # Manages playlists
│   │   ├── subscription.controller.js   # Handles subscriptions
│   │   ├── tweet.controller.js          # Manages tweets
│   │   └── user.controller.js           # User account and profile operations
│   ├── db
│   │   ├── index.js 
│   ├── middlewares
│   │   ├── auth.middleware.js           # JWT authentication middleware
│   │   └── multer.middleware.js         # File upload handling
│   ├── models
│   │   ├── comment.model.js             # Comment schema
│   │   ├── like.model.js                # Like schema
│   │   ├── playlist.model.js            # Playlist schema
│   │   ├── subscription.model.js        # Subscription schema
│   │   ├── tweet.model.js               # Tweet schema
│   │   ├── user.model.js                # User schema
│   │   └── video.model.js               # Video schema
│   ├── routes
│   │   ├── comment.routes.js            # Comment-related routes
│   │   ├── dashboard.routes.js          # Dashboard analytics routes
│   │   ├── healthcheck.routes.js        # Healthcheck endpoint route
│   │   ├── like.routes.js               # Like-related routes
│   │   ├── playlist.routes.js           # Playlist-related routes
│   │   ├── subscription.routes.js       # Subscription-related routes
│   │   ├── tweet.routes.js              # Tweet-related routes
│   │   └── user.routes.js               # User-related routes
│   ├── utils
│   │   ├── ApiResponse.js               # Standardized API response
│   │   ├── ApiError.js                  # Custom error handling
│   │   ├── asyncHandler.js              # Wrapper for async functions
│   │   └── cloudinary.js                # Cloudinary integration
│   ├── app.js                           # Express app setup
│   ├── constants.js                     # MongoDB connection setup
│   ├── index.js                         # Application-wide constants
├── .env                                 # Environment variables
├── package.json                         # Project dependencies
├── .gitignore                           # Files to ignore in Git
├── README.md                            # Project documentation
└── public                               # Public assets
```

---

## **Setup Instructions**

### **1. Clone the Repository**
```bash
git clone <repository-url>
cd project-directory
```

### **2. Install Dependencies**
```bash
npm install
```

### **3. Configure Environment Variables**
- Create a `.env` file in the root directory.
- Add the following variables:
```plaintext
PORT=8000
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net
CLOUDINARY_CLOUD_NAME=<your-cloudinary-cloud-name>
CLOUDINARY_API_KEY=<your-cloudinary-api-key>
CLOUDINARY_API_SECRET=<your-cloudinary-api-secret>
ACCESS_TOKEN_SECRET=<your-access-token-secret>
ACCESS_TOKEN_EXPIRY=1d
REFRESH_TOKEN_SECRET=<your-refresh-token-secret>
REFRESH_TOKEN_EXPIRY=10d
CORS_ORIGIN=*
```

### **4. Start the Server**
```bash
npm start
```
The API will run on `http://localhost:8000`.

---

## **Key Endpoints**

### **User Routes** (`/api/v1/users`)
- `POST /register`: Register a new user.
- `POST /login`: Login a user.
- `POST /logout`: Logout a user.
- `PATCH /update-account`: Update account details.
- `GET /current-user`: Fetch the current user's details.
- `GET /c/:username`: Fetch a user's channel profile.
- `GET /watch-history`: Retrieve a user's watch history.

### **Video Routes** (`/api/v1/videos`)
- `POST /`: Upload a new video.
- `GET /`: Retrieve all videos with pagination and filters.
- `GET /:videoId`: Get details of a specific video.
- `PATCH /:videoId`: Update video details.
- `DELETE /:videoId`: Delete a video.
- `PATCH /toggle/publish/:videoId`: Toggle video publish status.

### **Playlist Routes** (`/api/v1/playlists`)
- `POST /`: Create a new playlist.
- `GET /user/:userId`: Fetch all playlists of a user.
- `GET /:playlistId`: Get details of a specific playlist.
- `PATCH /:playlistId`: Update a playlist.
- `DELETE /:playlistId`: Delete a playlist.
- `PATCH /add/:videoId/:playlistId`: Add a video to a playlist.
- `PATCH /remove/:videoId/:playlistId`: Remove a video from a playlist.

### **Comment Routes** (`/api/v1/comments`)
- `GET /:videoId`: Retrieve all comments for a video.
- `POST /:videoId`: Add a comment to a video.
- `PATCH /c/:commentId`: Update a comment.
- `DELETE /c/:commentId`: Delete a comment.

### **Subscription Routes** (`/api/v1/subscriptions`)
- `POST /c/:channelId`: Subscribe to or unsubscribe from a channel.
- `GET /u/:subscriberId`: Retrieve a channel's subscribers.
- `GET /c/:channelId`: Retrieve channels a user has subscribed to.

### **Like Routes** (`/api/v1/likes`)
- `POST /toggle/v/:videoId`: Like/unlike a video.
- `POST /toggle/c/:commentId`: Like/unlike a comment.
- `POST /toggle/t/:tweetId`: Like/unlike a tweet.
- `GET /videos`: Retrieve videos liked by the user.

### **Dashboard Routes** (`/api/v1/dashboard`)
- `GET /stats`: Fetch channel statistics.
- `GET /videos`: Retrieve videos uploaded by a user.

### **Tweet Routes** (`/api/v1/tweets`)
- `POST /`: Create a tweet.
- `GET /user/:userId`: Retrieve a user's tweets.
- `PATCH /:tweetId`: Update a tweet.
- `DELETE /:tweetId`: Delete a tweet.

### **Healthcheck Route** (`/api/v1/healthcheck`)
- `GET /`: Verify API health status.

---

## **Future Enhancements**

- Implement role-based access control (e.g., admin, user).
- Add analytics for user engagement (e.g., most-liked videos, trending tweets).
- Integrate a recommendation engine for videos.
- Enhance API documentation using Swagger or Postman.



