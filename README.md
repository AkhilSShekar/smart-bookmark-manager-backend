# 📑 Bookmark Manager - Full Stack Web Application

**Bookmark Manager** is a robust RESTful application designed to help users organize and manage their digital resources efficiently. Built with the **MERN Stack**, it features a clean architecture that separates concerns between a scalable Node.js backend and a dynamic database layer, ensuring fast performance and reliable data persistence.

## 🚀 Features

* **Full CRUD Functionality:** Seamlessly Create, Read, Update, and Delete bookmarks via a dedicated API.
* [cite_start]**Persistent Storage:** Integrated with **MongoDB Atlas** for secure, cloud-based data management[cite: 1].
* **Automated Data Tracking:** Utilizes Mongoose timestamps to automatically track when bookmarks are added or modified.
* [cite_start]**Global Error Handling:** Custom middleware captures errors across the application to provide consistent JSON responses[cite: 1].
* **Input Validation:** Built-in schema validation ensures every bookmark has a required title and a valid URL.
* [cite_start]**Cross-Origin Support:** Configured with **CORS** to allow secure communication with frontend applications[cite: 1].

## 🛠️ Tech Stack

* [cite_start]**Backend:** Node.js, Express.js [cite: 1]
* [cite_start]**Database:** MongoDB, Mongoose (ODM) [cite: 1]
* [cite_start]**Environment Management:** Dotenv [cite: 1]
* [cite_start]**Middleware:** CORS, Express JSON Parser [cite: 1]

## 📋 API Reference

The backend exposes a clean API at `/api/bookmarks`.

| Method | Endpoint | Function |
| :--- | :--- | :--- |
| **GET** | `/api/bookmarks` | Retrieve all bookmarks (Newest first) |
| **POST** | `/api/bookmarks` | Create a new bookmark entry |
| **PUT** | `/api/bookmarks/:id` | Update an existing bookmark's details |
| **DELETE** | `/api/bookmarks/:id` | Remove a bookmark from the database |

### Sample Payload
```json
{
  "title": "Portfolio",
  "url": "[https://akhilshekar.dev](https://akhilshekar.dev)"
}
```
## ⚙️ Installation & Setup

Follow these steps to get your development environment running locally.

### Prerequisites
* **Node.js**: v16.x or higher installed.
* **npm**: (comes with Node.js) or **yarn**.
* **MongoDB**: A local instance or a [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) cloud database.

### 1. Clone the Repository
```bash
git clone [https://github.com/your-username/bookmark-manager.git](https://github.com/your-username/bookmark-manager.git)
cd bookmark-manager
```

### 2. Install Dependencies

Install the necessary Node.js packages required for the backend, including Express, Mongoose, and Dotenv:

```bash
npm install
# or
yarn install
```

### 3. Environment Configuration

Create a `.env` file in the root directory to store your sensitive credentials. This ensures your database URI and port settings are managed securely.

1. Create the file:
   ```bash
   PORT=5000
   MONGO_URI=mongodb+srv://akhilshekar1_db_user:tl2ve6CHVW2hotG6@cluster0.t6dxivf.mongodb.net/?appName=bookmark-manager
   ```

## 4. Run the Application

You can start the server using the following commands depending on your environment.

### Development Mode
If you have `nodemon` installed, use this command to automatically restart the server whenever you make code changes:
```bash
npm run dev
```
## 📂 Project Structure

The project follows a modular architecture to separate concerns, making the codebase easier to maintain and scale.

```text
bookmark-manager-backend/
├── config/
│   └── db.js                # MongoDB connection configuration
├── controllers/
│   └── bookmarkController.js # Logic for handling API requests
├── models/
│   └── Bookmark.js           # Mongoose schema and model definition
├── routes/
│   └── bookmarkRoutes.js     # API endpoint definitions and routing
├── .env                     # Environment variables (Port, MongoDB URI)
├── .gitignore               # Files and folders to ignore in Git
├── package.json             # Project dependencies and scripts
└── server.js                # Main entry point and middleware setup
```

