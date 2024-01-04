// logicFunction.js

import fetch from 'node-fetch';

const logicFunction = async (req, res) => {
    try {
        const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1'; // Example public API endpoint
        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error(`API request failed with status: ${response.status}`);
        }

        const data = await response.json();
        res.json(data); // Send the API response as the HTTP response
    } catch (error) {
        console.error('Error in logicFunction:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export default logicFunction;
