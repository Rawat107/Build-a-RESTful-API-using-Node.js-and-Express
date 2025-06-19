# Objective:

A simple RESTful API for managing a list of users, testing concepts such as routing, middleware, HTTP methods, status codes, error handling, and interaction with a data source.

## How to run:

### 1. Initialize a Node.js project: (5 marks)

- `npm install Express`
- `node --watch index.js`

### 2. Use thunderclient or postman to test the url response.

# Test Screenshots of All Methods

## GET

### `GET /users` – Fetch the list of all users.

##### !Screenshot of GET /users
![alt text](images/GETall.png)

### `GET /users/:id` – Fetch details of a specific user by ID.

##### !Screenshot of GET /users/:id
![alt text](images/GET1.png)

### Error while GET user by ID

##### !Screenshot of GET /users/:id Error
![alt text](images/GETerr.png)

---

## POST Method

### `POST /user` – Add a new user

#### Success:

##### !Screenshot of successful POST /user
![alt text](images/POST.png)

#### Errors While POST:

- **Missing fields**
  ##### !Screenshot of missing fields POST error
  ![alt text](images/POSTerr1.png)
- **Invalid fields**
  ##### !Screenshot of invalid fields POST error
  ![alt text](images/POSTerr2.png)

---

## PUT Method

### `PUT /user/:id` – Update details of an existing user

#### Success:

##### !Screenshot of successful PUT /user/:id
![alt text](images/PUT.png)

#### Errors While PUT:

- **Invalid fields**
  ##### !Screenshot of invalid fields PUT error
  ![alt text](images/PUTerr1.png)
- **Missing fields**
  ##### !Screenshot of missing fields PUT error
  ![alt text](images/PUTerr2.png)
- **User not found**
  ##### !Screenshot of user not found error
  ![alt text](images/PUTerr3.png)

---

## DELETE Method

### `DELETE /user/:id` – Delete a user by ID

#### Success and displaying the deleted user:

##### !Screenshot of DELETE success
![alt text](/images/DEL.png)

#### Now when we GET all users, only 3 users are left:

##### !Screenshot of updated user list after DELETE
![alt text](images/DEL1.png)
