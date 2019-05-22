#

## Visual Studio Code settings

https://code.visualstudio.com/

### Some extensions to better build applications

| Extension                         | Name                      | Description                                                                            | Why                           |
| --------------------------------- | ------------------------- | -------------------------------------------------------------------------------------- | ----------------------------- |
| gruntfuggly.todo-tree             | Todo Tree                 | Show TODO, FIXME, etc. comment tags in a tree view                                     | Remember, code revue          |
| esbenp.prettier-vscode            | Prettier - Code formatter | Format JavaScript / TypeScript / CSS                                                   | Dev speed, homogeneous code   |
| maty.vscode-mocha-sidebar         | Mocha Sidebar             | Mocha testing                                                                          | Improve quality               |
| eg2.vscode-npm-script             | npm                       | Validation of installed modules against the dependencies defined in the _package.json_ | npm installation verification |
| christian-kohler.npm-intellisense | npm Intellisense          | Autocompletes npm modules in import statements                                         | npm productivity              |
| msjsdiag.debugger-for-chrome      | Debugger for Chrome       |                                                                                        | Productivity                  |
| formulahendry.code-runner         | Code Runner               | Run code snippet or code file for multiple languages                                   | Productivity                  |

### Synchronize all Visual Studio Code if needed

Use _shan.code-settings-sync_ extension to synchronize all vsc with same settings.

- on your multiple devices
- between users on same project

## Guidelines

- https://standardjs.com/ - JavaScript Standard Style
- https://github.com/Flet/semistandard - JavaScript Semi Standard Style
- https://github.com/airbnb/javascript - Airbnb JavaScript Style Guide
- [Mode strict](https://stackoverflow.com/questions/1335851/what-does-use-strict-do-in-javascript-and-what-is-the-reasoning-behind-it) - Don't forget `'use strict';` statement

TRAINING Try using configured guidelines starting `npm run` commands in `exo-05-01-standardjs`

## Sources documentation with jsdoc

- https://jsdoc.app/ - An API documentation generator for JavaScript ([Github](https://github.com/jsdoc/jsdoc))
- [Configuration](https://jsdoc.app/about-configuring-jsdoc.html) - Configuring JSDoc with a configuration file
- [Converter](https://www.npmjs.com/package/jsdoc-to-markdown) - jsdoc to markdown

TRAINING Build your first documentation in `exo-05-02-jsdoc`

## Unit Test

Definitions:

- _TDD_ : Test Driven Development
- _BDD_ : Behaviour Driven Development

A lot of tools exists. Some of them are described here.

| Tool     | Type    | Url                                                                   |
| -------- | ------- | --------------------------------------------------------------------- |
| mocha    | TDD     | https://mochajs.org/ https://www.npmjs.com/package/mocha              |
| jest     | TDD     | https://jestjs.io/ https://www.npmjs.com/package/jest                 |
| ava      | TDD     | https://github.com/avajs/ava                                          |
| tap      | TDD     | https://www.node-tap.org/ https://www.npmjs.com/package/tap           |
| chai     | TDD/BDD | https://www.chaijs.com/ https://www.npmjs.com/package/chai            |
| jasmine  | TDD     | https://jasmine.github.io/                                            |
| cucumber | BDD     | https://cucumber.io https://cucumber.io/docs/installation/javascript/ |

### Installing mocha + chai

TRAINING Try your first example in `exe-05-03-mocha-sample`.

```bash
# Understand which happen here
npm install

# Learn about auditing nodejs modules
npm audit
```

TRAINING Write a clean sample in `exe-05-04-mocha-chai`.

### Installing jest

TODO test / cucumber

### Installing jasmine

TODO test / cucumber

### Installing cucumber

TODO test / cucumber

## Code coverage

https://istanbul.js.org/
https://www.npmjs.com/package/mocha-lcov-reporter

## CI / CD

Continuous Integration and Continuous Delivery and/or Continuous Deployment tools:

- https://jenkins.io/
- https://sonarcloud.io
- https://coveralls.io/
- ... and more

TODO Docker

## TODO subject to complete

    		https://medium.com/@joantolos/6-tools-to-help-you-do-tdd-with-nodejs-70d19a9ca041
