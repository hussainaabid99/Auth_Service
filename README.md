# Auth Service

User authentication and authorization microservice for the Airline Booking & Operations Backend.

## �� Related Services

- [Flights & Search Service](https://github.com/hussainaabid99/FlightsAndSearchService.git) (Root Repository)
- [Air Ticket Booking Service](https://github.com/hussainaabid99/AirTicketBookingService.git)
- [Reminder Service](https://github.com/hussainaabid99/ReminderService.git)
- [API Gateway](https://github.com/hussainaabid99/API_Gateway.git)

## �� Features

- **User Management**: User registration, login, and profile management
- **Role-Based Access Control**: Admin and customer role management
- **JWT Authentication**: Secure token-based authentication
- **Input Validation**: Comprehensive request validation
- **Error Handling**: Structured error responses

## �� API Endpoints

- `POST /api/v1/signup` - User registration
- `POST /api/v1/signin` - User login
- `GET /api/v1/users/:id` - Get user profile
- `PUT /api/v1/users/:id` - Update user profile
- `DELETE /api/v1/users/:id` - Delete user account

## 🛠️ Tech Stack

- Node.js, Express.js
- MySQL with Sequelize ORM
- JWT for authentication
- Express-validator for input validation
- Custom error handling middleware

## �� Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Configure environment variables
4. Run migrations: `npm run migrate`
5. Seed roles: `npm run seed`
6. Start service: `npm start`

---

**Part of**: Airline Booking & Operations Backend
