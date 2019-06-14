# A complete web application

A webapp exposing GUI and REST API.

## Expressjs

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

- http://www.passportjs.org/docs/basic-digest/
- http://www.passportjs.org/packages/

TRAINING Add RBAC on `cars` route using `accesscontrol` module

## Koa

This project is a Swagger API example with documentation generated from javascript source.

Install the project:

```sh
# Install from package.json
npm koa:install
```

Generated Swagger documentation:

- http://localhost:3000/api/v1/swagger-html
- http://localhost:3000/api/v2/swagger-html

TRAINING Add v1 Car RESTful resource and look at the documentation

If you want to choose specs to source coding alternative you can look at https://github.com/janvotava/swagger-koa

TRAINING Add RBAC on `Car` resource using `koa-accesscontrol` module

## Nestjs

...

TRAINING Add RBAC on `Car` resource using `nest-access-control` module

## Loopback

TRAINING Add RBAC on `Car` resource using `loopback-4-accesscontrol` module
