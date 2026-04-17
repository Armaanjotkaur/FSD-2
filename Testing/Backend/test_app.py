import pytest
from app import app
import routes.students_routes as student_module

@pytest.fixture
def client():
    app.testing = True
    return app.test_client()

# Reset data before each test
@pytest.fixture(autouse=True)
def clear_data():
    student_module.students.clear()
    student_module.current_id = 1

def test_create_student(client):
    response = client.post("/students", json={"name": "Student-1"})
    
    assert response.status_code == 201
    assert response.json["name"] == "Student-1"

def test_get_students(client):
    client.post("/students", json={"name": "Student-1"})
    
    response = client.get("/students")
    
    assert response.status_code == 200
    assert isinstance(response.json, list)
    assert len(response.json) == 1

def test_get_single_student(client):
    client.post("/students", json={"name": "Student-1"})
    
    response = client.get("/students/1")
    
    assert response.status_code == 200
    assert response.json["id"] == 1

def test_update_student(client):
    client.post("/students", json={"name": "Student-1"})
    
    response = client.put("/students/1", json={"name": "Updated"})
    
    assert response.status_code == 200
    assert response.json["name"] == "Updated"

def test_delete_student(client):
    client.post("/students", json={"name": "Student-1"})
    
    response = client.delete("/students/1")
    
    assert response.status_code == 200