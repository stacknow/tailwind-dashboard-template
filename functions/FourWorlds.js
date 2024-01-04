import fetch from 'node-fetch';

const logicFunction = async (req, res) => {
    try {
        const apiUrl = 'https://api.flatfilemaker.com/sqlman/table/vercel_db/websites'; // API endpoint
        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error(`API request failed with status: ${response.status}`);
        }

        const data = await response.json();

        // You can now work with the data from the API response as needed
        // Perform any additional logic with 'data'

        res.json(data); // Send the API response as the HTTP response
    } catch (error) {
        console.error('Error in logicFunction:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export default logicFunction;
