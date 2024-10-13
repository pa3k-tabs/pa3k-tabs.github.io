require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");

module.exports = {
  solidity: "0.8.0",
  networks: {
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/9yJNYh91QoSE9WJacAWVRNszsZr7Uybr`, // Alchemy URL
      accounts: [
        "0x29a27df66da68a1c5d2263c11929cab8c187035dbad5d77534910bf65114eda5",
      ], // Your wallet private key
    },
  },
};
