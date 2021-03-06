# Tatto manager backend

Installing requirements
````bash
$ pip3 install -r requirements.txt
````

## Django Useful Commands

Start the server
````bash
$ python3 manage.py startserver <port>
````

Create new Module
````bash
$ python3 manage.py startapp <app>
````

Apply migrations
````bash
$ python3 manage.py migrate
````

Create migrations
````bash
$ python3 manage.py makemigrations <app>
````

Create admin user (needs to migrate for the first time)
````bash
$ python3 manage.py createsuperuser
````