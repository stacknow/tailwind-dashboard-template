// myRouteHandler.js

// Import necessary modules
import express from 'express';

// Create an instance of the Express Router
const router = express.Router();

// Define a route handler function
router.get('/', (req, res) => {
    // Respond with a JSON message
    res.json({ message: 'Hello, World!' });
});

// Export the router
export default router;
