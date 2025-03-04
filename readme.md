# this backend is run on port 5555

# database is mongodb 

# End points for crud operation
1️⃣ Create User

Method: POST
Endpoint: /createUser

Request Body:

{
  "firstName": "John",
  "lastName": "Doe",
  "emailID": "john@example.com",
  "password": "securepassword",
  "age": 25,
  "gender": "Male"
}
Response: 201 Created (User created successfully)
2️⃣ Get All Users

Method: GET
Endpoint: /getUsers
Response:
[
  {
    "_id": "65a1b2c3d4e5f6g7h8i9j0",
    "firstName": "John",
    "lastName": "Doe",
    "emailID": "john@example.com",
    "age": 25,
    "gender": "Male"
  },
  ...
]
3️⃣ Get User by Email

Method: GET
Endpoint: /getUser
Request Body:

{
  "emailID": "john@example.com"
}
Response:

{
  "_id": "65a1b2c3d4e5f6g7h8i9j0",
  "firstName": "John",
  "lastName": "Doe",
  "emailID": "john@example.com",
  "age": 25,
  "gender": "Male"
}
4️⃣ Get User by ID

Method: GET
Endpoint: /getUserById/:id
Request Params: id (User’s MongoDB _id)
Response:

{
  "_id": "65a1b2c3d4e5f6g7h8i9j0",
  "firstName": "John",
  "lastName": "Doe",
  "emailID": "john@example.com",
  "age": 25,
  "gender": "Male"
}
5️⃣ Update User by ID

Method: PATCH
Endpoint: /users
Request Body:

{
  "_id": "65a1b2c3d4e5f6g7h8i9j0",
  "age": 26
}
Response: "User is successfully updated"
6️⃣ Delete User by ID

Method: DELETE
Endpoint: /deleteUser
Request Body:

{
  "_id": "65a1b2c3d4e5f6g7h8i9j0"
}
Response: "User is successfully deleted"
