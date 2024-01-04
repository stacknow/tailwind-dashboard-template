import fetch from 'node-fetch';

const fetchData = async () => {
  try {
    const apiUrl = 'https://api.flatfilemaker.com/sqlman/table/vercel_db/websites';
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }

    return response; // Return the raw response
  } catch (error) {
    console.error(error);
    return null; // Return null in case of an error
  }
};

export default fetchData;
