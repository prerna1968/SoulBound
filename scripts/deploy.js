
const hre = require("hardhat");

async function main() {

  const Lock = await hre.ethers.getContractFactory("Soulbound");
  const lock = await Lock.deploy();

  await lock.deployed();

  console.log(
    `Done  ${lock.address}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
