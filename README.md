# Django and React Weather Application

Welcome to the Django and React Weather Application! This project combines the power of Django for backend functionality, including user registration and Google login, with React for a dynamic and interactive frontend experience. The application fetches weather data from an external API and presents it to users in an intuitive and visually appealing manner.

## Initial Setup

To run the project locally, follow these steps:

### Prerequisites

- Python (3.7 or higher)
- Node.js
- npm or yarn
- Git

### Clone the Repository

```bash
git clone https://github.com/yourusername/your-repository.git
cd your-repository
```

### Backend Setup (Django)
Create a virtual environment:

```bash
Copy code
python -m venv venv
```

### Activate the virtual environment:

On Windows:
```bash
Copy code
venv\Scripts\activate
On macOS and Linux:
bash
Copy code
source venv/bin/activate
```

Install Python dependencies:

```bash
Copy code
pip install -r requirements.txt
```

Apply database migrations:

```bash
Copy code
python manage.py migrate
```
Create a superuser:
```bash
Copy code
python manage.py createsuperuser
```
Run the Django development server:

```bash
Copy code
python manage.py runserver
The backend will be running at http://localhost:8000.
```

Frontend Setup (React)
Navigate to the frontend directory:

```bash
Copy code
cd frontend
```
Install npm packages:

```bash
Copy code
npm install   # or yarn install
```
Run the React development server:

```bash
Copy code
npm start   # or yarn start
The frontend will be running at http://localhost:3000.
