<h1>Features</h1>
User Registration & Login: Secure signup and signin with password hashing (bcryptjs).

JWT Token Generation: Issues a signed token upon successful authentication.

Authentication Middleware: Validates incoming requests to ensure access is granted only to authenticated users with a valid token.

Protected Routes: Demonstrates how to lock down specific API endpoints so they cannot be accessed anonymously.
<h1>Tech Stack</h1>
Runtime: Node.js

Framework: Express.js

Database: MongoDB & Mongoose

Authentication: JSON Web Tokens (jsonwebtoken), Bcrypt (bcryptjs)

Environment Configuration: Dotenv
<h1>Prerequisites</h1>
Make sure you have the following installed on your machine:

Node.js (v14 or higher)

MongoDB (Local installation or a MongoDB Atlas cluster)
<h1>Installation</h1>
1. Clone the repository<br>
2. Install dependencies: npm install express bcryptjs jsonwebtoken mongoose nodemon dotenv <br>
3. npm start : npm run dev
