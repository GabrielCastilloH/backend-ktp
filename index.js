const express = require("express");
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// In-memory "database"
const personalInfo = {
  name: "Gabriel Castillo",
  major: "Computer Science",
  year: "2028",
  hometown: "Ithaca, NY",
};

let projects = [
  {
    title: "Harbor – Cornell Dating App",
    description:
      "Launched largest dating app at Cornell gaining over 40 active users in the first week. Spearheaded full stack development with React Native (Expo), TypeScript and Firebase. Built secure photo reveal system with an intermediate consent screen using GCloud Storage Signed URLs. Helped build advanced AI recommendation system that learns from a users profile and who they swipe on.",
    tech: ["React Native", "TypeScript", "Firebase", "Expo", "GCloud Storage"],
  },
  {
    title: "Fyndz – Thriftstore Discovery and Review App",
    description:
      "Developed and shipped core frontend features using React Native and Expo, improving app responsiveness and UX. Designed and implemented reusable objects and classes that reduced code duplication by 20% improving performance. Collaborated with a 4-person engineering team using Agile practices, coordinating weekly sprints and code reviews. Added Firebase-based user authentication and Google Maps API integration to enrich app discovery features.",
    tech: ["React Native", "Expo", "Firebase", "Google Maps API"],
  },
  {
    title: "Odyssey – Interactive OCaml Theorem Prover",
    description:
      "Worked with 3 others to build propositional logic theorem prover with SAT solving and tautology check. Implemented recursive descent parser and AST interpreter in OCaml with 5 logical operators. Developed interactive CLI with ANSITerminal for colored output and step-by-step proof visualization. Added CNF conversion, DIMACS export, and LaTeX document generation for academic compatibility.",
    tech: ["OCaml", "SAT Solving", "Parser", "AST"],
  },
  {
    title: "LockedIn – iOS Swipe-Based Networking App",
    description:
      "Won best UI (out of 28 teams) at AppDev's Hack Challenge building a LinkedIn-Tinder hybrid native iOS app. Developed frontend with Swift and UIKit; integrated Firebase for auth and real time messaging and notifications. Helped create and design REST API with Flask, SQLAlchemy; used AWS S3 for image hosting.",
    tech: ["Swift", "UIKit", "Firebase", "Flask", "SQLAlchemy", "AWS S3"],
  },
];

const favorites = {
  languages: ["Swift", "TypeScript", "Python", "OCaml", "Java"],
  frameworks: ["React Native", "Expo", "Flask", "Firebase", "UIKit"],
  tools: ["AWS S3", "Google Maps API", "SQLAlchemy", "PyTorch"],
};

// GET /api/about - Return personal information
app.get("/api/about", (req, res) => {
  res.json(personalInfo);
});

// GET /api/projects - Return all projects
app.get("/api/projects", (req, res) => {
  res.json(projects);
});

// POST /api/projects - Add a new project
app.post("/api/projects", (req, res) => {
  const { title, description, tech } = req.body;

  if (!title || !description || !tech) {
    return res.status(400).json({
      error: "title, description, and tech are required",
    });
  }

  if (!Array.isArray(tech)) {
    return res.status(400).json({
      error: "tech must be an array",
    });
  }

  const newProject = {
    title,
    description,
    tech,
  };

  projects.push(newProject);
  res.status(201).json(newProject);
});

// GET /api/favorites - Return favorite tech stack, languages, and skills
app.get("/api/favorites", (req, res) => {
  res.json(favorites);
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
