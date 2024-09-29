
# Smoke Trees Assignment

## Project Overview
This project is a simple Express.js application that allows users to register with an associated address. It uses Sequelize as an ORM to manage interactions with a MySQL database.

## Prerequisites
Before you begin, ensure you have the following installed on your machine:
- **Node.js** (v14 or higher)
- **MySQL Server**
- **npm** (Node Package Manager)

## Installation
Follow these steps to set up the project on your local machine:

1. **Clone the repository**:
   Open your terminal and run:
   ```bash
   git clone https://github.com/yourusername/smoke_tree_assignment.git
   cd smoke_tree_assignment
   ```

2. **Install necessary dependencies**:
   Open your terminal and run:
   ```bash
   npm install
   ```

3. **Create a MySQL database**:
   Access your MySQL command line or a MySQL client and run:
   ```sql
   CREATE DATABASE smoke_trees_database;
   ```

4. **Update the database configuration**:
   If your MySQL username or password is different, edit the `config/database.js` file to reflect your credentials.

## Usage
To start the server, follow these steps:

1. **Run the server**: In your terminal, execute:
   ```bash
   node server.js
   ```

2. **Access the application**:
   Open your web browser and navigate to:
   ```plaintext
   http://localhost:3000
   ```

## API Endpoints

### Register User
- **Endpoint**: `POST /register`
- **Request Body**:
  ```json
  {
    "name": "your name",
    "address": "your address"
  }
  ```

- **Responses**:
  - **201 Created**: User and address created successfully.
  - **400 Bad Request**: Username already exists.
  - **500 Internal Server Error**: An error occurred.

## Database Models

### User Model
- **Fields**:
  - `id`: Primary key, auto-incrementing integer.
  - `name`: String, unique, cannot be null.

### Address Model
- **Fields**:
  - `id`: Primary key, auto-incrementing integer.
  - `userId`: Foreign key referencing the User's id, cannot be null.
  - `address`: String, cannot be null.

## Relationships
- **One-to-Many**: A user can have multiple addresses.
