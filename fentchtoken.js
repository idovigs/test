const { ethers } = require('ethers');

const contractAddress = '0x6aF48997671584672e084Bf2296473677598ee58';

const abi = [
  'function balanceOf(address account) external view returns (uint256)',
];

const userAddress = '0x430eDc777cB934942A69F8964B77c41C97E3bc5C';

const provider = new ethers.providers.JsonRpcProvider('https://evm-rpc.planq.network/');

const tokenContract = new ethers.Contract(contractAddress, abi, provider);

async function fetchTokenBalance() {
  try {
    
    const balance = await tokenContract.balanceOf(userAddress);

    console.log(`Token Balance for ${userAddress}: ${balance.toString()}`);
  } catch (error) {
    
    console.error('Error fetching token balance:', error.message);
  }
}

fetchTokenBalance();
