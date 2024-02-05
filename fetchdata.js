const axios = require('axios');

const endpointURL = 'https://api.example.com/data';

async function fetchData() {
  try {
    const response = await axios.get(endpointURL);

    console.log('Data:', response.data);
  } catch (error) {
    console.error('Error fetching data:', error.message);
  }
}

fetchData();
