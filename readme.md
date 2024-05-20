# Airline Reservation System

## Table of Contents

- [Introduction](#introduction)
- [Project Overview](#project-overview)
- [Database Design](#database-design)
- [Functionality](#functionality)
- [Reports](#reports)
- [Installation](#installation)
- [Usage](#usage)
- [License](#usage)

---

## Introduction

Welcome to the Airline Reservation System project developed by our team. This system is designed to manage flight bookings, passenger details, and flight schedules for skyLink Airways, an independent subsidiary of Virgin Airlines operating in Indonesia. The system includes features for user registration, flight selection, seat allocation, and ticket booking.

## Project Overview

SkyLink Airways is expanding its services to cover multiple destinations worldwide. To facilitate this expansion, the system has been developed with the following key features:

- Flight booking and management
- User registration and login
- Different user categories (Frequent and Gold) with discounts
- Seat selection
- Multiple aircraft types with varying seating capacities
- Hierarchical location structure for airports and cities
- Various reports to track passenger data and revenue

## Database Design

The heart of this system is a robust database design that encapsulates all the necessary entities and relationships. The database ensures data consistency and integrity by employing primary keys, foreign keys, procedures, functions, and triggers. Indexing is used where necessary for optimal performance.

## Functionality

### User Registration and Login

Passengers can either continue as guests or register with the platform. Registered users are categorized as Frequent and Gold based on their booking history and are eligible for discounts.

### Flight Booking

Users can view the flight schedule for each day and select a flight. Seat selection is available, ensuring that no two users can select the same seat. The system does not overbook seats.

### Ticket Booking

Booking is considered complete after payment, which is handled externally. A ticket is allocated to the passenger upon successful booking. Ticket prices may vary depending on the traveler class (Economy, Business, or Platinum).

### Hierarchical Location Structure

Airports are organized hierarchically, allowing for easy expansion to new destinations. Each airport has a universally agreed airport code, and the city of the airport location is stored. The levels of hierarchy may vary based on the location.

## Reports

The system generates various reports, including:

- All passengers traveling on a specific flight, categorized by age (below 18 and above 18).
- The number of passengers traveling to a given destination within a specified date range.
- The number of bookings by each passenger type within a specified date range.
- Past flights, states, and passenger counts data for a given origin and destination.
- Total revenue generated by each aircraft type.

## Installation

To set up this project locally, follow these steps:

1. Clone the repository:

- ```
  git clone https://github.com/kobinarth-panchalingam/Airline-Reservation-System.git
  ```

2. Install the required dependencies for the front end and back end:

- Front end (React): Navigate to the `client` directory and run:

  ```
  npm install
  ```

- Back end (Node.js): Navigate to the `server` directory and run:
  ```
  npm install
  ```

3. Navigate to the project's database directory and locate the `bairways.sql` file.

4. Run the SQL script in MySQL workbench to create the database schema.

- Database is already filled with dummy data. Flights are sheduled between Feb 1st 2024 and Feb 7th 2024.

## Backend Configuration

Configure the backend server by creating an `.env` file in the `server` directory and fill in the following details:
you need to put your localhost username and password

```
DB_HOST=localhost
DB_USER={root}
DB_PASSWORD={password}
DB_DATABASE=bairways
DB_PORT=3306
```

Also comment the ssl part in the dbconfig.js file.

To start the backend server, run the following command from the `server` directory:

`node server.js`

## Frontend Configuration

Configure the frontend by creating an `.env` file in the `client` directory and set the following environment variable:

`REACT_APP_API_URL=http://localhost:4000`

To start the frontend, run the following command from the `client` directory:

`npm start`

## Usage

Once the project is set up and both the backend and frontend servers are running, users can access the system through the http://localhost:3000. They can view flight schedules, register or log in, and book flights.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

---

Feel free to reach out to kobinarth22@gmail.com for any questions or clarifications related to this project. Thank you for your interest and contribution!
