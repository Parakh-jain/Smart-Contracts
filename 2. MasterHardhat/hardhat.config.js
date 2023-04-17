require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to // https://hardhat.org/guides/create-task.html 
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => { 
  const accounts = await hre.ethers.getSigners();
  for (const account of accounts) { 
    console.log(account.address); 
  } 
}); 

const INFURA_API_KEY = "9b3d6601a3444d62b9d61d79edea9b20"; // https://goerli.infura.io/v3/9b3d6601a3444d62b9d61d79edea9b20 (Infura https)

// You need to export an object to set up your config 
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig 
*/ 

const GOERLI_PRIVATE_KEY = "Your Key"; // Metamask --> Goerli test Network --> Account Details --> Export Private Key

module.exports = { 
  solidity: "0.8.9", 
  networks: { 
    goerli: { 
      url: `https://goerli.infura.io/v3/${INFURA_API_KEY}`, 
      accounts: [`${GOERLI_PRIVATE_KEY}`], 
    }, 
  }, 
};