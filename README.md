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
- typescript, react, redux, redux observable, axios, jest, enzyme, sinon, scss

#### Arhitecture
Core part of the application is structured in two folders:
* src/redux
* src/view

##### src/redux
Redux folder contains actions, reducers, epics and selectors.
* Actions can be used for data manipulation or communication with epics. Actions used for communication with epics are put in communications.ts and data manipulation actions are put into a file dependending on which part of the state they manipulate.
* Reducers listen for actions and manipulate parts of the state. State is split into data and ui. Data contains persistable data like marvel characters and ui holds flags for loader and other ui related items.
* Epics are redux-observable primitives which take a stream of actions and return a stream of actions. Epics are used for loading marvel charactes in this case
* Selectors are used to provide easy access to certain part of the state. There is a selector for each of the state data items.

##### src/view
View folder contains components, containers and pages. 
* Components are react components that are not connected to store. Those usually receive data though props and render on screen.
* Containers are react components that are connected to store. Those receive data though props and redux store. Containers dispatch actions and manipulate redux store.
* Pages glue components and containers together into a screen user sees. Each screen (or route) has one page. Pages can be connected to the store which allows them to better manipulate communication between child components.

