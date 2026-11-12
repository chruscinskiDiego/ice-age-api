# Ice Age API

Node.js practice API for managing movies and characters from the Ice Age franchise.

## Features

- Lists movies and characters and retrieves them by ID.
- Creates, updates and deletes records.
- Uses Mongoose models and field validation.

## Technologies

Node.js, Express, MongoDB and Mongoose.

## Run locally

Provide a development MongoDB instance. Use a Node.js version that supports --env-file.

```bash
npm ci
cp .env.example .env
# Set MONGODB_URI to your development database.
node --env-file=.env src/index.js
```

The server uses port 3000. Without MONGODB_URI, it connects to a local database at 127.0.0.1:27017/ice_age.

## HTTP resources

| Resource | Operations |
| --- | --- |
| /films | GET and POST |
| /films/:id | GET, PUT and DELETE |
| /characters | GET and POST |
| /characters/:id | GET, PUT and DELETE |

## Structure

- `src/index.js`: startup and connection.
- `src/models/`: movie and character schemas.
- `src/routes/`: endpoints.

## Scope

CRUD and MongoDB persistence exercise. The npm test script is a placeholder. Authentication is not implemented, and error handling needs review before public exposure. node_modules is versioned; .gitignore prevents new local files from being added but does not remove files already tracked.
