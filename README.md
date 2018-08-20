This template was based on a boilplate made by the sources listed below, overtime I am adding features to this boilerplate to make it my go to for react endeavors and others who find this preliminary setup useful.

This is a template for setting up webpack, for use with babel and generally for use with React &c.

It assumes `yarn` rather than npm, though I suspect it doesn't really matter.


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

Currently we can production-build with just `yarn build`.  This is a bit primitive.
  1) public files are being copied to build, but this could be a tid bit more elegant than `cp -r client/src/public/* client/build/public/`.
  2) if I add a server directory with passthrough, the prod-build version of that will be quite different.

---

Thanks to:

* [David VanDusen](https://github.com/davidvandusen/react-webpack-boilerplate)
* [Karl Jensen](https://github.com/jensen/webpack-notes)
* [Jeremy Holman](https://github.com/jholman/web-boilerplate)
