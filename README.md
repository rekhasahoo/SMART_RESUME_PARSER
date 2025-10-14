AI-Powered Resume Screener
This project is a web application that uses a Large Language Model (LLM) to intelligently parse resumes, compare them against a job description, and provide a match score with a detailed justification.

Features
Upload multiple resumes (.pdf or .txt).

Input a job description.

Uses the Gemini API for semantic matching and scoring.

Saves screening results to a MySQL database.

Tech Stack
Frontend: HTML, Tailwind CSS, JavaScript

Backend: Node.js, Express.js

Database: MySQL

AI: Google Gemini API

How to Run
Clone the repository.

Run npm install.

Set up your MySQL database and update the password in server.js.

Run the server with node server.js.

Open the index.html file in your browser.