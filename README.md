# Front-end (web)

Part of dotnet-spa that has front-end solution based on [react](https://reactjs.org/) and created using [create-react-app](https://github.com/facebook/create-react-app)

## Required tools and software

- [node.js](https://nodejs.org/en/) is a JavaScript runtime
- [yarn](https://yarnpkg.com/en/) is a package manager for JavaScript

## Getting started

### Restore dependencies
```sh
$ yarn 
```

### Start the development server
```sh
$ yarn start 
```

### Bundle the app into static files for production
```sh
$ yarn build
```

### Start the test runner
```sh
$ yarn test 
```

### Run lunt
```sh
$ yarn eslint
```

## Logging

This application uses [debug](https://github.com/visionmedia/debug) library for logging. It supports 3 log level: info, warn, error. Only error logs are enabled by default

### Using logging

Import ```logger``` module and use ```info```, ```warn```, ```error``` functions to log information

```js
import React, { Component } from 'react';
import log from './logger';

class App extends Component {
  render() {
    // 1st arg is your message
    // 2nd arg is component/function name
    log.info('render', 'App');
    return (
      <div>Hello world!</div>
    );
  }
}

export default App;
```


### Logging level configuration

```./src/index.js``` - file containing logging configuration

Example of setting debugging level
```js
// set value of 'debug' key with 'dotnet-spa-web' prefix
if (process.env.NODE_ENV !== 'production') {
  // all logs level
  localStorage.setItem('debug', 'dotnet-spa-web:*'); 

  // only error and warn
  localStorage.setItem('debug', 'dotnet-spa-web:error|info'); 
}
```
