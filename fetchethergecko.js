const axios = require('axios');

const tokenSymbol = 'idr';

const coingeckoURL = `https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=${tokenSymbol}`;

async function fetchTokenInfo() {
  try {
    const response = await axios.get(coingeckoURL);

    const ethereumData = response.data.ethereum;

    console.log(`Token Info (in ${tokenSymbol}):`, ethereumData);
  } catch (error) {
    console.error('Error fetching token info:', error.message);
  }
}

fetchTokenInfo();
