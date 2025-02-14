# Employee Management System (EMS) Backend
---

## Overview

This project is a backend implementation of an Employee Management System (EMS) using **Node.js**, **Express**, **GraphQL (Apollo Server)**, and **MongoDB**. It provides a secure authentication system with JWT and a set of API endpoints to manage employee data efficiently.

---

## Features

- **User Authentication:**
  - Secure signup and login with JWT-based authentication.
- **Employee Management:**
  - Retrieve all employees.
  - Fetch employee details by ID.
  - Search employees by department or designation.
  - Add, update, and delete employee records.
- **Validation & Error Handling:**
  - Input validation using `express-validator`.
  - Robust error handling to ensure API stability.

---


### GraphQL Playground

Access the GraphQL Playground at:
```
http://localhost:4001/graphql
```

### Example Operations

#### **User Authentication**

- **Signup:**

  ```graphql
  mutation {
    signup(username: "testuser", email: "test@example.com", password: "password123") {
      token
      user {
        id
        username
        email
      }
    }
  }
  ```

- **Login:**

  ```graphql
  query {
    login(usernameOrEmail: "testuser", password: "password123") {
      token
      user {
        id
        username
        email
      }
    }
  }
  ```

#### **Employee Operations** *(Requires Authorization)*

- **Get All Employees:**

  ```graphql
  query {
    getAllEmployees {
      id
      first_name
      last_name
      email
      designation
      department
      salary
      date_of_joining
    }
  }
  ```

- **Get Employee by ID:**

  ```graphql
  query {
    getEmployeeById(id: "employee_id_here") {
      id
      first_name
      last_name
      email
      gender
      designation
      salary
      date_of_joining
      department
      employee_photo
    }
  }
  ```

- **Search Employee by Department/Designation:**

  ```graphql
  query {
    searchEmployeeByDeptDesg(department: "Engineering", designation: "Developer") {
      id
      first_name
      last_name
      email
      designation
      department
    }
  }
  ```

- **Add Employee:**

  ```graphql
  mutation {
    addEmployee(
      first_name: "John",
      last_name: "Doe",
      email: "john.doe@example.com",
      gender: "Male",
      designation: "Developer",
      salary: 1500,
      date_of_joining: "2023-01-15",
      department: "Engineering",
      employee_photo: "john_doe.png"
    ) {
      id
      first_name
      last_name
      email
    }
  }
  ```

---



