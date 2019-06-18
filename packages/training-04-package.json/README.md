# Creating a _package.json_ file

Every module is a package. Configuration of Node Package module needs a _package.json_ file.

A _package.json_ file has 3 principal groups of informations:

- standard properties
- module dependencies
- module dependencies in development mode

## Semantic Versioning

### Specification

Dependencies are described using the [Semantic Versioning Specification](https://semver.org).

Given a version number MAJOR.MINOR.PATCH, increment the:

- MAJOR version when you make incompatible API changes,
- MINOR version when you add functionality in a backwards-compatible manner, and
- PATCH version when you make backwards-compatible bug fixes.

TRAINING find answers:

- How should I deal with revisions in the 0.y.z initial development phase?
- How do I know when to release 1.0.0?
- What do I do if I accidentally release a backwards incompatible change as a minor version?

### Node.js usage

- [npm specs](https://docs.npmjs.com/about-semantic-versioning) - Introduction
- [npm semver calculator](https://semver.npmjs.com/) - Learn usage

TRAINING What is the difference betwen ~1.2.3 and ^1.2.3 ?

## Creating your first _package.json_ file

```bash
# Go to exo-04-01-init directory and init it by default
$ npm init
```

TRAINING See the _package.json_ file and restart the command

- [Creating from scratch](https://docs.npmjs.com/creating-a-package-json-file) - Creating a _package.json_ file
- [_package.json_ specification](https://docs.npmjs.com/files/package.json) - All properties described

## Scripting with _package.json_

Script naming is open but some names are undertood by _npm_.

- [How npm handles the "scripts" field](https://docs.npmjs.com/misc/scripts)
- [Run arbitrary package scripts](https://docs.npmjs.com/cli/run-script)
- [NPM Configuration](https://docs.npmjs.com/misc/config)

```bash
# Go to exo-04-02-script
$ npm run ls
$ npm run ll
$ npm run start
$ npm start
$ npm run test
$ npm test
```

TRAINING write scripts to start previous commands doing what you want

```bash
$ npm ls
$ npm config ls -l
$ npm config get tmp
$ npm config set tmp /tmp/nodejs
$ npm config get tmp
$ npm config set tmp /tmp
```

TRAINING Configure start command using the _main_ property

More links:

- [NPM Scripting](http://www.marcusoft.net/2015/08/npm-scripting-configs-and-arguments.html) - configs and arguments... and some more tricks

## Install dependencies

Installing some development tools:

- [Mocha](https://mochajs.org/) - Feature-rich JavaScript test framework running on Node.js and in the browser

Installing as a global command can interfer with multiple projects with different versions.

TRAINING Try these commands and look at the _package.json_ changes and the subdirectory structure

```sh
# Install as a global shell script command (intrusive, to avoid)
# $ npm install --global mocha
# $ mocha

# Install as development dependency for your project (recommended)
$ npm install --save-dev mocha
$ npx mocha
$ npm test

# Clean up
$ npm uninstall mocha
$ mocha

# Install from package.json dependencies for production
$ npm install --production
$ npm list

# Install from package.json dependencies
$ npm install
$ npm list
```

## Checking new module versions

```sh
# Install module as global command, this command is used only
npm install -g npm-check
```

## Learn more:

Try to install:

- [env-var](https://github.com/evanshortiss/env-var/blob/master/package.json) - Verification, sanatization, and type coercion for environment variables
