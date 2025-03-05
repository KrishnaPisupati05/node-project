const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the "public" folder
app.use(express.static('public'));

// Basic route
app.get('/', (req, res) => {
  res.send('<h1>Hello from Azure Static Web App with Node.js!</h1>');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
