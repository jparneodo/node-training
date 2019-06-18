# Node Command Line Interpretor

Options are described here:

- https://nodejs.org/dist/latest-v12.x/docs/api/cli.html

```bash
# Display options, look at the environment variables
node --help
node [options] [V8 options] [script.js | -e "script" | - ] [arguments]
```

## Environment variables

| Environment variables        | Description                                                                                                        |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| NODE_DEBUG                   | ','-separated list of core modules that should print debug information                                             |
| NODE_DEBUG_NATIVE            | ','-separated list of C++ core debug categories that should print debug output                                     |
| NODE_DISABLE_COLORS          | set to 1 to disable colors in the REPL                                                                             |
| NODE_EXTRA_CA_CERTS          | path to additional CA certificates file                                                                            |
| NODE_NO_WARNINGS             | set to 1 to silence process warnings                                                                               |
| NODE_OPTIONS                 | set CLI options in the environment via a space-separated list                                                      |
| NODE_PATH                    | ':'-separated list of directories prefixed to the module search path                                               |
| NODE_PENDING_DEPRECATION     | set to 1 to emit pending deprecation warnings                                                                      |
| NODE_PENDING_PIPE_INSTANCES  | set the number of pending pipe instance handles on Windows                                                         |
| NODE_PRESERVE_SYMLINKS       | set to 1 to preserve symbolic links when resolving and caching modules                                             |
| NODE_REDIRECT_WARNINGS       | write warnings to path instead of stderr                                                                           |
| NODE_REPL_HISTORY            | path to the persistent REPL history file                                                                           |
| NODE_TLS_REJECT_UNAUTHORIZED | set to 0 to disable TLS certificate validation                                                                     |
| NODE_V8_COVERAGE             | directory to output v8 coverage JSON to                                                                            |
| OPENSSL_CONF                 | load OpenSSL configuration from file                                                                               |
| SSL_CERT_DIR                 | sets OpenSSL's directory of trusted certificates when used in conjunction with --use-openssl-ca                    |
| SSL_CERT_FILE                | sets OpenSSL's trusted certificate file when used in conjunction with --use-openssl-ca                             |
| UV_THREADPOOL_SIZE           | sets the number of threads used in libuv's threadpool                                                              |
|                              |                                                                                                                    |
| `NODE_ENV`                   | Naming convention (introduced by Expressjs?). Sample values = ['development','integration','staging','production'] |

## Requiring module

Two method exists:

- CJS - Node Modules (a CommonJS variant). Historical Node loader
- ESM - Ecma262 Modules (ES Modules) - See [roadmap](https://github.com/nodejs/modules/blob/master/doc/plan-for-new-modules-implementation.md) and [2ality blog](http://2ality.com/2019/04/nodejs-esm-impl.html)

TRAINING [Learn about methods](https://github.com/nodejs/node-eps/blob/master/002-es-modules.md)

TRAINING Try to update `exo-06-01-cjs` and launch `node src/app-cjs`

TRAINING Try to update `exo-06-02-esm` and launch `node src/app-esm`

TRAINING Try to update `exo-06-01-cjs` and mix `node src/app-esm`

TRAINING Try to update `exo-06-02-esm` and mix `node src/app-cjs`

## File organization patterns/anti-patterns

Node.js best practice is to have a lot of small files.

But in important project, files must be organized. Some ideas:

- https://github.com/i0natan/nodebestpractices#1-project-structure-practices

## The node event loop

Node.js run on a single thread. But all node actions are asynchronous.

- [Some short introduction](https://medium.com/the-node-js-collection/what-you-should-know-to-really-understand-the-node-js-event-loop-and-its-metrics-c4907b19da4c)
- [Tired? half an hour on Youtube!](https://www.youtube.com/watch?v=8aGhZQkoFbQ) to understand
- [in node.js documentation](https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/)

TRAINING Try `exo-06-03-event-loop`

## Debug your code

Several methods to start a debugger:

- in a terminal
- in Visual Studio Code
- with [Chrome DevTools](https://medium.com/@paul_irish/debugging-node-js-nightlies-with-chrome-devtools-7c4a1b95ae27), and [Node documentation](https://nodejs.org/en/docs/guides/debugging-getting-started/)

I think you are ok with Visual Studio Code.

```bash
# Debug in a terminal
node inspect obstruct.js
```

```bash
# with Chrome DevTools
node --inspect obstruct.js
node --inspect-brk obstruct.js
# Open Chromium and go to chrome://inspect/#devices
```
