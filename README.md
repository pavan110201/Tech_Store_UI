# Enterprise Level Full-Stack Web Application

A full-stack enterprise-level web application with a Spring Boot backend and a React TypeScript frontend. The backend is built using Java 17, Spring Framework 3.5, Gradle, and Docker. The frontend leverages React with MUI, Axios, React Query, and Vitest. This application features full CRUD operations, Swagger API documentation, robust testing, and containerized deployment.



## Tech Stack

###  Backend
- **Language:** Java 17  
- **Framework:** Spring Boot 3.5  
- **Build Tool:** Gradle  
- **IDE:** Eclipse IDE  
- **Database:**
  - H2 (Development)
  - MariaDB (Production)  
- **API Documentation:** Swagger  
- **Testing:** JUnit 5  
- **API Testing:** Postman  
- **Containerization:** Docker  

###  Frontend
- **Language:** TypeScript  
- **Framework:** React  
- **UI Library:** MUI (Material-UI)  
- **Networking:** Axios + React Query v4  
- **Testing:** Vitest + React Testing Library  
- **Icons:** MUI Icons  
- **Dev Environment:** Vite, Visual Studio Code


##  Getting Started

###  Prerequisites

- Java 17  
- Gradle  
- Docker  
- Node.js  
- Visual Studio Code  
- MariaDB (for production)  
- Postman (for API testing)

---

##  Backend Setup

###  Project Setup
- Clone the Repository: git clone https://github.com/pavan110201/Tech_Store_UI.git
- Build the Application: ./gradlew clean build
- Run Locally with H2: ./gradlew bootRun
- Access Swagger UI: 
- Navigate to: http://localhost:8080/swagger-ui/index.html

### Testing
- Run unit tests with: ./gradlew test

### Database Configuration:
- For Development:
     - Uses H2 in-memory database by default.
     - Accessible at: http://localhost:8080/h2-console
     - Credentials: defined in application.yml

- For Production:
    - Update your application-prod.yml with MariaDB credentials and JDBC URL.

### API Documentation:
- Swagger UI: http://localhost:8080/swagger-ui/index.html
- OpenAPI Docs: http://localhost:8080/v3/api-docs

### Docker Deployment
- Build Docker Image for Database: docker run --name techdb -e MYSQL_ROOT_PASSWORD=your_pwd -e MYSQL_ DATABASE=techdb mariadb
- Run the following command to build the Docker image: docker build -t techstorebackend
- Run our Spring Boot container and link the MariaDB container: docker run -p 8080:8080 --name techapp --link techdb:mariadb -d  techwarehousebackend
- For production, ensure your MariaDB container is running and update the application properties.yml.

# Frontend Setup
   # Environment Setup
        - Install Node.js
        -  Install Visual Studio Code
   # Create React App with TypeScript
        - npm create vite@latest your-app-name --template react-ts
        - cd your-app-name
        - npm install
   # Clone the repo (if not already done)
        - git clone https://github.com/pavan110201/Tech_Store_UI.git
        - cd Tech_Store_UI/frontend
   # Install dependencies
        - npm install
   # Install Additional Packages
        - npm install @mui/material @emotion/react @emotion/styled
        - npm install axios @tanstack/react-query@4
        - npm install @mui/icons-material
        - npm install -D vitest @testing-library/react @testing-library/jest-dom jsdom
  # Run the App
        - npm run dev

# Run Frontend Testing with Vitest
          - npx vitest
# Connecting Frontend with Backend
    - Ensure the backend is running on http://localhost:8080
    - Configure baseURL for Axios in the frontend.

### Docker Deployment Frontend
  # Step 1: Build the React App
        - FROM node:18-alpine AS builder
        - WORKDIR /app
        - COPY . .
        - RUN npm install
        - RUN npm run build
  # Step 2: Serve with Nginx
         - FROM nginx:alpine
        - COPY --from=builder /app/dist /usr/share/nginx/html
        - EXPOSE 80
        - CMD ["nginx", "-g", "daemon off;"]
  # Build the Docker Image
        - docker build -t laptpfront ./laptpfront
  #  Run the Docker Container
        - docker run -d -p 3000:80 --name techstore-ui laptpfront
#  Access the frontend 
    -  http://localhost:3000


