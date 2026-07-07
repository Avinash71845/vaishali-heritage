# Vaishali Heritage Travel Platform — Backend

Spring Boot REST API backend for the Vaishali Heritage Travel Platform, backed by MongoDB Atlas and secured with JWT.

## Tech Stack

- Java 17
- Spring Boot 3.3 (Web, Security, Validation, Data MongoDB, WebFlux for AI calls)
- MongoDB Atlas (Spring Data MongoDB)
- JWT (jjwt) for stateless authentication
- BCrypt for password hashing
- Maven

## Project Structure

```
src/main/java/com/vaishali/heritage
├── config          SecurityConfig, WebClientConfig, DataSeeder
├── controller      REST controllers
├── dto
│   ├── request     Request payload DTOs
│   └── response    Response payload DTOs
├── exception       Custom exceptions + GlobalExceptionHandler
├── model           MongoDB documents (User, Place, Hotel, Review, Trip, ChatMessage)
├── repository      Spring Data MongoDB repositories
├── security        JwtUtil, JwtAuthenticationFilter, UserPrincipal, CustomUserDetailsService
├── service         Business logic layer
└── util            SecurityUtils
```

## Setup

1. Copy `.env.example` to `.env` and fill in your values, or export them directly as environment variables.

```bash
cp .env.example .env
```

2. Create a free MongoDB Atlas cluster and grab the connection string, or run MongoDB locally on `mongodb://localhost:27017`.

3. Run the app:

```bash
mvn clean install
mvn spring-boot:run
```

The API starts on `http://localhost:8080`.

On first run, `DataSeeder` automatically inserts the 6 Vaishali landmarks and 3 hotels into MongoDB so the API is usable immediately.

## Environment Variables

| Variable | Description | Default |
|---|---|---|
| `MONGODB_URI` | MongoDB Atlas / local connection string | `mongodb://localhost:27017/vaishali_heritage` |
| `JWT_SECRET` | Secret key used to sign JWT tokens | dev placeholder, override in production |
| `JWT_EXPIRATION_MS` | Token validity in milliseconds | `86400000` (24h) |
| `AI_API_KEY` | API key for the AI provider (Anthropic) | empty — falls back to canned responses |
| `AI_API_URL` | AI provider endpoint | `https://api.anthropic.com/v1/messages` |
| `AI_MODEL` | Model name to call | `claude-sonnet-4-6` |
| `ALLOWED_ORIGINS` | Comma-separated CORS origins | `http://localhost:5173,http://localhost:3000` |

If `AI_API_KEY` is not set, `/api/ai/chat` and trip generation still work and return sensible fallback content instead of failing.

## API Reference

All responses are wrapped as:

```json
{ "success": true, "message": "Success", "data": { } }
```

### Auth

| Method | Endpoint | Auth | Description |
|---|---|---|---|
| POST | `/api/auth/register` | No | Register a new user |
| POST | `/api/auth/login` | No | Login, returns JWT |

Register body:
```json
{ "name": "Anjali Sharma", "email": "anjali@example.com", "password": "secret123" }
```

Login body:
```json
{ "email": "anjali@example.com", "password": "secret123" }
```

Response:
```json
{
  "success": true,
  "data": { "token": "eyJ...", "id": "...", "name": "Anjali Sharma", "email": "anjali@example.com", "roles": ["USER"] }
}
```

Use the token on protected routes:
```
Authorization: Bearer eyJ...
```

### Places

| Method | Endpoint | Auth | Description |
|---|---|---|---|
| GET | `/api/places` | No | List places, optional `?category=` and `?search=` |
| GET | `/api/places/{id}` | No | Get one place |
| POST | `/api/places` | Yes | Create a place |
| PUT | `/api/places/{id}` | Yes | Update a place |
| DELETE | `/api/places/{id}` | Yes | Delete a place |

### Hotels / Nearby Services

