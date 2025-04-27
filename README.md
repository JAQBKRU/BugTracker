# LepszaSrednia-Project
Team project developed by Lepsza Średnia.

## Project Description:
The Bug Tracking System is an application that enables IT teams to efficiently report, track, and manage bugs and other issues within software.

## Features:
- **Issue Reporting** – Ability to create new bug reports with descriptions, priority, and category.
- **Issue Assignment** – Assigning bugs to specific team members.
- **Status Tracking** – Monitoring the statuses of issues (e.g., New, In Progress, Resolved, Closed).
- **Issue Prioritization** – Assigning priority levels to issues (e.g., Low, Medium, High, Critical).
- **Change History** – Tracking changes made to an issue, such as status updates or description edits.
- **Filtering and Searching** – Advanced filtering and searching options for issues.
- **Registration/Login** - Creating a new user with appropriate roles and an encrypted password in the database, as well as logging in before making a report.

## Technologies:
- **Frontend:** Angular / TypeScript
- **Backend:** Java / Spring Boot
- **Database:** PostgreSQL

## Installation and Setup

### Prerequisites
Before you begin, ensure that you have the following software installed on your local machine:

- **Node.js** and **npm**
- **Angular CLI**
- **Java JDK 21+**
- **Maven**

### Database Setup
1. Navigate to the `database_setup` directory:
   ```bash
   cd database_setup
   ```
2. Create and run the database container in Docker:
	```
	docker compose up
	```

### Backend Setup
1. Navigate to the backend directory:
	```
	cd backend/bugtracker
	```
2. Build the project using Maven:
	```
	mvn clean install
	```
3. Run the application:
	```
	mvn spring-boot:run
	```
4. The API will be available at: http://localhost:8080/

### Frontend Setup
1. Navigate to the frontend directory:
	```
	cd frontend/bugtracker
	```
2. Install the necessary dependencies:
	```
	npm install
	```
3. Run the application:
	```
	ng serve:
	```
4. The application will be available at: http://localhost:4200/

## Useful Commands
1. **Clone the Repository:**
	```bash
	git clone https://github.com/JAQBKRU/BugTracker.git
	```
2. Build the Docker image:
	```
	docker compose build
	```
3. Run the application:
	```
	docker compose up
	```

##Quick Start
- Clone the repository.
- Set up the database container using Docker: docker compose up.
- Build and run the backend using Maven: ./mvnw clean install and ./mvnw spring-boot:run.
- Install and run the frontend with Angular: ng serve and access it at http://localhost:4200/.
- Use the API available at http://localhost:8080/.