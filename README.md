# Mini Portfolio API

A simple Node.js + Express API that returns JSON about my portfolio.

## How to Run

```bash
npm install
node index.js
```

Server runs on http://localhost:3000

## Example Endpoints

**GET /api/about**
Returns basic info about me.

**GET /api/projects**
Returns my projects.

**POST /api/projects**
Add a new project. Send JSON with title, description, and tech array.

**GET /api/favorites**
Returns my favorite languages, frameworks, and tools.
