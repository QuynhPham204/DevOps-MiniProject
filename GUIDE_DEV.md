# DevOps Project - Development Guide

## Setup Local Environment

```bash
# Install dependencies
cd backend
npm install

# Configure environment
cp .env.example .env
# Edit .env with your database credentials
```

## Available Commands

### Backend

```bash
npm start        # Start production server
npm run dev      # Start with nodemon (development)
```

### Docker

```bash
docker-compose up --build      # Start all services
docker-compose down            # Stop all services
docker-compose logs -f         # View logs
```

## Testing API

### Health Check

```bash
curl http://localhost:3000/health
```

### About Endpoint

```bash
curl http://localhost:3000/about
```

### Get Students

```bash
curl http://localhost:3000/api/students
```

### Add Student

```bash
curl -X POST http://localhost:3000/api/students \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Jane Smith",
    "email": "jane@example.com",
    "phone": "0123456789",
    "major": "Machine Learning"
  }'
```

## Database Credentials

- Host: localhost (or 'db' when using Docker)
- User: root
- Password: Phamnguyennhuquynh15@
- Database: devops_mini_project_db

## Environment Variables

- PORT: Backend server port (default: 3000)
- DB_HOST: Database host
- DB_USER: Database user
- DB_PASSWORD: Database password
- DB_NAME: Database name
- APP_NAME: Application name
- STUDENT_NAME: Student full name
- STUDENT_ID: Student ID
- STUDENT_CLASS: Student class
