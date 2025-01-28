VehicleParkingManager

Small Vehicle Management System 

Overview

This is a TypeScript-based project for managing small vehicle operations, including:

Vehicle details
Parking spot management
Parking charge calculation
Payment processing
The system provides functionalities such as parking a vehicle, charging for the parking duration, processing payments, and exiting vehicles from parking spots.

Features

Parking Spot Management: Assigns parking spots based on vehicle type (bike, compact, or large).
Parking Charge Calculation: Calculates charges for parked vehicles based on the duration of the stay.
Payment Processing: Integrates payment handling to ensure smooth operations.
Invoice Generation: Generates invoices for each parking session.
File Structure

parkingCharge.ts: Contains logic for calculating parking charges.
parkingManager.ts: Manages parking operations including assigning and releasing spots.
parkingSpot.ts: Defines parking spot details and status.
paymentManager.ts: Handles payment processing.
paymentMethod.ts: Represents payment methods.
constants.ts: Stores constants like parking spot types.
utils.ts: Utility functions such as mapping vehicles to parking spot types.
invoice.ts: Handles invoice generation for completed transactions.
Installation

Clone the repository:
git clone https://github.com/yourusername/VehicleParkingManager.git
Navigate to the project directory:
cd VehicleParkingManager
Install dependencies:
npm install
Compile the TypeScript files:
npm run build
Usage

Import necessary modules in your TypeScript file:
import ParkingManager from './parkingManager';
const parkingManager = new ParkingManager();
Park a vehicle:
const result = parkingManager.parkVehicle(vehicle, startTime, endTime);
console.log(result);
Exit a vehicle:
const exitResult = parkingManager.exitVehicle(vehicle, endTime);
console.log(exitResult);
Examples

Parking a Vehicle
const vehicle = {
    id: 1,
    name: 'Bike1',
    vehicleType: 'bike',
    owner: {
        name: 'John Doe',
        paymentMethod: 'credit card'
    }
};

const startTime = new Date('2024-12-28T08:00:00');
const endTime = new Date('2024-12-28T10:00:00');
const result = parkingManager.parkVehicle(vehicle, startTime, endTime);
console.log(result);
Exiting a Vehicle
const endTime = new Date('2024-12-28T12:00:00');
const exitResult = parkingManager.exitVehicle(vehicle, endTime);
console.log(exitResult);
Future Enhancements

Add support for electric vehicle charging spots.
Extend payment options.
Enhance parking charge calculation logic for varying rates.
Implement a user-friendly frontend interface.
License

This project is licensed under the MIT License. See the LICENSE file for details.

Contributing

Contributions are welcome! Feel free to submit a pull request or report an issue in the repository.

