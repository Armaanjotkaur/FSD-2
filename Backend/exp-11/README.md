Experiment-11

Title: Develop Microservice-Based Backend Module

Experiment Details
This experiment focuses on building a microservice-based backend system using Python (Flask). Two independent services were created:

Customer Service
* API to fetch customer details along with their orders
* Communicates with Order Service using REST API

Order Service
* API to fetch and update order status
* Stores order data in-memory

Both customer and order data are stored using in-memory variables.

Services Overview
- Customer Service
* Fetches customer details
* Calls Order Service to retrieve order data

Order Service
* Provides order details for a user
* Supports updating order status

Deployment (Render)

Customer Service
https://exp11-customer-service.onrender.com

Order Service
https://exp11-order-service.onrender.com

Final API (Microservice Communication)
https://exp11-customer-service.onrender.com/customers/101/orders

This API returns:
* Customer details
* Order details (from Order Service)

How It Works

1. A request is sent to Customer Service
2. Customer Service processes the request
3. It calls Order Service via HTTP request
4. Order Service returns order data
5. Customer Service combines both responses
6. Final result is returned to the user

 Testing
* APIs were tested using Postman
* Verified:

  * Customer Service endpoints
  * Order Service endpoints
  * Inter-service communication

Learning Outcomes

* Understood microservices architecture
* Learned to build REST APIs using Flask
* Implemented communication between services using HTTP requests
* Gained hands-on experience with Postman for API testing
* Learned deployment of services on Render
* Understood real-world service integration using deployed URLs

Conclusion

This experiment demonstrates how microservices can be developed, deployed independently, and integrated using REST APIs. It provides a basic understanding of real-world backend architecture.

---

✨ Developed as part of FSD-II Lab (Experiment-11)
