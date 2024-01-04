import fetch from 'node-fetch';

const logicFunction = async (req, res) => {
    try {
        const apiUrl1 = 'https://jsonplaceholder.typicode.com/posts/1'; // Example public API endpoint
        const response1 = await fetch(apiUrl1);

        if (!response1.ok) {
            throw new Error(`API request failed with status: ${response1.status}`);
        }

        const data1 = await response1.json();

        // Call another API
        const apiUrl2 = 'https://jsonplaceholder.typicode.com/comments/1'; // Another example API endpoint
        const response2 = await fetch(apiUrl2);

        if (!response2.ok) {
            throw new Error(`API request failed with status: ${response2.status}`);
        }

        const data2 = await response2.json();

        // You can now work with data1 and data2 from the two API calls
        // Perform any additional logic as needed

        res.json({ data1, data2 }); // Send the combined data as the HTTP response
    } catch (error) {
        console.error('Error in logicFunction:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export default logicFunction;
