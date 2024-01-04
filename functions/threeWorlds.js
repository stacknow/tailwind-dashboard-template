// logicFunction.js
import fetch from 'node-fetch';

const fetchData = async () => {
    try {
        const response = await fetch('https://api.flatfilemaker.com/sqlman/table/vercel_db/websites');
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
};

const displayWebsiteNames = async () => {
    const data = await fetchData();
    if (!data) {
        console.error('No data available');
        return;
    }

    const websiteNames = data.map((website) => website.website_name);

    // Display website names in the console or on the webpage
    console.log(websiteNames);

    // If you're working with a web page, you can also display them in the HTML document
    // For example, assuming you have an HTML element with the id "websiteList"
    const websiteListElement = document.getElementById('websiteList');
    if (websiteListElement) {
        websiteNames.forEach((name) => {
            const listItem = document.createElement('li');
            listItem.textContent = name;
            websiteListElement.appendChild(listItem);
        });
    }
};

export { fetchData, displayWebsiteNames };
