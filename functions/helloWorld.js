// myRouteHandler.js

// Import necessary modules
const express = require('express');

// Create an instance of the Express Router
const router = express.Router();

// Define a route handler function
router.get('/', (req, res) => {
    // Respond with a JSON message
    res.json({ message: 'Hello, World!' });
});

// Export the router
module.exports = router;
