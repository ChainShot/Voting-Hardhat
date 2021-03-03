# Decentralized Voting Application

This is an Voting Dapp built with [Hardhat](https://hardhat.org/).

## Project Layout

There are three top-level folders:

1. `/app` - contains the front-end application
2. `/contracts` - contains the solidity contract
3. `/scripts` - contains a script for deploying the contract

## Setup

Install dependencies in the top-level directory with `npm install`.

After you have installed hardhat locally, you can use commands to test and compile the contracts, among other things. To learn more about these commands run `npx hardhat help`.

Compile the contracts using `npx hardhat compile`. The artifacts will be placed in the `/app` folder, which will make it available to the front-end. This path configuration can be found in the `hardhat.config.js` file.

### Voting on a Local Blockchain

The easiest way to get up and going is to run against a localhost blockchain. You can spin one up with `ganache-cli` or `npx hardhat node`. After that, run `npx hardhat run scripts/deploy.js --network localhost` to deploy the Voting dapp on this local blockchain. This will create a `__config.json` inside of the `./app` folder which will tell the front-end application to point at the deployed contract address.

## Front-End

To run the front-end application run `parcel app/index.html` from the top-level directory.

You can learn more about Parcel [here](https://parceljs.org/).
