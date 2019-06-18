# Native Node.js modules - experimented

## Child processes

There are four different ways to create a child process in Node: spawn() , fork() , exec() , and execFile().

- https://medium.freecodecamp.org/node-js-child-processes-everything-you-need-to-know-e69498fe970a

## Streams

- https://nodejs.org/en/docs/guides/backpressuring-in-streams/

## CSV files

CSV api with and without streams:

- https://csv.js.org/parse/examples/
- https://www.npmjs.com/package/ya-csv
- https://www.papaparse.com/

## Cluster

A single instance of Node.js runs in a single thread. To take advantage of multi-core systems, the user will sometimes want to launch a cluster of Node.js processes to handle the load.

The cluster module allows easy creation of child processes that all share server ports.

See [official documentation for node 10](https://nodejs.org/dist/latest-v10.x/docs/api/cluster.html)

### Specific use cases

Basic Node.js Server using Cluster on premise solution:

- https://github.com/awslabs/amazon-ecs-nodejs-microservices/tree/master/1-no-container

TRAINING Install the 1-no-container with these commands:

```sh
cd cluster
npm install
cd 1-no-container
npm install
npm start
```

TRAINING Try [PM2](https://pm2.io/doc/en/runtime/overview/#cluster-mode-load-balancing--0s-downtime), using Cluster without changing the application, PM2 do the job

```sh
npm install -g pm2
pm2 start index.js
pm2 monit
pm2 kill
```

TRAINING Install from `package.json` file and run example

### Cluster Anti-pattern on cloud

See [amazon-ecs-nodejs-microservices](https://github.com/awslabs/amazon-ecs-nodejs-microservices) examples:

- 2-containerized
- 3-microservices

## Addons

Anti-pattern in development mode, only for architects.
