/* eslint-disable react/no-unknown-property */
import Features from "../components/Features";
import { FaSeedling } from "react-icons/fa";
import { GiHighGrass } from "react-icons/gi";
import { Link } from "react-router-dom";

const featuresData = [
  {
    title: "Manufacturer Registration",
    description: "Register manufacturer details securely on the blockchain.",
  },
  {
    title: "Fertilizer Registration",
    description: "Register and manage different types of fertilizers.",
  },
  {
    title: "Search and Filter",
    description:
      "Easily find manufacturers and fertilizers with advanced search options.",
  },
  {
    title: "Transaction History",
    description: "View and track all transactions on the blockchain.",
  },
  {
    title: "Wallet Authentication",
    description: "Secure access with Ethereum wallet integration.",
  },
  {
    title: "Notifications",
    description: "Stay updated with real-time alerts and notifications.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-950 pt-8 relative overflow-hidden">
      {/* Background SVG Shapes */}
      <div className="absolute inset-0 flex justify-center items-center">
        {/* <svg
          className="absolute opacity-10 blur-sm"
          width="300"
          height="300"
          viewBox="0 0 300 300"
          fill="none"
          style={{ top: "5%", left: "10%" }}
        >
          <circle cx="150" cy="150" r="150" fill="#4A5568" />
        </svg>
        <svg
          className="absolute opacity-15 blur-sm"
          width="400"
          height="400"
          viewBox="0 0 400 400"
          fill="none"
          style={{ top: "20%", right: "15%" }}
        >
          <circle cx="200" cy="200" r="200" fill="#2D3748" />
        </svg>
        <svg
          className="absolute opacity-10 blur-sm"
          width="250"
          height="250"
          viewBox="0 0 250 250"
          fill="none"
          style={{ bottom: "10%", left: "25%" }}
        >
          <circle cx="125" cy="125" r="125" fill="#4A5568" />
        </svg>
        <svg
          className="absolute opacity-20 blur-sm"
          width="350"
          height="350"
          viewBox="0 0 350 350"
          fill="none"
          style={{ bottom: "5%", right: "10%" }}
        >
          <circle cx="175" cy="175" r="175" fill="#2D3748" />
        </svg>
        <svg
          className="absolute opacity-15 blur-sm"
          width="200"
          height="200"
          viewBox="0 0 200 200"
          fill="none"
          style={{ top: "50%", left: "30%" }}
        >
          <circle cx="100" cy="100" r="100" fill="#4A5568" />
        </svg>
        <svg
          className="absolute opacity-10 blur-sm"
          width="300"
          height="300"
          viewBox="0 0 300 300"
          fill="none"
          style={{ top: "70%", right: "15%" }}
        >
          <circle cx="150" cy="150" r="150" fill="#2D3748" />
        </svg> */}
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

        {/* Fertilizer and Plant Icons */}
        <div
          className="absolute opacity-20"
          style={{
            top: "10%",
            left: "40%",
            fontSize: "100px",
            color: "#4A5568",
          }}
        >
          {/* <GiFertilizer /> */}
        </div>
        <div
          className="absolute opacity-20"
          style={{
            bottom: "10%",
            right: "40%",
            fontSize: "100px",
            color: "#4A5568",
          }}
        >
          <FaSeedling />
        </div>
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
      </div>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          {/* Hero section */}
          <div className="px-4 py-8 sm:px-0 relative z-10">
            <div className="text-center">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-100 sm:text-5xl md:text-6xl">
                <span className="block">Welcome to</span>
                <span className="block text-green-400">GreenFlow</span>
              </h1>
              <p className="mt-3 max-w-md mx-auto text-base text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                Revolutionizing the fertilizer industry with blockchain
                technology. Register, track, and manage fertilizers with ease
                and transparency.
              </p>
              <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
                <div className="rounded-md shadow">
                  <Link
                    to={"/verify-fertilizers"}
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-800 hover:bg-purple-900 md:py-4 md:text-lg md:px-10"
                  >
                    Get Started
                  </Link>
                </div>
                <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                  <Link
                    to={"/login"}
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-500 hover:bg-green-600 md:py-4 md:text-lg md:px-10"
                  >
                    Login Manufacturer
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* Features Section */}
          <Features featuresData={featuresData} />{" "}
          {/* Pass the features data as props */}
        </div>
      </main>
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
}
