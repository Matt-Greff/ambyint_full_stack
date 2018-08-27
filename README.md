## Description

- a UI which will display a number of addresses retrieved from an api endpoint

## To Start

copy example environment to local environment and install dependencies.
`cp config/.example.env .env && yarn install`

To start webpack-dev server and express server cuncurrently.
`yarn dev` dev server available on port `8080`

To start express-server.
`yarn start` express server is available on port `8081`

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

## Dependencies
  * axios: ^0.18.0,
  * babel: ^6.26.0,
  * body-parser: ^1.18.3,
  * bootstrap: ^4.1.3,
  * css-loader: ^0.28.11,
  * csv: ^3.1.0,
  * csv-parse: ^2.5.0,
  * dotenv: ^4.0.0,
  * express: ^4.16.3,
  * express-history-api-fallback: ^2.2.1,
  * google-map-react: ^1.0.6,
  * jquery: ^3.3.1,
  * lodash: ^4.17.10,
  * node-sass: ^4.9.0,
  * prop-types: ^15.6.2,
  * react: ^16.3.2,
  * react-dom: ^16.3.2,
  * react-transition-group: ^2.4.0,
  * reactstrap: ^6.4.0,
  * webpack: ^4.6.0,

## Dev Dependencies
  * babel-jest: ^23.4.2,
  * chai: ^4.1.2,
  * chai-http: ^4.0.0,
  * concurrently: ^3.5.1,
  * enzyme: ^3.4.4,
  * eslint: ^5.4.0,
  * identity-obj-proxy: ^3.0.0,
  * jest: ^23.5.0,
  * mocha: ^5.2.0,
  * nodemon: ^1.18.3,
  * webpack-dev-server: ^3.1.3

### Functional Requirements
* completed...
### Wouldn't It Be Cool If...
#### Client
* zoom to address when clicked on either in the list or on the location pin itself... 
---
Based on:
* [Boilerplate/template](https://github.com/matt-greff/web-boilerplate)
