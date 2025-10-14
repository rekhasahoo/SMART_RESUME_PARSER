const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const port = 3000;

// --- Middleware ---
// Enable Cross-Origin Resource Sharing (CORS) to allow requests from the frontend
app.use(cors());
// Enable the server to parse incoming JSON data from request bodies
app.use(express.json());

// --- Database Connection ---
// Create a connection pool to the MySQL database
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', // IMPORTANT: Or your specific MySQL username
    password: 'Rashmi@6903', // IMPORTANT: Replace with your actual MySQL password
    database: 'resume_screener'
});

// Attempt to connect to the database
db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        // You might want to terminate the application if the DB connection fails
        return;
    }
    console.log('Connected to MySQL database successfully!');
});

// --- API Endpoint ---
// Define a POST endpoint to receive and save screening results
app.post('/api/save-result', (req, res) => {
    console.log('Received data to save:', req.body);

    // Destructure the expected data from the request body
    const { name, score, justification, jd } = req.body;
    
    // Basic validation to ensure required fields are present
    if (!name || score === undefined || !justification || !jd) {
        return res.status(400).json({ message: 'Missing required fields.' });
    }

    // SQL query to insert a new record into the screening_results table
    const sql = `INSERT INTO screening_results (candidate_name, match_score, justification, job_description) VALUES (?, ?, ?, ?)`;
    const values = [name, score, justification, jd];

    // Execute the query
    db.query(sql, values, (err, result) => {
        if (err) {
            console.error('Error saving to database:', err);
            return res.status(500).json({ message: 'Failed to save result to the database.' });
        }
        console.log('Screening result saved with ID:', result.insertId);
        res.status(201).json({ message: 'Result saved successfully!' });
    });
});

// --- Start the Server ---
// Start the Express server and listen for incoming connections on the specified port
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
