
# React-Django
# https://www.tutorialspoint.com/online_python_formatter.htm

This repo will contain both Frontend and Backend Layer

## Backend development workflow
```json
git clone repo
cd repo 
pip install virtualenv

##E-commerce
cd ecommerce
pip install Django
python -m django --version
virtualenv venv
source env/bin/activate or venv\Scripts\activate
pip freeze > requirements.txt
pip install -r requirements.txt

django-admin startproject backend
cd backend 
python manage.py runserver

#Creating the app:
python manage.py startapp api

#Database setup:
python manage.py migrate
python manage.py makemigrations api
python manage.py migrate	//To create those model tables in your database.
Steps:	
    Change your models (in models.py).
    Run python manage.py makemigrations to create migrations for those changes
    Run python manage.py migrate to apply those changes to the database.
Note:
The sqlmigrate command takes migration names and returns their SQL. The exact output will vary depending on the database you are using:
	python manage.py sqlmigrate api 0001
	
#Introducing the Django Admin:
	python manage.py createsuperuser //admin/admin123
	
#Django REST:
pip install djangorestframework
pip install django-cors-headers
pip install django-rest-auth
pip install django-rest-auth[with_social]

#Links:
https://docs.djangoproject.com/en/3.1/intro/tutorial03/
https://www.django-rest-framework.org/tutorial/quickstart/
https://django-rest-auth.readthedocs.io/en/latest/installation.html
https://pypi.org/project/django-cors-headers/
https://react.semantic-ui.com/theming/
https://github.com/Semantic-Org
https://semantic-ui.com/introduction/getting-started.html
https://github.com/the-road-to-learn-react/react-semantic-ui-example
https://www.robinwieruch.de/react-semantic-ui-tutorial

