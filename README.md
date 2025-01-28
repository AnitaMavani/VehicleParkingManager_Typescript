# VehicleParkingManager

## Small Vehicle Management System
## Overview
This is a TypeScript-based project for managing small vehicle operations, including:
- Vehicle details
- Parking spot management
- Parking charge calculation
- Payment processing

The system provides functionalities such as parking a vehicle, charging for the parking duration, processing payments, and exiting vehicles from parking spots.

## Features
- **Parking Spot Management**: Assigns parking spots based on vehicle type (bike, compact, or large).
- **Parking Charge Calculation**: Calculates charges for parked vehicles based on the duration of the stay.
- **Payment Processing**: Integrates payment handling to ensure smooth operations.
- **Invoice Generation**: Generates invoices for each parking session.

## File Structure

- `parkingcharge.ts`: Contains logic for calculating parking charges.
- `parkingmanager.ts`: Manages parking operations including assigning and releasing spots.
- `parkingspot.ts`: Defines parking spot details and status.
- `paymentmanager.ts`: Handles payment processing.
- `paymentmethod.ts`: Represents payment methods.
- `constants.ts`: Stores constants like parking spot types.
- `utils.ts`: Utility functions such as mapping vehicles to parking spot types.
- `invoice.ts`: Handles invoice generation for completed transactions.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/VehicleParkingManager_Typescript.git
   ```

2. Navigate to the project directory:
   ```bash
   cd VehicleParkingManager_Typescript
   ```

3. Install dependencies (if any):
   ```bash
   npm install
   ```
4. Compile the TypeScript files:
   ```bash
   npm run build
   ```

## Usage

1. Import necessary modules in your TypeScript file:
   ```
   import ParkingManager from './parkingmanager.ts';
   const parkingManager = new ParkingManager();
   ```

2. Park a vehicle:
   ```
   const result = parkingManager.parkVehicle(vehicle, startTime, endTime);
   console.log(result);
   ```

3. Exit a vehicle:
   ```
   const exitResult = parkingManager.exitVehicle(vehicle, endTime);
   console.log(exitResult);
   ```

## Examples

### Parking a Vehicle
```
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
```

### Exiting a Vehicle
```
const endTime = new Date('2024-12-28T12:00:00');
const exitResult = parkingManager.exitVehicle(vehicle, endTime);
console.log(exitResult);
```

## Future Enhancements
- Add support for electric vehicle charging spots.
- Extend payment options.
- Enhance parking charge calculation logic for varying rates.
- Implement a user-friendly frontend interface.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contributing
Contributions are welcome! Feel free to submit a pull request or report an issue in the repository.
