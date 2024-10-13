import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ethers } from "ethers";
import { FaSpinner } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [signer, setSigner] = useState(null);
  const [account, setAccount] = useState(null);
  const [isConnecting, setIsConnecting] = useState(false); // Add loading state

  const location = useLocation();

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        setIsConnecting(true); // Set loading state to true
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const accounts = await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner(accounts[0]);
        setSigner(signer);
        setAccount(accounts[0]);
      } catch (error) {
        console.error(error);
      } finally {
        setIsConnecting(false); // Set loading state to false once done
      }
    } else {
      console.log("No wallet found");
    }
  };
  console.log("account", account && account, "signer", signer && signer);
  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", (accounts) => {
        if (accounts.length > 0) {
          setAccount(accounts[0]);
        } else {
          setAccount(null);
          setSigner(null);
        }
      });
    }
  }, []);

  return (
    <nav className="bg-gray-950 shadow-2xl fixed top-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link to="/">
          <h1 className="text-green-400 text-3xl font-bold">GreenFlow</h1>
        </Link>
        <div className="hidden lg:flex-grow lg:flex lg:justify-center lg:space-x-6">
          {[
            "/",
            "/register",
            "/verify-fertilizers",
            "/verify-manufacturer",
          ].map((path) => (
            <Link
              key={path}
              to={path}
              className={`relative text-gray-300 transition duration-300 px-4 py-2 rounded-full ${
                location.pathname === path ? "bg-gray-800" : "hover:bg-gray-700"
              }`}
            >
              {path === "/"
                ? "Home"
                : path === "/register"
                ? "Register"
                : path === "/verify-fertilizers"
                ? "Verify Fertilizers"
                : "Verify Manufacturer"}
              {location.pathname === path && (
                <span className="absolute inset-0 rounded-full border-2 border-purple-800 transition-all duration-300"></span>
              )}
            </Link>
          ))}
        </div>
        {account ? (
          <button className="text-white bg-gray-800 px-4 py-2 rounded-full hover:bg-gray-900 transition duration-300">
            {account.substring(0, 6)}...{account.substring(account.length - 4)}
          </button>
        ) : (
          <button
            className="text-white bg-gray-800 px-4 py-2 rounded-full hover:bg-gray-900 transition duration-300 flex items-center"
            onClick={connectWallet}
            disabled={isConnecting} // Disable button while loading
          >
            {isConnecting ? (
              // <svg
              //   className="animate-spin h-5 w-5 mr-2 text-white"
              //   xmlns="http://www.w3.org/2000/svg"
              //   fill="none"
              //   viewBox="0 0 24 24"
              //   stroke="currentColor"
              // >
              //   <path
              //     strokeLinecap="round"
              //     strokeLinejoin="round"
              //     strokeWidth={2}
              //     d="M12 2a10 10 0 100 20 10 10 0 000-20z"
              //   />
              // </svg>
              <FaSpinner size={25} className="animate-spin text-green-500" />
            ) : (
              "Connect Wallet"
            )}
          </button>
        )}
        {/* Add a mobile menu toggle button */}
        <button
          className="lg:hidden text-white bg-gray-800 px-4 py-2 rounded-full hover:bg-gray-900 transition duration-300"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
        {/* Mobile menu */}
        <div
          className={`lg:hidden absolute top-0 left-0 w-full h-screen bg-gray-950 p-4 ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <div className="flex flex-col space-y-6">
            <button
              className="text-white bg-gray-800 px-4 py-2 rounded-full hover:bg-gray-900 transition duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            {[
              "/",
              "/register",
              "/verify-fertilizers",
              "/verify-manufacturer",
            ].map((path) => (
              <Link
                key={path}
                to={path}
                className={`block text-gray-300 transition duration-300 px-4 py-2 rounded-full ${
                  location.pathname === path
                    ? "bg-gray-800"
                    : "hover:bg-gray-700"
                }`}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {path === "/"
                  ? "Home"
                  : path === "/register"
                  ? "Register"
                  : path === "/verify-fertilizers"
                  ? "Verify Fertilizers"
                  : "Verify Manufacturer"}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
