/* eslint-disable react/no-unknown-property */
import { useState } from "react";
import { ImSpinner3 } from "react-icons/im";

const ViewManufacturer = () => {
  const [manufacturerAddress, setManufacturerAddress] = useState("");
  const [manufacturerData, setManufacturerData] = useState(null);
  const [loading, setLoading] = useState(false);

  // Static data simulating blockchain data for manufacturers
  const staticManufacturerData = {
    "0x1234567890abcdef1234567890abcdef12345678": {
      name: "Green Agro Industries",
      businessName: "Green Agro",
      rcNumber: "RC123456",
      locationAddress: "123 Green Street, Agriculture City",
      manufacturerAddress: "0x1234567890abcdef1234567890abcdef12345678",
      isActive: true,
      totalRating: 85,
      numberOfRatings: 20,
      email: "contact@greenagro.com",
    },
    "0xabcdef1234567890abcdef1234567890abcdef12": {
      name: "Blue Earth Fertilizers",
      businessName: "Blue Earth Ltd",
      rcNumber: "RC654321",
      locationAddress: "456 Blue Avenue, Fertilizer Town",
      manufacturerAddress: "0xabcdef1234567890abcdef1234567890abcdef12",
      isActive: false,
      totalRating: 70,
      numberOfRatings: 10,
      email: "info@blueearthfertilizers.com",
    },
  };

  const handleFetchDetails = () => {
    setLoading(true);
    setTimeout(() => {
      const data = staticManufacturerData[manufacturerAddress];
      setManufacturerData(data || null);
      setLoading(false);
    }, 2000);
  };

  return (
    <div className=" bg-gray-950 pt-8 flex flex-col items-center mt-16">
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
          View Manufacturer Details
        </h2>

        <input
          type="text"
          placeholder="Enter Manufacturer Address"
          value={manufacturerAddress}
          onChange={(e) => setManufacturerAddress(e.target.value)}
          className="bg-gray-700 text-white border-none focus:ring-2 focus:ring-green-500 p-4 mb-6 w-full rounded-lg text-lg placeholder-gray-400"
        />

        <button
          onClick={handleFetchDetails}
          className="bg-green-600 hover:bg-green-500 transition-colors duration-200 ease-in-out text-white font-semibold py-3 px-5 rounded-lg w-full text-lg"
        >
          Fetch Details
        </button>
      </div>

      {/* Manufacturer Data Section */}
      <div className="max-w-md w-full p-10 bg-gray-900 rounded-lg shadow-lg relative z-10">
        <h3 className="text-green-500 text-2xl mb-6 text-center font-semibold">
          Manufacturer Information
        </h3>

        {loading ? (
          <div className="text-white text-center flex items-center justify-center gap-3">
            Loading details... <ImSpinner3 className="animate-spin" size={25} />
          </div>
        ) : manufacturerData ? (
          <div className="bg-gray-900 p-6 rounded-lg text-gray-300 shadow-inner">
            <p className="mb-2">
              <strong className="text-green-400">Name:</strong>{" "}
              {manufacturerData.name}
            </p>
            <p className="mb-2">
              <strong className="text-green-400">Business Name:</strong>{" "}
              {manufacturerData.businessName}
            </p>
            <p className="mb-2">
              <strong className="text-green-400">RC Number:</strong>{" "}
              {manufacturerData.rcNumber}
            </p>
            <p className="mb-2">
              <strong className="text-green-400">Location Address:</strong>{" "}
              {manufacturerData.locationAddress}
            </p>
            <p className="mb-2">
              <strong className="text-green-400">Manufacturer Address:</strong>{" "}
              {manufacturerData.manufacturerAddress}
            </p>
            <p className="mb-2">
              <strong className="text-green-400">Status:</strong>{" "}
              {manufacturerData.isActive ? "Active" : "Inactive"}
            </p>
            <p className="mb-2">
              <strong className="text-green-400">Total Rating:</strong>{" "}
              {manufacturerData.totalRating}
            </p>
            <p className="mb-2">
              <strong className="text-green-400">Number of Ratings:</strong>{" "}
              {manufacturerData.numberOfRatings}
            </p>
            <p>
              <strong className="text-green-400">Email:</strong>{" "}
              {manufacturerData.email}
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

export default ViewManufacturer;
