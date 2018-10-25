# fyp-2018-portal

Built this project with these things in mind:
1. I want to use Django for my server
2. I have an existing create-react-app project
3. I want to edit that environment and worry about django separately
4. I don't want 2 separate frontend and backend servers, just 1 django server with all my stuffs in the end

This project uses webpack bundling to copy files from a npm project (such as React) to a Django server.
In theory, it's possible to add multiple NodeJS instances with different settings to this project, provided that they are configured to build to the correct directory.

In this instance, we configured React's prebuilt create-react-app npm settings so that the bundled files can be consumed by the Django server.

I suggest reading up on 
1. Webpack 4
2. Django
3. ReactJS

as you go along

## Getting Started (UNDER CONSTRUCTION):
cd to fyp-portal

### Backend side
Initialise virtual environment
```terminal
source envs/djangodev/bin/activate
```

Python Dependencies(in case you make yourself)
1. django
2. djangorestframework
3. django-webpack-builder
4. pymysql
5. django-cors-headers
6. pylint


### create the backend project (if not done)

```bash
django-admin startproject backenddjango
```
### manage.py initialise the dev server
dev
```bash
python manage.py runserver
```
prod emulate
```bash
python manage.py runserver --setting=backenddjango.prod_settings
```

Backend folder has “app” directories (/polls, /api) and the ports


## Todo
1. That goddamn admin site redesign
2. Finish Setup

## Kind Source:
https://www.valentinog.com/blog/tutorial-api-django-rest-react/

http://v1k45.com/blog/modern-django-part-1-setting-up-django-and-react/