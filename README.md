## Description

- a UI which will display a number of addresses retrieved from an api endpoint

## To Start

copy example environment to local environment and install dependencies.
`cp config/.example.env .env && yarn install`

To start webpack-dev server and express server cuncurrently.
`yarn dev`

To start express-server.
`yarn start`

To make a new build for express to serve.
`yarn build`
(a build is also made post `yarn install` for ease of deployment.)

## To Test

`yarn test` will run full testing suite back to back (Jest, Mocha)

`yarn test-react` and `yarn test-express` will run front-end and back-end tests respectively.

## Upcoming
* finished for now

## Currently Working

Babel is configured in `.babelrc`.

Linter is supported with Airbnb presets(it is very strict).

Barest sketch of test files for unit testing, use `yarn test` to run both backend and front end tests, or `yarn test-react`, or `yarn test-express` to test the front-end and back-end seperately.

The current file structure is somewhat opinionated, it is really just to give an idea of a possible solution for a react and express structured project.

## SERVER
* reads csv file
* filters out irregular characters
* geocodes addresses.
* filters out non `ROOFTOP` location types.
* sends data to CLIENT

## CLIENT
* renders map
* makes api call to SERVER
* renders map pins/markers and renders list of addresses
* sorts visible addresses based on search query

### Functional Requirements
* completed...
### Wouldn't It Be Cool If...
#### Client
* zoom to address when clicked on either in the list or on the location pin itself... 
---
Based on:
* [Boilerplate/template](https://github.com/matt-greff/web-boilerplate)
