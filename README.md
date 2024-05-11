# Django and React Weather Application

Welcome to the Django and React Weather Application! This project combines the power of Django for backend functionality, including user registration and Google login, with React for a dynamic and interactive frontend experience. The application fetches weather data from an external API and presents it to users in an intuitive and visually appealing manner.

## Initial Setup

To run the project locally, follow these steps:

### Clone the Repository

```bash
git clone https://github.com/shabeebtk/Weather_app.git
cd Weather_app
```

### Backend Setup (Django)
Create a virtual environment:

```bash
python -m venv venv
```

### Activate the virtual environment:

On Windows:
```bash
venv\Scripts\activate
```
On macOS and Linux:
```bash
source venv/bin/activate
```

Install Python dependencies:

```bash
pip install -r requirements.txt
```

Apply database migrations:

```bash
python manage.py migrate
```
Create a superuser:
```bash
python manage.py createsuperuser
```
Run the Django development server:

```bash
python manage.py runserver
The backend will be running at http://127.0.0.1:8000.
```

Frontend Setup (React)
Navigate to the frontend directory:

```bash
cd frontend
```
Install npm packages:

```bash
npm install 
```
Run the React development server:

```bash
npm run dev  
The frontend will be running at http://localhost:5173.
