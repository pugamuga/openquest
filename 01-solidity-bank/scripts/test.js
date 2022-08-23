const { ethers } = require("hardhat");

const main = async () => {
  let acc1, acc2;
  [acc1, acc2] = await ethers.getSigners();

  const bankFactory = await hre.ethers.getContractFactory("Bank", acc2);
  const bankDeploy = await bankFactory.deploy();

  await bankDeploy.getContractBalance("ahuet', o5 vse rabotaet!");
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();