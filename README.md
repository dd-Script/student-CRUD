# student-CRUD
Features

- Create a new student
- Get all students (supports pagination and filtering)
- Update a student by ID
- Delete a student by ID
- Get total student count
- Includes Postman Collection for easy testing

Setup Instructions

1. Clone the repository
```bash
git clone <your-repo-url>
cd student-crud
```

2. Install dependencies
```bash
npm install
```

3. Create a `.env` file
```
MONGODB_URI= your URL
PORT=3000
```

4. Start the server
```bash
npm start
```

Testing with Postman

How to Import and Use the Collection

1. Open Postman
2. Click the **Import** button in the top-left corner
3. Choose **Raw Text** or **File**
4. Paste or upload the Postman collection JSON file (provided separately)
5. Click **Import**
6. Make sure your server is running (`http://localhost:3000`)
7. Use the requests inside the imported collection to test each endpoint

Endpoints

| Method | Endpoint            | Description

| POST   | `/students`         | Create a new student            |
| GET    | `/students`         | Get all students                |
| GET    | `/students/count`   | Get total student count         |
| PUT    | `/students/:id`     | Update a student by ID          |
| DELETE | `/students/:id`     | Delete a student by ID          |


Sample Student JSON
{
  "firstName": "Alice",
  "lastName": "Smith",
  "email": "alice@example.com",
  "age": 21
}


Errors

| Code | Message                   | Cause                          |

| 400  | Validation error          | Missing or invalid field       |
| 404  | Student not found         | ID doesn't exist               |
| 409  | Email already exists      | Duplicate email during create  |
| 500  | Internal Server Error     | Something unexpected failed    |


