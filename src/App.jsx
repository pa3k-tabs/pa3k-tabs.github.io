import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import RegisterManufacturer from "./pages/RegisterManufacturer";
import ViewFertilizers from "./pages/FertilizerDetails";
import LoginPage from "./pages/Login";
import RegisterFertilizer from "./pages/RegisterFertilizer";
import ManufacturersDashboard from "./pages/ManufacturersDashboard";
import ViewManufacturer from "./pages/ViewManufacturer";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";

const App = () => {
  const [showMetaMaskWarning, setShowMetaMaskWarning] = useState(false);

  useEffect(() => {
    // Check for MetaMask  extension presence on load
    if (!window.ethereum) {
      setShowMetaMaskWarning(true);
    }
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-gray-950 text-gray-200">
        <Navbar />
        <div className="container mx-auto p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<RegisterManufacturer />} />
            <Route path="/login" element={<LoginPage />} />
            <Route
              path="/manufacturer-dashboard"
              element={<ManufacturersDashboard />}
            />
            <Route
              path="/register-fertilizer"
              element={<RegisterFertilizer />}
            />
            <Route path="/verify-fertilizers" element={<ViewFertilizers />} />
            <Route path="/verify-manufacturer" element={<ViewManufacturer />} />
          </Routes>
        </div>
        <Footer />

        {/* Warning Pop-up for MetaMask */}
        {showMetaMaskWarning && (
          <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
            <div className="bg-gray-800 p-6 rounded-md text-center shadow-xl">
              <h2 className="text-2xl font-bold text-red-600 mb-4">
                MetaMask Extension Required!
              </h2>
              <p className="text-gray-200 mb-4">
                You need to install MetaMask to use this application.
              </p>
              <a
                href="https://chromewebstore.google.com/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en&pli=1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-500 underline shadow-2xl  rounded-lg"
              >
                Get MetaMask
              </a>
            </div>
          </div>
        )}
      </div>
    </Router>
  );
};

export default App;
