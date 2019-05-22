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

## Sources documentation

- https://jsdoc.app/ - An API documentation generator for JavaScript ([Github](https://github.com/jsdoc/jsdoc))
- [Configuration](https://jsdoc.app/about-configuring-jsdoc.html) - Configuring JSDoc with a configuration file

## TODO subject to complete

    - CI/CD

    	inline documentation
    		install https://github.com/jsdoc/jsdoc https://github.com/tostegroo/toast
    		usage https://jsdoc.app/
    		markdown https://www.npmjs.com/package/jsdoc-to-markdown
    		howto https://www.akshatsharma.com/posts/how%20to%20jsdoc/index.html
    	test
    		mocha https://mochajs.org/ https://www.npmjs.com/package/mocha
    		jest https://jestjs.io/ https://www.npmjs.com/package/jest
    		ava https://github.com/avajs/ava
    		tap https://www.node-tap.org/ https://www.npmjs.com/package/tap
    		chai https://www.chaijs.com/ https://www.npmjs.com/package/chai
    	Test Driven Development / Behaviour Driven Development
    		https://jasmine.github.io/
    		https://medium.com/@joantolos/6-tools-to-help-you-do-tdd-with-nodejs-70d19a9ca041
    		https://cucumber.io/docs/installation/javascript/
    	code coverage
    		https://istanbul.js.org/
    		https://www.npmjs.com/package/mocha-lcov-reporter
    	Fomatting code
    		https://prettier.io/docs/en/
    	integrated tools
    		https://jenkins.io/
    		https://sonarcloud.io
    		https://coveralls.io/
    - docker
