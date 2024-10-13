import hre from "hardhat";

async function main() {
  const FertilizerSupplyChain = await hre.ethers.getContractFactory(
    "FertilizerSupplyChain"
  );
  const fertilizerSupplyChain = await FertilizerSupplyChain.deploy();
  await fertilizerSupplyChain.deployed();
  console.log(
    "FertilizerSupplyChain deployed to:",
    fertilizerSupplyChain.address
  );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
