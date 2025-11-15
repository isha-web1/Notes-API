# 📒 Notes-API

A robust, secure, and scalable API for creating, managing, and accessing notes. Built for speed, reliability, and ease of integration, Notes-API empowers developers to build note-taking applications, collaborate, and organize information efficiently.

---

## 🚀 Features

- **User Authentication & Authorization**
  - Register/Login endpoints with hashed password storage.
  - JWT-based authentication for secure access.
  - Role management (admin, user, guest).

- **Notes CRUD Operations**
  - Create, Read, Update, Delete notes with RESTful endpoints.
  - Rich text support for notes content.
 
  

- **Security**
  - Input validation and sanitization.
  - Rate limiting and brute-force protection for login.
  - HTTPS enforced (when deployed).

- **Developer Friendly**
  - OpenAPI/Swagger documentation.
  - Well-structured endpoints for easy integration.
  - Sample code and quick start guides.


---

## 🔧 Tech Stack

| Language  | Usage                       |
|-----------|----------------------------|
| Node.js   | API server & backend logic |
| NestJs    | moduler , middleware       |
| sqlite    | Data storage               |
| JWT/Auth  | Secure authentication      |         |
| Swagger   | API docs                   |





## 📝 API Endpoints

| Method | Endpoint             | Description                    | Auth Required |
|--------|----------------------|--------------------------------|--------------|
| POST   | `/auth/register`     | Register new user              | ❌           |
| POST   | `/auth/login`        | User login                     | ❌           |
| GET    | `/notes`             | List all notes                 | ✅           |
| POST   | `/notes`             | Create a new note              | ✅           |
| GET    | `/notes/:id`         | Get note details               | ✅           |
| PATCH  | `/notes/:id`         | Update a note                  | ✅           |
| DELETE | `/notes/:id`         | Delete a note                  | ✅           |
| POST   | `/notes/:id/share`   | Share note with other users    | ✅           |



---

> _Built with ❤️ by [isha-web1](https://github.com/isha-web1)_
