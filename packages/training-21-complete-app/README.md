# A complete web application

A webapp exposing GUI and REST API.

## Expressjs

Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.

This project is webapp using expressjs http server.

Install [Expressjs CLI](http://expressjs.com/en/starter/generator.html) in global or use these commands instead:

```sh
# Install from package.json
npm install

# Expresjs CLI command
npm run express:cli -- -h

# Configure a project using pug templates and less processor
npm run express:cli -- --view pug -css less --git mywebapp
```

TRAINING Add a route for http://localhost:3000/cars using same pattern as http://localhost:3000/users

TRAINING Add Authentication using `passport-http` module

Help:

- See how to use : http://www.passportjs.org/docs/basic-digest/
- All available passport methods: http://www.passportjs.org/packages/

TRAINING Add RBAC on `cars` route using `accesscontrol` module

## Koa

Koa is a new web framework designed by the team behind Express, which aims to be a smaller, more expressive, and more robust foundation for web applications and APIs.

This project is a Swagger API example with documentation generated from javascript source.

Install the project:

```sh
# Install from package.json
npm run koa:install
```

Generated Swagger documentation:

- http://localhost:3000/api/v1/swagger-html
- http://localhost:3000/api/v2/swagger-html

TRAINING Add v1 Car RESTful resource and look at the documentation

If you want to choose specs to source coding alternative you can look at https://github.com/janvotava/swagger-koa

TRAINING Add RBAC on `Car` resource using `koa-accesscontrol` module

## Nestjs

Nest is a framework for building efficient, scalable Node.js server-side applications. It uses progressive JavaScript, is built with and fully supports TypeScript.

Install Nestjs as a global package:

```sh
# Install from package.json
npm run nestjs:global-install

# Create the first app
nest new myapp
```

TRAINING Look at https://docs.nestjs.com/first-steps and create the first controller

```sh
# Controller cats
nest generate controller cats
```

```sh
# Install testing tools
npm install --save-dev @nestjs/testing
```

TRAINING Add RBAC on `Car` resource using `nest-access-control` module

## Loopback

Install the project:

```sh
# Install from package.json
npm run lb4:install

# Create the first app
npm run lb4 -- myapp
```

In browser look at:

- http://localhost:3000/ping
- http://localhost:3000/

TRAINING Add RBAC on `Car` resource using `loopback-4-accesscontrol` module
