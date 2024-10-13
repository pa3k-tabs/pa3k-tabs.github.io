// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract FertilizerSupplyChain {
    
    // Struct to represent a Manufacturer
    struct Manufacturer {
        string name;                      
        string businessName;             
        string rcNumber;                
        string locationAddress;        
        address manufacturerAddress;  
        bool isActive;               
        uint256 totalRating;          // Total rating score
        uint256 numberOfRatings;      // Number of ratings received
        string email;                  // Email address for the manufacturer
        bytes32 passwordHash;          // Hashed password for the manufacturer
    }

    // Struct to represent a Farmer
    struct Farmer {
        string name;                    // Farmer's name
        address farmerAddress;          // Ethereum address of the farmer
        bool isRegistered;              // Registration status
        string uniqueIdentifier;        // Unique identifier (e.g., phone number)
        bytes32 passwordHash;           // Hashed password for the farmer
    }

    // Struct to represent a Fertilizer
    struct Fertilizer {
        string fertilizerNumber;             
        string productDescription;          
        string nutrients;                  
        string size;                      
        uint256 quantity;                
        bool isLocallyManufactured;     
        uint256 cost;                  
        string subsidyInfo;           
        address manufacturerAddress; 
        uint256 totalRating;          // Total rating score for the fertilizer
        uint256 numberOfRatings;      // Number of ratings received
    }

    // Mappings to store manufacturers and farmers
    mapping(address => Manufacturer) public manufacturers;
    mapping(address => Farmer) public farmers;
    mapping(string => Fertilizer) public fertilizers;

    // Array to keep track of all registered manufacturer addresses
    address[] public manufacturerAddresses;

    // Events to log important actions with messages
    event ManufacturerRegistered(address indexed manufacturerAddress, string name, string message);
    event FarmerRegistered(address indexed farmerAddress, string name, string message);
    event FertilizerRegistered(string fertilizerNumber, address indexed manufacturerAddress, string message);
    event ReviewSubmitted(string fertilizerNumber, address indexed farmerAddress, uint256 rating, string review);

    // Function to register a manufacturer
    function registerManufacturer(
        string memory _name,
        string memory _businessName,
        string memory _rcNumber,
        string memory _locationAddress,
        string memory _email,
        string memory _password // Password in plaintext for hashing
    ) public {
        require(manufacturers[msg.sender].isActive == false, "Manufacturer already registered");

        // Hash the password
        bytes32 passwordHash = keccak256(abi.encodePacked(_password));

        manufacturers[msg.sender] = Manufacturer({
            name: _name,
            businessName: _businessName,
            rcNumber: _rcNumber,
            locationAddress: _locationAddress,
            manufacturerAddress: msg.sender,
            isActive: true,
            totalRating: 0,
            numberOfRatings: 0,
            email: _email,
            passwordHash: passwordHash // Store the hashed password
        });

        manufacturerAddresses.push(msg.sender);
        emit ManufacturerRegistered(msg.sender, _name, "Manufacturer successfully registered.");
    }

    // Function to register a farmer
    function registerFarmer(
        string memory _name,
        string memory _uniqueIdentifier,
        string memory _password // Password in plaintext for hashing
    ) public {
        require(farmers[msg.sender].isRegistered == false, "Farmer already registered");

        // Hash the password
        bytes32 passwordHash = keccak256(abi.encodePacked(_password));

        farmers[msg.sender] = Farmer({
            name: _name,
            farmerAddress: msg.sender,
            isRegistered: true,
            uniqueIdentifier: _uniqueIdentifier,
            passwordHash: passwordHash // Store the hashed password
        });

        emit FarmerRegistered(msg.sender, _name, "Farmer successfully registered.");
    }

    // Function to verify manufacturer login
    function verifyManufacturerLogin(string memory _email, string memory _password) public view returns (bool) {
        Manufacturer memory manufacturer = manufacturers[msg.sender];
        require(manufacturer.isActive, "Manufacturer not registered");

        // Hash the provided password and compare with stored hash
        bytes32 passwordHash = keccak256(abi.encodePacked(_password));
        return (keccak256(abi.encodePacked(manufacturer.email)) == keccak256(abi.encodePacked(_email)) && manufacturer.passwordHash == passwordHash);
    }

    // Function to verify farmer login
    function verifyFarmerLogin(string memory _uniqueIdentifier, string memory _password) public view returns (bool) {
        Farmer memory farmer = farmers[msg.sender];
        require(farmer.isRegistered, "Farmer not registered");

        // Hash the provided password and compare with stored hash
        bytes32 passwordHash = keccak256(abi.encodePacked(_password));
        return (keccak256(abi.encodePacked(farmer.uniqueIdentifier)) == keccak256(abi.encodePacked(_uniqueIdentifier)) && farmer.passwordHash == passwordHash);
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
        require(manufacturers[msg.sender].isActive, "Only registered manufacturers can register fertilizers");

        fertilizers[_fertilizerNumber] = Fertilizer({
            fertilizerNumber: _fertilizerNumber,
            productDescription: _productDescription,
            nutrients: _nutrients,
            size: _size,
            quantity: _quantity,
            isLocallyManufactured: _isLocallyManufactured,
            cost: _cost,
            subsidyInfo: _subsidyInfo,
            manufacturerAddress: msg.sender,
            totalRating: 0,
            numberOfRatings: 0
        });

        emit FertilizerRegistered(_fertilizerNumber, msg.sender, "Fertilizer successfully registered.");
    }

    // Function to submit a review and rating for a fertilizer
    function submitReview(string memory _fertilizerNumber, uint256 _rating, string memory _review) public {
        require(farmers[msg.sender].isRegistered, "Only registered farmers can submit reviews");
        require(_rating >= 1 && _rating <= 5, "Rating must be between 1 and 5");

        Fertilizer storage fertilizer = fertilizers[_fertilizerNumber];
        require(fertilizer.manufacturerAddress != address(0), "Fertilizer does not exist");

        // Update fertilizer rating
        fertilizer.totalRating += _rating;
        fertilizer.numberOfRatings += 1;

        // Update manufacturer rating
        Manufacturer storage manufacturer = manufacturers[fertilizer.manufacturerAddress];
        manufacturer.totalRating += _rating;
        manufacturer.numberOfRatings += 1;

        emit ReviewSubmitted(_fertilizerNumber, msg.sender, _rating, _review);
    }

    // Function to check details of a specific fertilizer
    function checkFertilizer(string memory _fertilizerNumber) public view returns (
        string memory, string memory, string memory, string memory, uint256, bool, uint256, string memory, address, uint256, uint256
    ) {
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
            fertilizer.manufacturerAddress,
            fertilizer.totalRating,
            fertilizer.numberOfRatings
        );
    }

    // Function to check details of a specific manufacturer
    function checkManufacturer(address _manufacturerAddress) public view returns (
        string memory, string memory, string memory, string memory, bool, uint256, uint256
    ) {
        Manufacturer memory manufacturer = manufacturers[_manufacturerAddress];
        return (
            manufacturer.name,
            manufacturer.businessName,
            manufacturer.rcNumber,
            manufacturer.locationAddress,
            manufacturer.isActive,
            manufacturer.totalRating,
            manufacturer.numberOfRatings
        );
    }
}