# Library Reservation System - Frontend

This project is the frontend part of the Library Reservation System, built using **React** with **Vite**, **Tailwind CSS**, **react-query**, **axios**, and **TypeScript**. The application allows users to view and reserve books, search through available titles, and check their reservations.

## How to Run

To run this project locally:

```bash
gh repo clone reikal1337/library-reservation
cd dir
npm install
npm run dev

```

The app will start running at `http://localhost:5173`

### Env

    	file: .env
    	VITE_BACK_API_URL=http://localhost:5144/api


## Project Overview

This project fulfills the technical requirements by implementing the following key features:

- **Book List View**: Displays a paginated list of books available in the library, with each book showing its name, picture, and year.
- **Search Functionality**: Users can search for books by title, year, and type (Book or Audiobook).
- **Reservation Process**: Users can select options such as book type, quick pickup, and the number of days for a reservation.
- **Cart Management**: Users can add multiple books to their cart and finalize reservations. Each reservation applies a service fee, with the book prices calculated based on type and the number of days.
- **Reservations View**: Users can view their reservations in a paginated list, with each reservation showing the included books and pricing details.

### Technical Details

- **State Management**: Context API was used for state management since the state requirements are minimal and using more complex solutions (e.g., Redux) would be overkill.
- **API Integration**: The frontend communicates with the backend API using `axios` and leverages `react-query` to handle data fetching, caching, and error handling.
- **Pagination & Modal**: Books are displayed with pagination. A modal appears when a user clicks on a book, allowing them to make a reservation.

### Notes on the Implementation

- This is not a production-ready project but meets the core technical requirements outlined in the brief.
- The search functionality is linked directly to the URL, allowing users to share specific search results and book details.
- A book can be shared trough link, as each book has its own link.
- All calculation logic is implemented in the backend API to ensure consistent results.

## Known Limitations

- **Simple State Management**: Given the minimal requirements, Context API was chosen over more robust solutions.
