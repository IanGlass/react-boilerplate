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
babel-cli
babel-core
babel-loader
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
cross-env
css-loader
dotenv
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
numeral
raf
react
react-addons-shallow-compare
react-dates
react-dom
react-modal
react-redux
react-router-dom
redux
redux-mock-store
<details>
<summary>redux-thunk</summary>
Allows action generators to return functions rather than objects. 
</details>
<details>
<summary>sass-loader</summary>
Compiles SCSS files down to 
</details>
style-loader
Injects 
uuid
validator
webpack


PrivateRoute vs PublicRoute

## webpack.config

devtool: source-map vs inline-source-map