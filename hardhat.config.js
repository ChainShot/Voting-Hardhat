require("@nomiclabs/hardhat-waffle");
require('dotenv').config();

module.exports = {
  solidity: "0.6.2",
  paths: {
    artifacts: "./app/artifacts",
  },
  networks: {
    localhost: {
      url: "http://localhost:8545"
    },
    rinkeby: {
      url: process.env.RINKEBY_URL,
      accounts: [process.env.PRIVATE_KEY]
    }
  }
};
