const fs = require('fs');

async function main() {
  const Voting = await hre.ethers.getContractFactory("Voting");
  const accounts = [
    "0x9b49e8A93b241A96A29bEE871a373146B22Fa59F",
    "0x1ba5605702bf6ac6bd8d9aabf386522634ac9d7e",
  ]
  const voting = await Voting.deploy(accounts);

  await voting.deployed();

  console.log("Voting deployed to:", voting.address);

  const config = {
    address: voting.address
  }

  fs.writeFileSync("./app/__config.json", JSON.stringify(config, null, 2));
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
