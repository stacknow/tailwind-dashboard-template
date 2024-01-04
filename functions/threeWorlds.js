import fetch from 'node-fetch';

const fetchData = async () => {
  try {
    const apiUrl = 'https://api.flatfilemaker.com/sqlman/table/vercel_db/websites';
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }

    const data = await response.json();
    return data.map((website) => website.website_name);
  } catch (error) {
    console.error(error);
    return [];
  }
};

export default fetchData;
