# Library Reservation System - Backend

This project is the backend part of the Library Reservation System, built using **ASP.NET Core 8** with **C#**. The backend is structured using the **Clean Architecture** design pattern and provides all necessary endpoints for book retrieval, reservations, and business logic for pricing.

## How to Run

To run this project locally:

    gh repo clone reikal1337/library-reservationAPI

The app will be running at `http://localhost:5144`

### .Env

    	file: .env
    	VITE_BACK_API_URL=http://localhost:5144/api

## Project Overview

The backend handles the core logic for the Library Reservation System. It includes the following features:

- **Book List API**: An endpoint to fetch a paginated list of books with search functionality by name, type, and year.
- **Reservation API**: An endpoint where users can reserve books by submitting details such as type (Book or Audiobook), days reserved, and quick pickup.
- **Pricing Logic**: All reservation pricing is calculated based on book type and days. Discounts apply for longer reservations:
  - 3 days: 10% off

  - 10 days: 20% off
  - Quick pickup adds a €5 fee to the reservation.
  - A base service fee of €3 is applied to every reservation.
  - Book (€2/day)
  - Audiobook (€3/day).
- **Database**: An in-memory EF Core database is used to store books and reservations. This is suitable for the demo but not for production.

### Architecture

This project follows **Clean Architecture** principles, ensuring clear separation between core business logic and the infrastructure. Key layers include:

- **Domain Layer**: Contains core entities and business rules.
- **Application Layer**: Handles all use cases and business logic, including services, DTOs, and mappers (using **AutoMapper**).
- **Infrastructure Layer**: Implements the EF Core repository for books and reservations.
- **API Layer**: Provides the RESTful API interface.

### Dependency Injection & AutoMapper

- **Dependency Injection**: Used throughout the project for repositories and services, ensuring loosely coupled components.
- **AutoMapper**: Handles mapping between entities and DTOs, simplifying object transformation across layers.
-

### Known Limitations

- **Unit Testing**: Unit tests have not been implemented for the backend.
- **In-Memory Database**: The current use of an in-memory database limits the persistence beyond runtime, and it is not suitable for production.

## Notes on the Implementation

- The project fulfills the "Technical Requirements" fully, although the "Functional Requirements" have been slightly adapted. For example, users can add multiple books to a reservation, and pricing is calculated for each book with only one service fee applied per reservation.
