/* eslint-disable react/prop-types */
import { useState } from "react";

const ManufacturerForm = ({ onRegister }) => {
  const [name, setName] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [rcNumber, setRcNumber] = useState("");
  const [locationAddress, setLocationAddress] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister(name, businessName, rcNumber, locationAddress);
    setName("");
    setBusinessName("");
    setRcNumber("");
    setLocationAddress("");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded shadow-md">
      <h2 className="text-purple-800 text-xl mb-4">Register Manufacturer</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 mb-4 w-full"
        required
      />
      <input
        type="text"
        placeholder="Business Name"
        value={businessName}
        onChange={(e) => setBusinessName(e.target.value)}
        className="border p-2 mb-4 w-full"
        required
      />
      <input
        type="text"
        placeholder="RC Number"
        value={rcNumber}
        onChange={(e) => setRcNumber(e.target.value)}
        className="border p-2 mb-4 w-full"
        required
      />
      <input
        type="text"
        placeholder="Location Address"
        value={locationAddress}
        onChange={(e) => setLocationAddress(e.target.value)}
        className="border p-2 mb-4 w-full"
        required
      />
      <button type="submit" className="bg-purple-800 text-white p-2 rounded">
        Register
      </button>
    </form>
  );
};

export default ManufacturerForm;
