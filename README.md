# LepszaSrednia-Project
Team project developed by Lepsza Średnia.

## Opis projektu:
System do zarządzania zgłoszeniami błędów i problemów (Bug Tracking System) to aplikacja umożliwiająca zespołom IT efektywne zgłaszanie, śledzenie i zarządzanie błędami oraz innymi problemami w oprogramowaniu.

## Funkcjonalności:
- **Rejestrowanie zgłoszeń** – Możliwość dodawania nowych zgłoszeń o błędach z opisem, priorytetem i kategorią.
- **Przypisywanie zgłoszeń** – Przypisywanie błędów do konkretnych członków zespołu.
- **Śledzenie statusu** – Monitorowanie statusów zgłoszeń (np. Nowe, W toku, Rozwiązane, Zamknięte).
- **Priorytetyzacja zgłoszeń** – Oznaczanie zgłoszeń priorytetami (np. Niski, Średni, Wysoki, Krytyczny).
- **Historia zmian** – Śledzenie zmian w zgłoszeniu, np. zmiana statusu, edycja opisu.
- **Filtrowanie i wyszukiwanie** – Zaawansowane opcje filtrowania i wyszukiwania zgłoszeń.
- **Rejestracja/logowanie** - Tworzenie nowego użytkownika posiadającego odpowiednie role i zaszyfrowane hasło w bazie danych, a także logowanie przed dokonaniem zgłoszenia.

## Technologie:
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