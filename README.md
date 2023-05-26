# 1. Title

 Library_Management_System

# 2. Introduction

The Admin Books system is a comprehensive software solution designed to facilitate book management operations such as adding, deleting, and editing books. 
It also includes features for book borrowing, allowing users to specify the type of borrowing, and subsequently returning the book within the specified period while making the necessary payment.

# 3. Technologies And Tools

- Node.js
- Express.js
- JavaScript
- bcrypt library to encrypt password
- MongoDB
- EJS View Engine
- BootStrap
- MongoDBCompass
- Mongoose Atlas
- VS Code
- Postman
- Railway Deployment

# 4. Features

## 4.1 Book Management

The system provides an intuitive interface for administrators to add new books to the library inventory. This includes entering details such as title, author, genre, publication date, and other relevant information. Additionally, administrators can delete existing books from the system or modify their details as needed.

## 4.2 Book Borrowing

Users of the system can browse through the available books and choose to borrow a specific book. The system enables users to specify the type of borrowing, such as short-term loan or long-term loan, based on predefined borrowing policies. Users may also provide additional information, such as their contact details or student ID, for record-keeping purposes.


## 4.3 Return and Payment

Once the borrowing period is complete, users are expected to return the borrowed book to the library. The system keeps track of the due dates and sends reminders to users when the return date approaches. Upon returning the book, the system calculates the applicable fees based on the borrowing type and duration. Users can then make the necessary payment through a preferred payment method, such as cash, credit card, or an integrated payment gateway.

## 4.4 User Management

The Admin Books system provides functionality for managing user accounts. Administrators can create new user accounts, update user information, and deactivate or suspend accounts if necessary. This ensures proper tracking of borrowers and helps maintain the integrity of the system.

## 4.5 Reporting and Analytics

The system offers reporting and analytics features to administrators, providing insights into book borrowing patterns, popular genres, overdue books, and other relevant metrics. These reports assist administrators in making informed decisions regarding book acquisition, policy adjustments, and resource allocation.

# 5. Setup
## 1. install this project

## 2. create Database using mongoose

## 3. open cmd and write this command "npm i" the "npm run start:dev"
