const path = require('path');
const express = require('express');
const app = express();

// Serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Catch all route to serve the index.html for any non-API routes
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

// Example API routes
app.post('/api/signup', (req, res) => {
  // Signup logic here
});

app.post('/api/login', (req, res) => {
  // Login logic here
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
