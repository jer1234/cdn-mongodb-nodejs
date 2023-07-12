# Node.js API with MongoDB README

##  CDN API


## Description
Node.js API specially crafted for CDN Project using mongoDB as database.




## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Endpoints](#endpoints)
- [Authentication](#authentication)
- [Database](#database)


## Installation

Prerequisite
Recommended : `Node: 16.13.0 Package Manager: npm 8.1.0`

Set up the MongoDB database:
- Install MongoDB: Follow the official MongoDB installation guide for your operating system.
- Start the MongoDB server: Run `mongod` command in a terminal window.
- Create a new MongoDB database: Run `mongo` command in another terminal window, then use the MongoDB shell to create a new database: eg. `use mydatabase`.
  

To install and run this Node.js API project locally, follow these steps:

1. Clone the repository: `git clone https://github.com/jer1234/cdn-mongodb-nodejs.git`
2. Navigate to the project directory: `cd cdn-mongodb-nodejs`
3. Install dependencies: `npm install`
4. Configure the API to connect to your MongoDB database:
   - Rename the `.env.example` file to `.env`.
   - Open the `.env` file and create & update :
     -`MONGO_DB_URL= ` variable with your MongoDB connection string.
     -`PORT=` variable with your preferred port.  
   - 
5. Start the API server: `node server.js`
6. The API should now be running on `http://localhost:{PORT}`.

## Usage

Once the API server is running, you can perform the following actions:

- Make HTTP requests to the available endpoints using tools eg. Postman.
- Create, retrieve, update, and delete data in the MongoDB database using the API endpoints.

## Endpoints

The following endpoints are available in this Node.js API:

- `GET /api/user`: Retrieve a list of users.
- `GET /api/user/:id`: Retrieve a specific user by username.
- `POST /api/user`: Create a new user.
- `PUT /api/user/:id`: Update an existing user by username.
- `DELETE /api/user/:id`: Delete a user by username.

For each endpoint, you can find detailed information about the request and response format in the source code.

## Authentication

This API does not require authentication.

## Database

This Node.js API uses MongoDB as the database. Ensure that you have MongoDB installed and running. You can modify the MongoDB connection string in the `.env` file to connect to your specific database.


## Additional Resources

- MongoDB Official Documentation: [https://docs.mongodb.com](https://docs.mongodb.com)
- Node.js Official Documentation: [https://nodejs.org/docs](https://nodejs.org/docs)

