// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract FertilizerSupplyChain {
    
    // Struct to represent a Manufacturer
    struct Manufacturer {
        string name;                      // Manufacturer's name
        string businessName;             // Manufacturer's business name
        string rcNumber;                // RC number from the local business registration body
        string locationAddress;        // Physical location address of the business
        address manufacturerAddress;  // Ethereum address of the manufacturer
        bool isActive;               // Status of the manufacturer (active or inactive)
    }

    // Struct to represent a Fertilizer
    struct Fertilizer {
        string fertilizerNumber;             // Number given by the quality control body
        string productDescription;          // Description of the fertilizer
        string nutrients;                  // Nutrients and their ratios
        string size;                      // Size of the fertilizer (e.g., "50kg", "25kg", "10kg")
        uint256 quantity;                // Quantity being registered (e.g., 10 or 20)
        bool isLocallyManufactured;     // Indicates if the fertilizer is locally manufactured or imported
        uint256 cost;                  // Cost per bag of fertilizer
        string subsidyInfo;           // Subsidy information related to the fertilizer
        address manufacturerAddress; // Reference to the manufacturer who produced this fertilizer
    }

    // Mapping to store manufacturers by their Ethereum address
    mapping(address => Manufacturer) public manufacturers;

    // Mapping to store fertilizers using their fertilizer number as the key
    mapping(string => Fertilizer) public fertilizers;

    // Array to keep track of all registered manufacturer addresses
    address[] public manufacturerAddresses;

    // Events to log important actions with messages
    event ManufacturerRegistered(address indexed manufacturerAddress, string name, string message);
    event FertilizerRegistered(string fertilizerNumber, address indexed manufacturerAddress, string message);

    // Function to register a manufacturer
    function registerManufacturer(
        string memory _name,
        string memory _businessName,
        string memory _rcNumber,
        string memory _locationAddress // Physical location address of the manufacturer
    ) public {
        // Ensure the manufacturer is not already registered
        require(manufacturers[msg.sender].isActive == false, "Manufacturer already registered");

        // Create a new Manufacturer and store it in the mapping
        manufacturers[msg.sender] = Manufacturer({
            name: _name,
            businessName: _businessName,
            rcNumber: _rcNumber,
            locationAddress: _locationAddress, // Store the physical location address
            manufacturerAddress: msg.sender, // Store the Ethereum address
            isActive: true // Set the manufacturer as active
        });

        // Add the manufacturer's address to the list of registered manufacturers
        manufacturerAddresses.push(msg.sender);
        emit ManufacturerRegistered(msg.sender, _name, "Manufacturer successfully registered."); // Emit an event for registration with a message
    }

    // Function to register a fertilizer
    function registerFertilizer(
        string memory _fertilizerNumber,
        string memory _productDescription,
        string memory _nutrients,
        string memory _size,
        uint256 _quantity,
        bool _isLocallyManufactured,
        uint256 _cost,
        string memory _subsidyInfo
    ) public {
        // Ensure that the manufacturer is registered and active
        require(manufacturers[msg.sender].isActive, "Only registered manufacturers can register fertilizers");

        // Create a new Fertilizer and store it in the mapping
        fertilizers[_fertilizerNumber] = Fertilizer({
            fertilizerNumber: _fertilizerNumber,
            productDescription: _productDescription,
            nutrients: _nutrients,
            size: _size,
            quantity: _quantity,
            isLocallyManufactured: _isLocallyManufactured,
            cost: _cost,
            subsidyInfo: _subsidyInfo,
            manufacturerAddress: msg.sender // Link to the manufacturer
        });

        emit FertilizerRegistered(_fertilizerNumber, msg.sender, "Fertilizer successfully registered."); // Emit an event for registration with a message
    }

    // Function to check details of a specific fertilizer
    function checkFertilizer(string memory _fertilizerNumber) public view returns (
        string memory, string memory, string memory, string memory, uint256, bool, uint256, string memory, address
    ) {
        // Retrieve the fertilizer details from the mapping
        Fertilizer memory fertilizer = fertilizers[_fertilizerNumber];
        return (
            fertilizer.fertilizerNumber,
            fertilizer.productDescription,
            fertilizer.nutrients,
            fertilizer.size,
            fertilizer.quantity,
            fertilizer.isLocallyManufactured,
            fertilizer.cost,
            fertilizer.subsidyInfo,
            fertilizer.manufacturerAddress // Return the manufacturer's address
        );
    }

    // Function to check details of a specific manufacturer
    function checkManufacturer(address _manufacturerAddress) public view returns (
        string memory, string memory, string memory, string memory, bool
    ) {
        // Retrieve the manufacturer details from the mapping
        Manufacturer memory manufacturer = manufacturers[_manufacturerAddress];
        return (
            manufacturer.name,
            manufacturer.businessName,
            manufacturer.rcNumber,
            manufacturer.locationAddress, // Return the physical location address
            manufacturer.isActive
        );
    }
}