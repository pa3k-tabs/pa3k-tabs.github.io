/* eslint-disable react/no-unknown-property */
import { useState } from "react";
import { FaSeedling } from "react-icons/fa";
import { GiHighGrass } from "react-icons/gi";
import { Link } from "react-router-dom";
import Web3 from "web3";

const RegisterManufacturer = () => {
  const [email, setEmail] = useState("");
  //   const [manufacturerAddress, setManufacturerAddress] = useState("");
  const [password, setPassword] = useState("");

  const web3 = new Web3();

  const handleRegister = (e) => {
    e.preventDefault();
    const passwordHash = web3.utils.sha3(password);
    console.log("Registering manufacturer:", {
      // manufacturerAddress,
      passwordHash,
    });
    // Reset form fields
    setEmail("");
    // setManufacturerAddress("");
    setPassword("");
  };

  return (
    <div className="h-screen bg-gray-950 flex items-center justify-center">
      {/* Background SVG Shapes */}
      <div className="absolute inset-0">
        {/* SVG Animation */}
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

      {/* Registration Info Section */}
      <div className="w-full max-w-lg px-8 py-10 bg-gray-800 shadow-lg rounded-lg z-10">
        <h2 className="text-green-500 text-4xl font-bold mb-4 text-center">
          Manufacturer Login
        </h2>
        <p className="text-gray-300 mb-6 text-center">
          Login your account as a manufacturer to register a fertilizer on the
          blockchain
        </p>

        <form onSubmit={handleRegister}>
          <div className="mb-4">
            <label className="block text-gray-400 text-sm mb-2" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 bg-gray-700 text-white rounded focus:ring-2 focus:ring-green-500"
              placeholder="Your Email"
              required
            />
          </div>

          {/* <div className="mb-4">
            <label
              className="block text-gray-400 text-sm mb-2"
              htmlFor="manufacturerAddress"
            >
              Manufacturer Address (Wallet Address)
            </label>
            <input
              id="manufacturerAddress"
              type="text"
              value={manufacturerAddress}
              onChange={(e) => setManufacturerAddress(e.target.value)}
              className="w-full p-3 bg-gray-700 text-white rounded focus:ring-2 focus:ring-green-500"
              placeholder="Your Ethereum Wallet Address"
              required
            />
          </div> */}

          <div className="mb-6">
            <label
              className="block text-gray-400 text-sm mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 bg-gray-700 text-white rounded focus:ring-2 focus:ring-green-500"
              placeholder="Create Password"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-green-600 text-white rounded hover:bg-green-700 transition"
          >
            Login
          </button>
          <Link
            to="/register"
            className="flex justify-center items-center mt-2"
          >
            Already have an account?&nbsp;
            <span className="text-green-600 hover:text-green-800 transition">
              Register
            </span>
          </Link>
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
            transform: translate(10px, -10px);
          }
          100% {
            transform: translate(0, 0);
          }
        }
        .animate-move1 {
          animation: move1 6s infinite;
        }
        .animate-move2 {
          animation: move2 8s infinite;
        }
        .animate-move3 {
          animation: move3 10s infinite;
        }
      `}</style>
    </div>
  );
};

export default RegisterManufacturer;
