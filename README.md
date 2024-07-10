# Food Storage Project

The Food Storage Project is a web application designed to manage food items in storage. It consists of both frontend and backend components built using Angular and Nest.js respectively.

## Features

- **CRUD Operations**: Users can perform CRUD (Create, Read, Update, Delete) operations on food items, including adding new items, viewing existing items, updating item information, and removing items from storage.
- **Responsive Design**: The frontend is built using Angular, providing a responsive and intuitive user interface that adapts to different screen sizes and devices.
- **RESTful API**: The backend, built with Nest.js, exposes a RESTful API that communicates with the frontend to perform data operations.
- **Swagger Documentation**: API documentation is generated using Swagger, providing detailed information about each endpoint and its usage.
- **Postman Testing**: Testing of CRUD operations can be done using Postman, ensuring the reliability and functionality of the API endpoints.
- **Data Persistence**: Food item data is stored in a MongoDB database, ensuring data persistence and reliability.

## Endpoints

- **GET /food-items**: Retrieve a list of all food items stored in the system.
- **GET /food-items/{id}**: Retrieve details of a specific food item by its unique identifier.
- **POST /food-items**: Add a new food item to the storage system.
- **PUT /food-items/{id}**: Update the information of an existing food item.
- **DELETE /food-items/{id}**: Delete a food item from the storage system.

## Data Model

- **FoodItem**:
  - **id** (string): Unique identifier for the food item (MongoDB ObjectId).
  - **name** (string): Name of the food item.
  - **quantity** (number): Quantity of the food item available in storage.
  - **expirationDate** (Date): Expiration date of the food item.

## Technologies Used

- **Frontend**:
  - Angular
  - Bootstrap
  - HTML5
  - CSS3
  - TypeScript

- **Backend**:
  - Nest.js
  - TypeScript
  - MongoDB
  - Mongoose

## Installation

To run the Food Storage Project locally, follow these steps:

1. Clone this repository to your local machine.
2. Navigate to the `food-storage-frontend` directory and run `npm install` to install frontend dependencies.
3. Navigate to the `food-storage-backend` directory and run `npm install` to install backend dependencies.
4. Set up your MongoDB database and configure the connection details in the backend.
5. Run `npm start` in both the frontend and backend directories to start the application.

## Usage

Once the application is running locally, you can access it by navigating to `http://localhost:4200` in your web browser. From there, you can perform CRUD operations on food items through the user interface.

For API documentation, you can access the Swagger documentation by navigating to `http://localhost:3000/api` in your web browser.

## Contributing

Contributions to the Food Storage Project are welcome! Feel free to fork this repository, make changes, and submit pull requests for review.

## Angular Components and Services

### Components

* **Food Item List Component**
  - Displays a list of food items with details.
  - Allows deleting of food items.
  - Provides a status indicator based on the expiration date.

* **Food Item Detail Component**
  - Displays detailed information about a specific food item.
  - Allows navigation to the edit page for updating food item details.

* **Food Item Form Component**
  - Handles adding new food items.
  - Handles updating existing food items.

### Services

* **Food Item Service**
  - Manages API calls for CRUD operations.
  - Provides methods for:
    - `getFoodItems()`: Retrieves all food items.
    - `getFoodItem(id: string)`: Retrieves a food item by ID.
    - `addFoodItem(foodItem: FoodItem)`: Adds a new food item.
    - `updateFoodItem(id: string, foodItem: FoodItem)`: Updates an existing food item.
    - `deleteFoodItem(id: string)`: Deletes a food item by ID.

## License

© 2024 WAJDI RAOUAFI. All rights reserved.
