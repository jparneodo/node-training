# TypeScript

- Official documentation: https://www.typescriptlang.org/docs/home.html
- Some tutorials https://www.tutorialspoint.com/typescript
- Static versus dynamic languages https://danluu.com/empirical-pl/

## Installation

Install TypeScript:

```sh
# Create the package.json file
npm init
# Install TypeScript
npm install typescript
# Install developer server autorestart on file change
npm install ts-node-dev
```

Add `tsc` command in scripts in package.json.

Create the tsconfig.json:

```sh
# Create tsconfig.json file
npm run tsc -- --init
```

Uncomment the `outDir` in `tsconfig.json` file and set it to `./build`.

Install Expressjs and TypeScript Typings for Expressjs:

```sh
npm install express
npm install @types/express
```

create an `app` directory and a file `app.ts` inside.

Compile the application and start the application:

```sh
# Compile the application
npm run tsc
# Start the application
node build/app.js
```

Start the application in developer mode:

```sh
# Using ts-node-dev
ts-node-dev --respawn --transpileOnly ./app/app.ts
# Using npm
npm run dev
```

TRAINING Install npm dependencies using _training-12-typescript/package.json_

TRAINING Start the server and look at http://localhost:3000/

TRAINING Learn TypeScript language

### Troubleshooting

- Error: ENOSPC: System limit for number of file watchers reached
  https://github.com/guard/listen/wiki/Increasing-the-amount-of-inotify-watchers#the-technical-details

## How to consume npm modules from typescript?

Extracted solution from [stackoverflow](https://stackoverflow.com/questions/38224232/how-to-consume-npm-modules-from-typescript) :

### Typings distributed by the used module :

```javascript
// Look at the package.json of the module for the typings property
"typings": "dist/index.d.ts",
```

### Use community-contributed typings from [DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped)

```sh
# Add typings for a foo module
npm add -D @types/foo
```

### Provide custom typings about modules

Create a folder named "typings-custom" at the root of project and add it in `tsconfig.json`.

```javascript
"include": [
    "./typings-custom/**/*.ts"
]
```

Create a file with this exact name for a foo module: `foo.d.ts` and write your own typings.

## Pros & Cons

- https://www.wakefly.com/blog/pros-cons-using-typescript-web-projects/
- https://dev.to/areknawo/the-pros-cons--typescript-3103
-

## Full samples

See https://www.typescriptlang.org/samples/

## Generation TypeScript API from Swagger Specs

Using a Microsoft Azure tool:

- https://github.com/Azure/autorest
- https://github.com/Azure/autorest/blob/master/docs/examples/generating-a-client.md

TRAINING Generate the corresponding TS code
