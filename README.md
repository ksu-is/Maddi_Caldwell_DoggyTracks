# Maddi_Caldwell_DoggyTracks
Repository of Project

This is a library of my code.

I want to express my love of dogs by creating a program using python that allows for people to search and adopt their perfect dog.

### Updating the shea256/angular-flask application
This fork was created because the original code for the angular-flask application, https://github.com/shea256/angular-flask, is not compatible with the more recent versions of angular and the new JSON API media type, as of June, 2017.

This fork includes more recent versions of the following packages:
+  angular-1.6.4
+  angular-resource-1.6.4
+  angular-route-1.6.4
+  bootstrap-3.3.7
+  jquery-3.2.1

Summary of code changes:
1. manage.py:
   revised to conform to the newer JSON API media type, 'application/vnd.api+json', for exchanging data.
2. data/db_items.json:
   revised
3. templates/index.html:
   revised to include angular-route.js
4. static/js/app.js:
   revised to include the ngRoute package, which is needed for $routeProvider
5. static/js/services.js:
   revised the Post factory object to conform to the JSON API media type.
6. static/js/controllers.js:
   revised to format the result of the Post query properly for display.
7. HTML5 mode for AngularJS routing:
   see https://stackoverflow.com/questions/16677528/location-switching-between-html5-and-hashbang-mode-link-rewriting

The following is from the README for the original application.

# AngularJS + Flask Boilerplate App

A template for building apps with an Angular frontend and a Flask / python backend.

### How to Get Started

1. clone this repo

2. install all the necessary packages (best done inside of a virtual environment)
> pip install -r requirements.txt

3. run the app
> python runserver.py

4. create and seed the db (the server must still be running, so open a new terminal window first)
> python manage.py create_db && python manage.py seed_db --seedfile ./data/db_items.json

5. check out your blog
> http://localhost:5000/blog

