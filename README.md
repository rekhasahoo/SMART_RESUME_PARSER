# 🧠 AI-Powered Resume Screener

This project provides a **full-stack solution** for automating the initial stages of the recruitment pipeline.  
It leverages a **Large Language Model (LLM)** to perform semantic analysis and matching between candidate resumes and a given job description.

The system calculates a **compatibility score** and provides a **qualitative justification**, enabling recruiters to efficiently prioritize candidates.

---

## 🏗️ System Architecture

The application is built on a **decoupled client-server architecture**:

### 🔹 Frontend
A static single-page application built with:
- **HTML**
- **Tailwind CSS**
- **JavaScript**

### 🔹 Backend
A **Node.js** server using **Express.js** REST API to handle:
- Business logic  
- Database communication

### 🔹 Database
- **MySQL** database for persistent storage of screening results.

### 🔹 External Service
- **Google Gemini API** is used for core **AI/LLM-based analysis**.

---

## ⚙️ Core Features

- **📂 File Ingestion:** Supports multi-file uploads for candidate resumes (`.pdf` and `.txt` formats).
- **🧩 Semantic Analysis:** Uses LLM to intelligently compare resume text with job descriptions.
- **📊 Quantitative Scoring:** Assigns a score (1–10) based on skill and experience alignment.
- **💬 Qualitative Justification:** Generates a concise rationale highlighting candidate strengths and weaknesses.
- **🗄️ Data Persistence:** Archives all screening results in a MySQL database for record-keeping and future analysis.

---

## 🧰 Technology Stack

| Tier | Technology |
|------|-------------|
| **Frontend** | HTML, Tailwind CSS, JavaScript |
| **Backend** | Node.js, Express.js |
| **Database** | MySQL |
| **AI Service** | Google Gemini API |

---

## 🛠️ Setup and Installation

### 🔑 Prerequisites

Ensure you have the following installed:
- [Node.js (v18.x or later)](https://nodejs.org/)
- npm (Node Package Manager)
- [MySQL Server & MySQL Workbench](https://dev.mysql.com/downloads/)
- [Git](https://git-scm.com/)

---

### 📥 Installation Steps

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd <repository-folder>
2. **Install backend dependencies:**

```bash
 npm install
```
3. **Database Setup:**

- Connect to your MySQL instance.

- Create a new schema (database) named:
```bash
CREATE DATABASE resume_screener;
```
- Execute the following SQL script to create the required table:
```bash
CREATE TABLE screening_results (
    id INT AUTO_INCREMENT PRIMARY KEY,
    candidate_name VARCHAR(255) NOT NULL,
    match_score INT NOT NULL,
    justification TEXT,
    job_description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

4. **Configuration:**

- In server.js, update the database connection object with your MySQL credentials (especially the password).

- In index.html, locate the apiKey constant and insert your Google Gemini API key (if running outside the original development environment).

## 🚀 Running the Application

- Start the backend server:
```bash
node server.js
```

The server will be running at:
👉 http://localhost:3000

- Launch the frontend:

Open the index.html file directly in your web browser.
