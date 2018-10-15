# fyp-2018-portal

Built this project with these things in mind:
1. I want to use Django for my server
2. I have an existing create-react-app project
3. I want to edit that environment and worry about django separately
4. I don't want 2 separate frontend and backend servers, just 1 django server with all my stuffs in the end

This project uses webpack bundling to copy files from a npm project (such as React) to a Django server
In theory, it's possible to add multiple NodeJS instances with different settings to this project, provided that they are configured to build to the correct directory 

In this instance, we configured React's prebuilt create-react-app npm settings so that the bundled files can be consumed by the Django server

I suggest reading up on 
1. Webpack 4
2. Django
3. ReactJS
as you go along

### Server Setup Summary

#### 2 server: 
Django server at port 8000: for views 
NodeJS/ReactApp server at port 3000: for the html and other frontend 

The project is setup to allow cross-origin between the 2 ports. Allowing servers to serve files to each other.
This makes it easier to debug for module dependecies and error on npm side using the default create-react-app build settings, and debug python errors on the django server.

Fit for dev settings

#### 1 server:
NodeJS webpack server will build to the /assets folder of the django project
All relevant bundles from React app gets bundled to the Django server
Django server is the only thing running in this instance


## SETUP (UNDER CONSTRUCTION):
cd to fyp-portal

### Backend side
Initialise virtual environment
```terminal
    source envs/djangodev/bin/activate
```

### create the backend project (if not done)

```terminal
    django-admin startproject backenddjango
```
### manage.py initialise the dev server
```terminal
python manage.py runserver
```

Backend folder has “app” directories (/polls, /api) and the ports


## Todo
1. That goddamn admin site redesign
2. Finish Setup

## Kind Source:
https://www.valentinog.com/blog/tutorial-api-django-rest-react/
http://v1k45.com/blog/modern-django-part-1-setting-up-django-and-react/