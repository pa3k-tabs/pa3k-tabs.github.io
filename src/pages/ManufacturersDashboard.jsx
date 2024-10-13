/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { GiHighGrass } from "react-icons/gi";
import { Link } from "react-router-dom";

const fertilizers = [
  {
    fertilizerNumber: "FERT001",
    productDescription: "Organic Compost",
    nutrients: "Nitrogen, Phosphorus, Potassium",
    size: "50kg",
    quantity: 100,
    isLocallyManufactured: true,
    cost: 200,
    subsidyInfo: "Government subsidy available",
    manufacturerAddress: "0x1234567890abcdef",
    totalRating: 100,
    numberOfRatings: 10,
  },
  {
    fertilizerNumber: "FERT002",
    productDescription: "NPK Fertilizer",
    nutrients: "Nitrogen, Phosphorus, Potassium",
    size: "25kg",
    quantity: 50,
    isLocallyManufactured: false,
    cost: 150,
    subsidyInfo: "No subsidy available",
    manufacturerAddress: "0x9876543210fedcba",
    totalRating: 80,
    numberOfRatings: 5,
  },
  {
    fertilizerNumber: "FERT003",
    productDescription: "Urea Fertilizer",
    nutrients: "Nitrogen",
    size: "10kg",
    quantity: 200,
    isLocallyManufactured: true,
    cost: 100,
    subsidyInfo: "Government subsidy available",
    manufacturerAddress: "0x1234567890abcdef",
    totalRating: 90,
    numberOfRatings: 15,
  },
  {
    fertilizerNumber: "FERT004",
    productDescription: "DAP Fertilizer",
    nutrients: "Nitrogen, Phosphorus",
    size: "20kg",
    quantity: 150,
    isLocallyManufactured: false,
    cost: 120,
    subsidyInfo: "No subsidy available",
    manufacturerAddress: "0x9876543210fedcba",
    totalRating: 85,
    numberOfRatings: 10,
  },
];

const ManufacturersDashboard = () => {
  const [farmerFertilizers, setFarmerFertilizers] = useState(fertilizers);

  const farmerName = "John Doe";

  //   // Simulating fetching registered fertilizers (this would come from backend in actual case)
  //   useEffect(() => {
  //     setFarmerFertilizers(fertilizers); // Load fertilizers into state
  //   },);

  const onRegisterNew = () => {
    console.log("New fertilizers reistered!...");
  };
  return (
    <div className="min-h-screen bg-gray-950 flex flex-col items-center py-10 mt-16 text-white">
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
      {/* Dashboard Header */}
      <div className="bg-gray-800 shadow-lg rounded-lg p-6 w-4/5 lg:w-3/5 text-center relative">
        <GiHighGrass className="text-green-600 text-4xl absolute top-4 left-4" />
        <h1 className="text-3xl font-bold text-green-700">
          Welcome, {farmerName}
        </h1>
        <p className="text-sm text-gray-200 mt-2">
          Manage your fertilizers and register new ones here.
        </p>
      </div>

      {/* Fertilizer List Section */}
      <div className="mt-8 w-4/5 lg:w-3/5">
        <h2 className="text-2xl font-semibold text-green-700 mb-4">
          Your Fertilizers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {farmerFertilizers.length === 0 ? (
            <p className="text-center text-gray-200">
              No fertilizers registered yet.
            </p>
          ) : (
            fertilizers.map((fertilizer, index) => (
              <div
                key={index}
                className="bg-gray-900 shadow-md p-4 rounded-lg hover:shadow-xl transition duration-300"
              >
                <h3 className="text-xl font-bold text-green-700">
                  {fertilizer.productDescription}
                </h3>
                <p className="text-sm text-gray-200">
                  Fertilizer Number: {fertilizer.fertilizerNumber}
                </p>
                <p className="text-sm text-gray-200">
                  Nutrients: {fertilizer.nutrients}
                </p>
                <p className="text-sm text-gray-200">Size: {fertilizer.size}</p>
                <p className="text-sm text-gray-200">
                  Quantity: {fertilizer.quantity}
                </p>
                <p className="text-sm text-gray-200">
                  Is Locally Manufactured:{" "}
                  {fertilizer.isLocallyManufactured ? "Yes" : "No"}
                </p>
                <p className="text-sm text-gray-200">Cost: {fertilizer.cost}</p>
                <p className="text-sm text-gray-200">
                  Subsidy Info: {fertilizer.subsidyInfo}
                </p>
                <p className="text-sm text-gray-200">
                  Manufacturer Address: {fertilizer.manufacturerAddress}
                </p>
                <p className="text-sm text-gray-200">
                  Total Rating: {fertilizer.totalRating}
                </p>
                <p className="text-sm text-gray-200">
                  Number of Ratings: {fertilizer.numberOfRatings}
                </p>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Register New Fertilizer Button */}
      <div className="mt-10">
        <Link to="/register-fertilizer">
          <button
            className="bg-green-600 text-white py-2 px-6 rounded-lg font-semibold hover:bg-green-700 transition duration-300"
            onClick={onRegisterNew}
          >
            Register New Fertilizer
          </button>
        </Link>
      </div>

      {/* SVG Grass Animation */}
      {/* <div className="absolute bottom-0 left-0 right-0 opacity-20">
        <svg
          viewBox="0 0 500 150"
          preserveAspectRatio="none"
          className="w-full h-32"
        >
          <path
            d="M0,100 C150,200 300,0 500,100 L500,00 L0,0 Z"
            className="stroke-none fill-green-600 animate-move1"
          ></path>
          <path
            d="M0,120 C180,100 220,150 500,100 L500,00 L0,0 Z"
            className="stroke-none fill-green-700 animate-move2"
          ></path>
          <path
            d="M0,140 C80,100 300,120 500,140 L500,00 L0,0 Z"
            className="stroke-none fill-green-500 animate-move3"
          ></path>
        </svg>
      </div> */}

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes move1 {
          0% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(10px, -10px);
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
            transform: translate(-10px, 10px);
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

export default ManufacturersDashboard;
