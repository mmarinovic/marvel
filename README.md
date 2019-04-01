## Getting Started

Install dependencies:
```Shell
npm install
```

Start the local development server
```Shell
npm run start
```

Open in a browser: http://localhost:3000/

## Running the tests
Tests cover containers, components, pages, actions, reducers and epics.
```Shell
npm run test
```

## Live demo
Open in a browser: https://marko-marvel.herokuapp.com/

First request to heroku app takes some time because heroku needs to load the app if it was unused for certain period of time.

## Deployment
Automatic deployment from master branch is setup on my Heroku account. Pushing new changes to master will trigger a new deployment.

## Project overview

#### Technologies used
- typescript, react,redux, redux observable, axios, jest, enzyme, sinon, scss

#### Arhitecture
Core part of the application is structured in two folders:
* src/redux
* src/view

**src/redux**

**src/view**
View folder contains components, containers and pages. 

Components are react components that are not connected to store. Those usually receive data though props and render on screen.
Containers are react components that are connected to store. Those receive data though props and redux store. Containers dispatch actions and manipulate redux store.
Pages connect components and containers into something user sees on the screen. Each page is set of components and containers and has some logic to glue them all together.

