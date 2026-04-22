Experiment 20 - CI/CD Pipeline with Docker

Project Overview
This project demonstrates the implementation of a CI/CD pipeline for a full stack application. It includes backend and frontend testing, Docker containerization, and automated workflows using GitHub Actions.

Technologies Used
- Python (Flask)
- Pytest (Backend Testing)
- React (Vite)
- Vitest + Testing Library (Frontend Testing)
- Docker
- GitHub Actions (CI/CD)

Backend Testing
- Flask-based API
- CRUD operations implemented
- Tested using Pytest

Frontend Testing
- React application built using Vite
- Unit testing using Vitest
- Form validation testing included

CI/CD Pipeline
- Implemented using GitHub Actions
- Automatically runs on every push
- Steps included:
  - Install dependencies
  - Run backend tests
  - Run frontend tests
  - Build Docker image
  - Run container

Docker Implementation
- Dockerfile created for backend application

Build Docker Image
```bash
docker build -t backend-app .