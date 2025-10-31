// Import express
const express = require('express');

// Create an app
const app = express();

// Define a simple route
app.get('/', (req, res) => {
  res.send('Hello World from Backend!');
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
