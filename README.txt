mkdir backend
cd backend
npm init -y
npm install express

create index.js file
  index.js file code
  {
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
  }

node index.js

git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/sryagit/backend1.git
git branch -M main
git push -u origin main --force

open render.com and configure
https://backend1-wvtt.onrender.com


