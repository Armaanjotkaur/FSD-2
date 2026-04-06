Flask MySQL Students CRUD API
A RESTful API built using Flask, MySQL (Aiven Cloud), and Marshmallow for managing student records with full CRUD functionality and validation.

Features
* Create, Read, Update, Delete (CRUD) operations
* Input validation using Marshmallow
* Cloud MySQL database (Aiven)
* REST API architecture
* Error handling
* JSON responses

Tech Stack
* Python (Flask)
* MySQL (Aiven Cloud)
* SQLAlchemy (ORM)
* Marshmallow (Validation)
* PyMySQL


.
├── app.py
├── requirements.txt
└── README.md

Create virtual environment
python -m venv vir-db
Activate it (Windows):
vir-db\Scripts\activate

Install dependencies
pip install -r requirements.txt

Configure Database
Update this in `app.py`:

SQLALCHEMY_DATABASE_URI = "your_aiven_mysql_url"

Run the app
python app.py


API Endpoints

Home
GET /


Create Student
POST /students

Body:
{
"uid": "S101",
"name": "Armaan",
"age": 21
}

Get All Students
GET /students

Get Single Student
GET /students/<id>

Update Student
PUT /students/<id>

Body:
{
"name": "Updated Name"
}

Delete Student
DELETE /students/<id>

Testing
Use Postman to test all endpoints.