| Method | Endpoint | Auth | Description |
|---|---|---|---|
| GET | `/api/hotels` | No | List hotels, optional `?type=` |
| GET | `/api/hotels/{id}` | No | Get one hotel |
| POST | `/api/hotels` | Yes | Create a hotel |
| PUT | `/api/hotels/{id}` | Yes | Update a hotel |
| DELETE | `/api/hotels/{id}` | Yes | Delete a hotel |

### Reviews

| Method | Endpoint | Auth | Description |
|---|---|---|---|
| POST | `/api/reviews` | Yes | Submit a review (auto recalculates place rating) |
| GET | `/api/reviews/place/{id}` | No | Get all reviews for a place |
| GET | `/api/reviews` | No | Get all reviews (admin view) |
| DELETE | `/api/reviews/{id}` | Yes | Delete a review |

Review body:
```json
{ "placeId": "<place-id>", "rating": 5, "comment": "Amazing place!", "photos": [] }
```

### AI Tour Guide

| Method | Endpoint | Auth | Description |
|---|---|---|---|
| POST | `/api/ai/chat` | No (optional) | Ask the AI tour guide a question |
| GET | `/api/ai/chat/history/{sessionId}` | No | Get chat history for a session |

Chat body:
```json
{ "message": "Tell me about Ashokan Pillar", "sessionId": "optional-existing-session-id" }
```

### Trip Planner

| Method | Endpoint | Auth | Description |
|---|---|---|---|
| POST | `/api/trips/generate` | No (optional) | Generate an AI itinerary |
| GET | `/api/trips/{id}` | Yes | Get a saved trip |
| GET | `/api/trips/my` | Yes | Get logged-in user's trips |

Generate body:
```json
{ "days": 2, "budget": "Medium", "interests": ["History", "Buddhism"], "startingPoint": "Vaishali Railway Station" }
```

### Route Planner

| Method | Endpoint | Auth | Description |
|---|---|---|---|
| POST | `/api/routes/optimize` | No | Optimize visiting order for a list of place ids |

Body:
```json
{ "placeIds": ["id1", "id2", "id3"], "startingPoint": "Vaishali Railway Station" }
```

### Admin

| Method | Endpoint | Auth | Description |
|---|---|---|---|
| GET | `/api/admin/dashboard` | Admin | Dashboard stats (places, users, reviews, itineraries counts) |
| GET | `/api/admin/users` | Admin | List all users |
| PATCH | `/api/admin/users/{id}/toggle-status` | Admin | Activate / deactivate a user |
| DELETE | `/api/admin/users/{id}` | Admin | Delete a user |

To call admin routes, the logged-in user's `roles` must include `ADMIN`. Promote a user by editing the `roles` array directly in MongoDB (`["USER", "ADMIN"]`) until an admin-promotion endpoint is added.

## Testing with Postman

1. Import the endpoints above into a Postman collection, or use `curl`:

```bash
curl -X POST http://localhost:8080/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"name":"Test User","email":"test@example.com","password":"test1234"}'
```

2. Copy the returned `token` and set it as a Bearer token on protected requests.

3. Test the seeded data immediately:

```bash
curl http://localhost:8080/api/places
```

## Connecting the React Frontend

In the frontend's `.env`, set:

```
VITE_API_BASE_URL=http://localhost:8080/api
```

The frontend's `axios` service layer (`src/services/api.js`) already attaches the JWT token from `localStorage` on every request, matching this backend's `Authorization: Bearer <token>` expectation.

## Deployment Notes

- Backend: deploy the built jar (`mvn clean package` → `target/vaishali-heritage-backend.jar`) to Render or Railway, setting the environment variables above.
- Database: use MongoDB Atlas, whitelist the deployment platform's IP (or `0.0.0.0/0` for simplicity during development).
- Frontend: deploy to Vercel, pointing `VITE_API_BASE_URL` at the deployed backend URL.
