# Auth Service

**Part of [Airline Booking & Operations Backend](https://github.com/hussainaabid99/AirTicketBookingService)**

## 🔗 Related Microservices

- [API Gateway](https://github.com/hussainaabid99/API_Gateway) - Service routing and authentication
- [Flights & Search Service](https://github.com/hussainaabid99/FlightsAndSearchService) - Flight catalog and search
- [Air Ticket Booking Service](https://github.com/hussainaabid99/AirTicketBookingService) - Booking orchestration
- [Reminder Service](https://github.com/hussainaabid99/ReminderService) - Notification management

## �� Overview

The Auth Service handles user authentication, registration, and authorization using JWT tokens and bcrypt password hashing. It provides secure user management with role-based access control.

## ✨ Features

- **User Registration**: Secure user account creation
- **JWT Authentication**: Token-based authentication system
- **Password Security**: Bcrypt hashing with salt
- **Role Management**: User roles and permissions
- **Token Validation**: JWT verification and user lookup

## 🛠️ Technology

- Node.js + Express.js
- JWT (jsonwebtoken)
- bcrypt for password hashing
- Sequelize ORM
- MySQL database

## 🚀 Quick Start

```bash
npm install
# Create .env file with required variables
npx sequelize db:create
npx sequelize db:migrate
npm start
```

## ⚙️ Configuration

### Environment Variables (.env)
```env
PORT=3001
JWT_KEY=your_jwt_secret_key
```

### Database Configuration
Create `src/config/config.json`:
```json
{
  "development": {
    "username": "your_db_username",
    "password": "your_db_password",
    "database": "auth_service_dev",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```

## �� API Endpoints

### Authentication
- `POST /api/v1/signup` - User registration
  - Body: `{ "email": "user@example.com", "password": "password123" }`
  - Response: User object with hashed password

- `POST /api/v1/signin` - User login
  - Body: `{ "email": "user@example.com", "password": "password123" }`
  - Response: JWT token

- `GET /api/v1/isAuthenticated` - Token validation
  - Header: `x-access-token: <jwt_token>`
  - Response: User ID if valid

- `POST /api/v1/isAdmin` - Admin role check
  - Body: `{ "id": 1 }`
  - Response: Boolean indicating admin status

## ��️ Database Models

### User Model
```javascript
{
  id: INTEGER (Primary Key),
  email: STRING (Unique, Email validation),
  password: STRING (Bcrypt hashed, min length 3),
  createdAt: DATE,
  updatedAt: DATE
}
```

### Role Model
```javascript
{
  id: INTEGER (Primary Key),
  name: STRING (Role name),
  createdAt: DATE,
  updatedAt: DATE
}
```

### User_Roles (Junction Table)
Many-to-many relationship between users and roles.

## 🔐 Security Features

- **Password Hashing**: Bcrypt with salt rounds
- **JWT Tokens**: Secure token-based authentication
- **Input Validation**: Request body validation middleware
- **Email Validation**: Built-in email format validation
- **Token Expiry**: 24-hour JWT expiration

## 🔄 Authentication Flow

1. **Registration**: User provides email/password → Password hashed → User created
2. **Login**: User provides credentials → Password verified → JWT generated
3. **Validation**: Token verified → User lookup → Response returned

## 🚨 Error Handling

- **400 Bad Request**: Missing email/password
- **401 Unauthorized**: Invalid credentials
- **500 Internal Server Error**: Database or service errors

## 🚀 Future Improvements

- Password reset functionality
- Email verification
- OAuth integration
- Refresh token mechanism
- Session management
- Audit logging

## 📝 Development Notes

- JWT tokens expire after 24 hours
- Password minimum length is 3 characters
- Email addresses must be unique
- Bcrypt salt is generated per process
- Role-based access control is extensible
