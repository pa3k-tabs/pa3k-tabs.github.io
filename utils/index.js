import { ethers } from "ethers";
import FertilizerSupplyChainABI from "./artifacts/contracts/FertilizerSupplyChain.sol/FertilizerSupplyChain.json"; // Adjust the path as necessary

const contractAddress = "0xYourContractAddressHere"; // Replace with your deployed contract address

// Create a provider and signer
const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer = provider.getSigner();
const contract = new ethers.Contract(
  contractAddress,
  FertilizerSupplyChainABI.abi,
  signer
);

// Function to register a manufacturer
export const registerManufacturer = async (
  name,
  businessName,
  rcNumber,
  locationAddress,
  email,
  password
) => {
  const tx = await contract.registerManufacturer(
    name,
    businessName,
    rcNumber,
    locationAddress,
    email,
    password
  );
  await tx.wait(); // Wait for the transaction to be mined
  console.log("Manufacturer registered successfully!");
};

// Function to register a farmer
export const registerFarmer = async (name, uniqueIdentifier, password) => {
  const tx = await contract.registerFarmer(name, uniqueIdentifier, password);
  await tx.wait(); // Wait for the transaction to be mined
  console.log("Farmer registered successfully!");
};

// Function to verify manufacturer login
export const verifyManufacturerLogin = async (email, password) => {
  const isValid = await contract.verifyManufacturerLogin(email, password);
  return isValid;
};

// Function to verify farmer login
export const verifyFarmerLogin = async (uniqueIdentifier, password) => {
  const isValid = await contract.verifyFarmerLogin(uniqueIdentifier, password);
  return isValid;
};

// Function to register a fertilizer
export const registerFertilizer = async (
  fertilizerNumber,
  productDescription,
  nutrients,
  size,
  quantity,
  isLocallyManufactured,
  cost,
  subsidyInfo
) => {
  const tx = await contract.registerFertilizer(
    fertilizerNumber,
    productDescription,
    nutrients,
    size,
    quantity,
    isLocallyManufactured,
    cost,
    subsidyInfo
  );
  await tx.wait(); // Wait for the transaction to be mined
  console.log("Fertilizer registered successfully!");
};

// Function to submit a review for a fertilizer
export const submitReview = async (fertilizerNumber, rating, review) => {
  const tx = await contract.submitReview(fertilizerNumber, rating, review);
  await tx.wait(); // Wait for the transaction to be mined
  console.log("Review submitted successfully!");
};

// Function to check details of a specific fertilizer
export const checkFertilizer = async (fertilizerNumber) => {
  const fertilizer = await contract.checkFertilizer(fertilizerNumber);
  return fertilizer; // Returns an array of fertilizer details
};

// Function to check details of a specific manufacturer
export const checkManufacturer = async (manufacturerAddress) => {
  const manufacturer = await contract.checkManufacturer(manufacturerAddress);
  return manufacturer; // Returns an array of manufacturer details
};
