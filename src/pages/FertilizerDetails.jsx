/* eslint-disable react/no-unknown-property */
import { useState } from "react";
import { ImSpinner3 } from "react-icons/im";

const FertilizerDetails = () => {
  const [fertilizerNumber, setFertilizerNumber] = useState("");
  const [fertilizerData, setFertilizerData] = useState(null);
  const [loading, setLoading] = useState(false);

  // Static data simulating blockchain data
  const staticFertilizerData = {
    "FERT-001": {
      fertilizerNumber: "FERT-001",
      productDescription: "High-Quality Nitrogen Fertilizer",
      nutrients: "N: 30%, P: 10%, K: 10%",
      size: "50kg",
      quantity: 100,
      isLocallyManufactured: true,
      cost: 150,
      subsidyInfo: "Eligible for 20% subsidy",
      manufacturerAddress: "0x1234567890abcdef1234567890abcdef12345678",
    },
    "FERT-002": {
      fertilizerNumber: "FERT-002",
      productDescription: "Balanced NPK Fertilizer",
      nutrients: "N: 15%, P: 15%, K: 15%",
      size: "25kg",
      quantity: 200,
      isLocallyManufactured: false,
      cost: 120,
      subsidyInfo: "No subsidy available",
      manufacturerAddress: "0xabcdef1234567890abcdef1234567890abcdef12",
    },
  };

  const handleFetchDetails = () => {
    setLoading(true);
    setTimeout(() => {
      const data = staticFertilizerData[fertilizerNumber];
      setFertilizerData(data || null);
      setLoading(false);
    }, 2000);
  };

  return (
    <div className=" bg-gray-950 pt-8 flex flex-col items-center mt-16 ">
      {/* Background SVG Shapes */}
      <div className="absolute inset-0 flex justify-center items-center overflow-hidden">
        <svg
          className="absolute opacity-10 blur-sm animate-circle1"
          width="300"
          height="300"
          viewBox="0 0 300 300"
          fill="none"
          style={{ top: "5%", left: "10%" }}
        >
          <circle cx="150" cy="150" r="150" fill="#4A5568" />
        </svg>
        <svg
          className="absolute opacity-15 blur-sm animate-circle2"
          width="450"
          height="450"
          viewBox="0 0 450 450"
          fill="none"
          style={{ bottom: "10%", right: "10%" }}
        >
          <circle cx="225" cy="225" r="225" fill="#2D3748" />
        </svg>
      </div>

      {/* Form Section */}
      <div className="max-w-md w-full p-10 bg-gray-800 rounded-lg shadow-lg relative z-10 mb-6">
        <h2 className="text-green-600 text-3xl mb-6 text-center font-bold tracking-wide">
          Check Authenticity of Fertlizer{" "}
        </h2>

        <input
          type="text"
          placeholder="Enter Fertilizer Number"
          value={fertilizerNumber}
          onChange={(e) => setFertilizerNumber(e.target.value)}
          className="bg-gray-700 text-white border-none focus:ring-2 focus:ring-green-500 p-4 mb-6 w-full rounded-lg text-lg placeholder-gray-400"
        />

        <button
          type="submit"
          onClick={handleFetchDetails}
          className="bg-green-600 hover:bg-green-500 transition-colors duration-200 ease-in-out text-white font-semibold py-3 px-5 rounded-lg w-full text-lg"
        >
          Fetch Details
        </button>
      </div>

      {/* Fertilizer Data Section */}
      <div className="max-w-md w-full p-10 bg-gray-900 rounded-lg shadow-lg relative z-10">
        <h3 className="text-green-500 text-2xl mb-6 text-center font-semibold">
          Fertilizer Information
        </h3>

        {loading ? (
          <div className="text-white text-center flex items-center  justify-center gap-3">
            Loading details... <ImSpinner3 className="animate-spin" size={25} />
          </div>
        ) : fertilizerData ? (
          <div className="bg-gray-900 p-6 rounded-lg text-gray-300 shadow-inner">
            <p className="mb-2">
              <strong className="text-green-400">Fertilizer Number:</strong>{" "}
              {fertilizerData.fertilizerNumber}
            </p>
            <p className="mb-2">
              <strong className="text-green-400">Description:</strong>{" "}
              {fertilizerData.productDescription}
            </p>
            <p className="mb-2">
              <strong className="text-green-400">Nutrients:</strong>{" "}
              {fertilizerData.nutrients}
            </p>
            <p className="mb-2">
              <strong className="text-green-400">Size:</strong>{" "}
              {fertilizerData.size}
            </p>
            <p className="mb-2">
              <strong className="text-green-400">Quantity:</strong>{" "}
              {fertilizerData.quantity}
            </p>
            <p className="mb-2">
              <strong className="text-green-400">Locally Manufactured:</strong>{" "}
              {fertilizerData.isLocallyManufactured ? "Yes" : "No"}
            </p>
            <p className="mb-2">
              <strong className="text-green-400">Cost:</strong> $
              {fertilizerData.cost}
            </p>
            <p className="mb-2">
              <strong className="text-green-400">Subsidy Info:</strong>{" "}
              {fertilizerData.subsidyInfo}
            </p>
            <p>
              <strong className="text-green-400">Manufacturer Address:</strong>{" "}
              {fertilizerData.manufacturerAddress}
            </p>
          </div>
        ) : (
          !loading && (
            <div className="text-gray-500 text-center">No data found</div>
          )
        )}
      </div>

      <style jsx>{`
        @keyframes move1 {
          0% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(40px, -40px);
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
            transform: translate(-40px, 40px);
          }
          100% {
            transform: translate(0, 0);
          }
        }
        .animate-circle1 {
          animation: move1 8s infinite alternate;
        }
        .animate-circle2 {
          animation: move2 10s infinite alternate;
        }
      `}</style>
    </div>
  );
};

export default FertilizerDetails;
