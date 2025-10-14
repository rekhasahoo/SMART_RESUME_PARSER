AI-Powered Resume Screener
Overview
This project provides a full-stack solution for automating the initial stages of the recruitment pipeline. It leverages a Large Language Model (LLM) to perform semantic analysis and matching between candidate resumes and a given job description. The system calculates a compatibility score and provides a qualitative justification, enabling recruiters to efficiently prioritize candidates.

System Architecture
The application is built on a decoupled client-server architecture:

Frontend: A static single-page application built with vanilla HTML, CSS (Tailwind), and JavaScript that serves as the user interface.

Backend: A Node.js server with an Express.js REST API that handles business logic and database communication.

Database: A MySQL database for persistent storage of screening results.

External Service: The Google Gemini API is used for the core AI/LLM-based analysis.

Core Features
File Ingestion: Supports multi-file uploads for candidate resumes in .pdf and .txt formats.

Semantic Analysis: Utilizes an LLM to intelligently compare the unstructured text of a resume against a job description.

Quantitative Scoring: Assigns a numerical score (1-10) to each candidate based on skill and experience alignment.

Qualitative Justification: Generates a concise rationale for each score, highlighting candidate strengths and weaknesses.

Data Persistence: Archives all screening results in a MySQL database for record-keeping and future analysis.

Technology Stack
Tier

Technology

Frontend

HTML, Tailwind CSS, JavaScript

Backend

Node.js, Express.js

Database

MySQL

AI Service

Google Gemini API

Setup and Installation
Prerequisites
Node.js (v18.x or later)

npm (Node Package Manager)

MySQL Server & MySQL Workbench

Git

Installation Steps
Clone the repository:

git clone <repository-url>
cd <repository-folder>

Install backend dependencies:

npm install

Database Setup:

Connect to your MySQL instance.

Create a new schema (database) named resume_screener.

Execute the following SQL script to create the required table:

CREATE TABLE screening_results (
    id INT AUTO_INCREMENT PRIMARY KEY,
    candidate_name VARCHAR(255) NOT NULL,
    match_score INT NOT NULL,
    justification TEXT,
    job_description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

Configuration:

In server.js, update the db connection object with your MySQL credentials (specifically the password).

In index.html, locate the apiKey constant and insert your Google Gemini API key if running outside the original development environment.

Running the Application
Start the backend server:

node server.js

The server will be running on http://localhost:3000.

Launch the frontend:

Open the index.html file directly in your web browser.
