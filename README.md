# Backend Setup Guide for FAQ System

This document will guide you through the steps to set up the backend for the EasyQuery. The setup includes database configuration, Redis integration, Docker setup, and resolving common issues.

### 1. **Prerequisites**
Ensure you have the following installed:
- **Node.js** (version 14+)
- **MySQL** (or use Docker to set up the database)
- **Redis** (or use Docker for Redis)
- **Docker** (for containerization)

### 2. **Clone the Repository**
Clone the backend repository to your local machine.

```bash
[git clone https://github.com/your-username/faq-system-backend.git](https://github.com/Surbhi-sinha/Multilingual_FAQ_system.git)
cd Multilingual_FAQ_system
```

### 3. **Install Dependencies**
Install all the required npm dependencies:

```bash
npm install
```

### 4. **Database Setup**
You can use MySQL either locally or in Docker.

#### **Local MySQL Setup**
1. Create a database named `EasyQuery` in MySQL.
2. Run the necessary migrations (if any).
3. Use the follwing SQL command to use the newly created DB and use it.
   ```
   create Database EasyQuery;
   use EasyQuery;
   ```


#### **Using Docker for Redis**
Please refer this vedio for the REDIS with DOCKER setup [Link](https://www.youtube.com/watch?v=iIe8feFP7us)

### 5. **Configure Environment Variables**
Ensure that your `.env` file has the following configurations:
```bash
DB_HOST=localhost
DB_NAME=EasyQuery
DB_USER=root
DB_PASS=Easyquery123456
JWT_SECRET=EasyQuery-secret-key
```

### 6. **Run the Application**
Start the application in development mode:

```bash![Screenshot 2025-02-02 232628](https://github.com/user-attachments/assets/3336edd4-b0c5-4024-b204-478707036d73)

npm run dev
```

If you’re running in production, use:
```bash
npm start
```

### 7. **Common Issues and Fixes**

- **Database Connection Errors**:
   - Check that MySQL and Redis containers are running (`docker ps`).
   - Ensure that database credentials in `.env` are correct.

- **CORS Issues**:
   - If you're getting CORS errors, make sure your backend server allows cross-origin requests from the frontend (use CORS middleware in Express).

- **JWT Authorization Errors**:
   - Ensure that the JWT token is passed in the request header as `Authorization: Bearer <token>`.
   - Verify the `JWT_SECRET` in `.env` matches the one used during login.

- **Redis Cache Not Working**:
   - Ensure Redis is running and properly connected.
   - Make sure the `REDIS_HOST` and `REDIS_PORT` in `.env` are correctly configured.

---

### 8. Rest API and there Expected Response:-
1. USER registeration API :- **http://localhost:5000/api/auth/register**
![Screenshot 2025-02-02 232730](https://github.com/user-attachments/assets/575ee17b-580d-4fed-bff1-e3713bc70a1b)

2. USER login API :- **http://localhost:5000/api/auth/login**
![Screenshot 2025-02-02 232702](https://github.com/user-attachments/assets/d2135618-4722-4fbd-a87b-9c52a89a837a)

3. FAQ post API :- http://localhost:5000/api/faqs
![Screenshot 2025-02-02 232730](https://github.com/user-attachments/assets/e45fca43-594e-4e94-9c86-3051350dab85)

4. FAQ get API :- http://localhost:5000/api/faqs
![Screenshot 2025-02-02 185254](https://github.com/user-attachments/assets/33a1da46-1cf7-4b98-9038-537430cc2017)

5. FAQ get API (Bengali) :- http://localhost:5000/api/faqs/?lang=bn
![Screenshot 2025-02-02 185043](https://github.com/user-attachments/assets/ed9db534-d9bb-4c64-8700-18d535ac164e)

6. FAQ get API(Hindi) :- http://localhost:5000/api/faqs?lang=hi
![Screenshot 2025-02-02 185317](https://github.com/user-attachments/assets/1a23480b-7da5-4788-9f3d-9adda1d08e5f)

7. FAQ get API using Redis:- http://localhost:5000/api/faqs
![Screenshot 2025-02-02 185440](https://github.com/user-attachments/assets/94be1efa-bb4e-4281-902d-e0ae75b8b389)

8. FAQ get API (Bengali) using Redis :- http://localhost:5000/api/faqs/?lang=bn
![Screenshot 2025-02-02 185505](https://github.com/user-attachments/assets/fe32f873-99f1-4c90-918b-b249c02e441d)

9. FAQ get API(Hindi) using Redis :- http://localhost:5000/api/faqs?lang=hi
![Screenshot 2025-02-02 185524](https://github.com/user-attachments/assets/0fc14918-0f66-4406-a487-30ed46d03727)

10. Redis in memory Storage structure:-
 ![Screenshot 2025-02-02 185643](https://github.com/user-attachments/assets/24e0a92b-3e88-4279-8d99-6f5739799116)
![Screenshot 2025-02-02 185737](https://github.com/user-attachments/assets/2a8b84a8-18dc-4cd4-b00f-f057b8dc4dfb)


### UI of the Requests:- Please refer the UI [Link](https://github.com/Surbhi-sinha/Multilingual_FAQ_system_UI)
