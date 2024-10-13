/* eslint-disable react/no-unknown-property */
import { useState } from "react";
import { FaSeedling } from "react-icons/fa";
import { GiHighGrass } from "react-icons/gi";
import Web3 from "web3";

const RegisterFertilizer = () => {
  const [fertilizerNumber, setFertilizerNumber] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [nutrients, setNutrients] = useState("");
  const [size, setSize] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [isLocallyManufactured, setIsLocallyManufactured] = useState(false);
  const [cost, setCost] = useState(0);
  const [subsidyInfo, setSubsidyInfo] = useState("");
  const [manufacturerAddress, setManufacturerAddress] = useState("");

  const web3 = new Web3();

  //FertilizerSupplyChain deployed to: 0x6165E17b1e1485A08792558fc46149937427956A

  const handleRegister = (e) => {
    e.preventDefault();
    console.log("Registering fertilizer:", {
      fertilizerNumber,
      productDescription,
      nutrients,
      size,
      quantity,
      isLocallyManufactured,
      cost,
      subsidyInfo,
      manufacturerAddress,
    });
    // Reset form fields
    setFertilizerNumber("");
    setProductDescription("");
    setNutrients("");
    setSize("");
    setQuantity(0);
    setIsLocallyManufactured(false);
    setCost(0);
    setSubsidyInfo("");
    setManufacturerAddress("");
  };

  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center mt-20">
      {/* Background SVG Shapes */}
      <div className="absolute inset-0">
        <div
          className="absolute opacity-20"
          style={{
            top: "10%",
            right: "10%",
            fontSize: "100px",
            color: "#4A5568",
          }}
        >
          <GiHighGrass />
        </div>
        <svg
          className="absolute opacity-10 blur-sm animate-move1"
          width="200"
          height="200"
          style={{ top: "5%", left: "5%" }}
        >
          <circle cx="100" cy="100" r="100" fill="#6b7280" />
        </svg>
        <svg
          className="absolute opacity-20 blur-sm animate-move2"
          width="300"
          height="300"
          style={{ bottom: "20%", right: "20%" }}
        >
          <circle cx="150" cy="150" r="150" fill="#4b5563" />
        </svg>
        <svg
          className="absolute opacity-10 blur-sm animate-move3"
          width="150"
          height="150"
          style={{ top: "35%", left: "40%" }}
        >
          <circle cx="75" cy="75" r="75" fill="#6b7280" />
        </svg>
      </div>

      <FaSeedling />

      {/* Fertilizer Registration Info Section */}
      <div className="w-full max-w-lg px-8 py-10 bg-gray-800 shadow-lg rounded-lg z-10">
        <h2 className="text-green-500 text-4xl font-bold mb-4 text-center">
          Fertilizer Registration
        </h2>
        <p className="text-gray-300 mb-6 text-center">
          Register your fertilizer product and help build a more transparent
          supply chain.
        </p>

        <form onSubmit={handleRegister}>
          <div className="mb-4">
            <label
              className="block text-gray-400 text-sm mb-2"
              htmlFor="fertilizerNumber"
            >
              Fertilizer Number
            </label>
            <input
              id="fertilizerNumber"
              type="text"
              value={fertilizerNumber}
              onChange={(e) => setFertilizerNumber(e.target.value)}
              className="w-full p-3 bg-gray-700 text-white rounded focus:ring-2 focus:ring-green-500"
              placeholder="Fertilizer Number"
              required
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-400 text-sm mb-2"
              htmlFor="productDescription"
            >
              Product Description
            </label>
            <textarea
              id="productDescription"
              type="text"
              value={productDescription}
              onChange={(e) => setProductDescription(e.target.value)}
              className="w-full p-3 bg-gray-700 text-white rounded focus:ring-2 focus:ring-green-500"
              placeholder="Description"
              required
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-400 text-sm mb-2"
              htmlFor="nutrients"
            >
              Nutrients
            </label>
            <input
              id="nutrients"
              type="text"
              value={nutrients}
              onChange={(e) => setNutrients(e.target.value)}
              className="w-full p-3 bg-gray-700 text-white rounded focus:ring-2 focus:ring-green-500"
              placeholder="Nutrient Composition"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-400 text-sm mb-2" htmlFor="size">
              Size (kg)
            </label>
            <input
              id="size"
              type="text"
              value={size}
              onChange={(e) => setSize(e.target.value)}
              className="w-full p-3 bg-gray-700 text-white rounded focus:ring-2 focus:ring-green-500"
              placeholder="Size"
              required
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-400 text-sm mb-2"
              htmlFor="quantity"
            >
              Quantity Available
            </label>
            <input
              id="quantity"
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className="w-full p-3 bg-gray-700 text-white rounded focus:ring-2 focus:ring-green-500"
              placeholder="Quantity"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-400 text-sm mb-2">
              Locally Manufactured
            </label>
            <input
              type="checkbox"
              checked={isLocallyManufactured}
              onChange={(e) => setIsLocallyManufactured(e.target.checked)}
              className="mr-2"
            />
            <span className="text-gray-400">
              Is this fertilizer locally manufactured?
            </span>
          </div>

          <div className="mb-4">
            <label className="block text-gray-400 text-sm mb-2" htmlFor="cost">
              Cost (in ETH)
            </label>
            <input
              id="cost"
              type="number"
              value={cost}
              onChange={(e) => setCost(e.target.value)}
              className="w-full p-3 bg-gray-700 text-white rounded focus:ring-2 focus:ring-green-500"
              placeholder="Cost"
              required
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-400 text-sm mb-2"
              htmlFor="subsidyInfo"
            >
              Subsidy Information
            </label>
            <input
              id="subsidyInfo"
              type="text"
              value={subsidyInfo}
              onChange={(e) => setSubsidyInfo(e.target.value)}
              className="w-full p-3 bg-gray-700 text-white rounded focus:ring-2 focus:ring-green-500"
              placeholder="Subsidy Info"
            />
          </div>

          <div className="mb-6">
            <label
              className="block text-gray-400 text-sm mb-2"
              htmlFor="manufacturerAddress"
            >
              Manufacturer Address (Wallet)
            </label>
            <input
              id="manufacturerAddress"
              type="text"
              value={manufacturerAddress}
              onChange={(e) => setManufacturerAddress(e.target.value)}
              className="w-full p-3 bg-gray-700 text-white rounded focus:ring-2 focus:ring-green-500"
              placeholder="Ethereum Wallet Address"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-green-600 text-white rounded hover:bg-green-700 transition"
          >
            Register Fertilizer
          </button>
        </form>
      </div>

      <style jsx>{`
        @keyframes move1 {
          0% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(15px, -15px);
          }
          100% {
            transform: translate(0, 0);
          }
        }
        @keyframes move2 {
          0% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(-15px, 15px);
          }
          100% {
            transform: translate(0, 0);
          }
        }
        @keyframes move3 {
          0% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(10px, 10px);
          }
          100% {
            transform: translate(0, 0);
          }
        }
        .animate-move1 {
          animation: move1 4s infinite;
        }
        .animate-move2 {
          animation: move2 6s infinite;
        }
        .animate-move3 {
          animation: move3 8s infinite;
        }
      `}</style>
    </div>
  );
};

export default RegisterFertilizer;
