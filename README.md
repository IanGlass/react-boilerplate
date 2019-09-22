# cash-monies

testing is setup to run on a test firebase database and credentials should be defined in .env and .env.test respectively.

heroku-postbuild hook: specifies how heroku should build the app using webpack, which takes longer but is more compact, this makes it quicker to serve the app to new users



## Packages
<details>
<summary>enzyme</summary>
A test library built on react-test-renderer, which has more methods to render and manipulate react components during test. The most common methods are:

* shallow - Renders a stand alone version of the component with any passed in props
* find - Returns child elements of the parent component.
* simulate - Triggers an Event Listener attached to an element.

It is common convention to render the component as a wrapper in a Jest beforeEach lifecycle method.

```javascript
let wrapper, closeModal, confirmAction

beforeEach(() => {
  closeModal = jest.fn();
  confirmAction = jest.fn();
  wrapper = shallow(<ConfirmationModal closeModal={closeModal} confirmAction={confirmAction} />)
});
```
</details>
<details>
<summary>enzyme-to-json</summary>
Returns enzyme wrappers as JSON objects, which makes manipulation and testing easier using Jest and makes rendered snapshot tests human readable.

jest.config.json
```javascript
"snapshotSerializers": [
    "enzyme-to-json/serializer"
  ],
```
</details>
<details>
<summary>babel-plugin-transform-class-properties</summary>
Allows class properties to be defined without a constructor() method without breaking compatibility with older browsers.

.babelrc
```javascript
"plugins": [
    "transform-class-properties",
    "transform-object-rest-spread"
  ]
```
</details>
<details>
<summary>babel-plugin-transform-object-rest-spread</summary>
Polyfills use of the spread operator when destructuring objects to maintain older browser compatibility. Spreading is particularly useful when passing props from a parent component to a child component.

.babelrc
```javascript
"plugins": [
    "transform-class-properties",
    "transform-object-rest-spread"
  ]
```
</details>
<details>
<summary>jest</summary>
A testing framework with built in assertions and mocking methods. Common methods include:

* expect - Base assertion method
* toEqual - Basic equality assertion
* toMatchSnapshot - Creates a component snapshot on first call, then asserts that snapshot equals rendered component for subsequent calls
* toHaveBeenCalled - Used with jest.fn() mock methods to ensure method is invoked.
* toHaveBeenCalledWith - Checks that mock has been called with particular arguments.
* jest.fn() - Returns a mocked function which can be passed as a prop.

```javascript
let wrapper, closeModal, confirmAction

beforeEach(() => {
  closeModal = jest.fn();
  confirmAction = jest.fn();
  wrapper = shallow(<ConfirmationModal closeModal={closeModal} confirmAction={confirmAction} />)
});

test('should render ConfirmationModal', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should execute confirmAction in ConfirmationModal', () => {
  wrapper.find('button').first().simulate('click');
  expect(confirmAction).toHaveBeenCalled();
});
```
</details>
<details>
<summary>react-test-renderer</summary>
Experimental rendered for testing components and is used by enzyme.
</details>
<details>
<summary>webpack-dev-server</summary>
Used during development by running npm run dev. Provides a simple localhost server and live reloading.
</details>
<details>
<summary>babel-cli</summary>
Provides access to babel utilities direct from the command line interface.
</details>
<details>
<summary>babel-core</summary>
Core libraries for babel utilities.
</details>
<details>
<summary>babel-loader</summary>
Babel loader for webpack.
</details>
<details>
<summary>babel-polyfill</summary>
Convert newer ES6 features for compatibility with older browsers. Webpack must be configured to use babel-polyfill by adding it as the first argument to the entry point.
</details>
<details>
<summary>babel-preset-env</summary>

```javascript
"presets": [
    "env",
    "react"
  ],
```
</details>
<details>
<summary>babel-preset-react</summary>

