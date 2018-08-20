This is a template for setting up webpack, for use with babel and generally for use with React, and Express.

It assumes `yarn` rather than npm, though I suspect it doesn't really matter.

## To Start

copy example environment to local environment and install dependencies.
`cp config/.example.env .env && yarn install`

To start dev server.
`yarn dev`

To start server.
`yarn start`

To make a new build for the server.
`yarn build`
(a build is also made post `yarn install` for ease of deployment.)

## Upcoming

I based the preliminary webpack layout from the sources listed below but due to me wanting to make this boilerplate from the ground up I may soon switch repositories and begin developing the webpack layout from scratch, once that happens I will list the link to the repo here. It will incorporate a very similar design and attention to testing both front end and backend, being deployment ready, demonstrated routes, and having good practices with react garunteed(linted).

## Currently Working

Webpack is currently working, and `yarn dev` will bring up the webpack-dev-server.

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

### Firstly

Add Enzyme to testing suite.

### Secondly

Example tests are extremely basic in nature, maybe some more detail orientated tests could be demonstrated.

Linter is straight from Airbnb, there is a high chance of me customizing the linter in the future.

Currently we can production-build with just `yarn build`.  This is a bit primitive in nature.
  1) public files are being coppied to build, but this could be a tid bit more elegant than `cp -r client/src/public/* client/build/public/` within the build script, I believe webpack has a package that allows you to copy directories but needs further looking into.
  2) if I add a server directory with passthrough, the prod-build version of that will be quite different.

---

Thanks to:

* [David VanDusen](https://github.com/davidvandusen/react-webpack-boilerplate)
* [Karl Jensen](https://github.com/jensen/webpack-notes)
* [Jeremy Holman](https://github.com/jholman/web-boilerplate)
