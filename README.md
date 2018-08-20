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

`yarn test-react` and `yarn test-express` will test front-end and back-end tests respectively.

## Upcoming
... lots of coding needed.
## Currently Working

Babel is configured in `.babelrc`.

As a demo app, we currently edit the DOM two different ways: vanillajs and also React.  See `client/src/index.jsx`,
`client/src/vanilla_dom_edit`, and `client/src/App.jsx`.

It knows how to parse CSS/SCSS/SASS, as long as that is `require`d somewhere in the dependency tree.

There's the barest sketch of a server file, and webpack-dev-server knows how to proxy `/api` to it.

The api has one mock route, it is structured to be adapted to any database with minor changes.

Linter is supported with Airbnb presets.

Barest sketch of test files for unit testing, use `yarn test` to run both backend and front end tests, or `yarn test-react`, or `yarn test-express` to test the front-end and back-end seperately.

The current file structure is somewhat opinionated, it is really just to give an idea of a possible solution to a react and express structured project.

## Wishlist

### Functional Requirements
- Server
    - Geocode the items in the provided `addresses.csv` file by using the [Google Geocode API](https://developers.google.com/maps/documentation/javascript/geocoding)
    - Add any necessary api endpoints that allow you to fulfill the requirements of the client
- Client
    - Only display items that result in a rooftop location type
    - Allow toggling between a list view and a map view of the results
    - Allow searching for a full/partial address in the results
        - `123 Rick Street` should return when searching for `Rick`

### Wouldn't It Be Cool If...
- Responsive design
- More to come...

---
Based on:
* [Boilerplate/template](https://github.com/matt-greff/web-boilerplate)