```javascript
"presets": [
    "env",
    "react"
  ],
```
</details>
<details>
<summary>cross-env</summary>
Provides cross platform compatibilty for setting node environment variables using the CLI. npm run test sets NODE_ENV=test to ensure that testing uses the test firebase database, rather than the production one.
</details>
<details>
<summary>css-loader</summary>
Loads css imported in styles.scss so that they can be bundled for into /public.
</details>
<details>
<summary>dotenv</summary>
Imports sensitive credentials into node environment variables so that sensitive data does not get committed to git. This project uses two dotenv files, .env for production and .env.test for test credentials.
</details>
<details>
<summary>express</summary>
Backend server framework used to server frontend codebase in production from the public folder. The public folder contains bundled javascript code, bundled css and source map files, which are generated from webpack. A single route is provided ('*'), catching all requests sent to the domain.

server/server.js
```javascript
const express = require('express');
var app = express();
const path = require('path');
const publicPath = path.join(__dirname, '..', 'public');

app.use(express.static(publicPath));

app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
```
</details>
<details>
<summary>extract-text-webpack-plugin</summary>
Extracts all inline css so that it is bundled into a single styles file instead of being defined inline. This helps keep things tidy when debugging using source maps.
</details>
<details>
<summary>firebase</summary>
Google web development platform that provides some standard functionality to replace building a backend server from scratch. Specifically, firebase provides a real-time database and authorisation functionality using OAuth.
</details>
<details>
<summary>history</summary>
history is Used internally by react-router to redirect to other pages by passing down props.history. history can be used as a stand alone package to redirect from outside of a component defined in a Router
</details>
<details>
<summary>moment</summary>
Date and time manipulation library.
</details>
<details>
<summary>node-sass</summary>
Provides support for SCSS and is used by sass-loader.
</details>
<details>
<summary>normalise.css</summary>
Resets and normalises default CSS styles to improve consistency across element styling and reduce the amount of custom CSS required.
</details>
<details>
<summary>numeral</summary>
Javascript library for formatting and manipulating numbers. Abstracts and resolves the issues of using finite number representation of registers. 
</details>
<details>
<summary>raf</summary>
Polyfiller for requestAnimationFrame.
</details>
<details>
<summary>react</summary>
Frontend views library for rendering components using a virtual DOM.
</details>
<details>
<summary>react-dates</summary>
AirBnB datepicker component.
</details>
<details>
<summary>react-dom</summary>
Base library used to inject rendered components into the DOM
</details>
<details>
<summary>react-modal</summary>
3rd party modal component used to render ConfirmModal.
</details>
<details>
<summary>react-redux</summary>
Provides connect methods to map central state and dispatch actions to exported components.
</details>
<details>
<summary>react-router-dom</summary>
Provides routing methods to switch between page views. In this project, a Router is used to switch between the AddExpensePage, EditExpensePage and DashboardPage.
</details>
<details>
<summary>redux</summary>
Central data store. Solves the problem of passing data down nested components making spaghetti data binding.
</details>
<details>
<summary>redux-mock-store</summary>
Provides methods to mock and test a Redux store.
</details>
<details>
<summary>redux-thunk</summary>
Allows action generators to return functions rather than objects. This allows action generators to return promises if they execute asynchronous code.
</details>
<details>
<summary>sass-loader</summary>
Compiles SCSS files down to CSS
</details>
<details>
<summary>style-loader</summary>
Takes CSS generated by css-loader and injects it into the DOM.
</details>
<details>
<summary>uuid</summary>
Generates universally unique identifiers to use as unique I.Ds for say products or users.
</details>
<details>
<summary>validator</summary>
Validates and sanitises string inputs according to parameters. i.e. isEmail with return true if the string input matches an email pattern.
</details>
<details>
<summary>webpack</summary>
Bundles javascript and css assets into single files to be served to a client browser.
</details>


PrivateRoute vs PublicRoute

## webpack.config

devtool: source-map vs inline-source-map