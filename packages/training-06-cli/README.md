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
- ESM - Ecma262 Modules (ES Modules)

TRAINING [Learn about methods](https://github.com/nodejs/node-eps/blob/master/002-es-modules.md)

TRAINING Try to update `exo-06-01-cjs` and launch `node src/app`

TRAINING Try to update `exo-06-01-esm` and launch `node src/app`

###

## Node options

    - requiring module
    	nodejs method
    	EcmaScript method
    - file organization patterns/anti-patterns
    	https://github.com/i0natan/nodebestpractices#1-project-structure-practices
    	https://codeburst.io/fractal-a-nodejs-app-structure-for-infinite-scale-d74dda57ee11
    	mvc patterns
    	ddd patterns
    - la boucle d'événements
    	= exemple de blocage
    	= voir fin de cette page: https://jscomplete.com/learn/node-beyond-basics/child-processes
    - debug in Visual Studio Code
    - debug in chromium
    - faq
    	What is process in node JS ?
    		The process object is a global that provides information about, and control over, the current Node.js process.
    		As a global, it is always available to Node.js applications without using require().
    		It can also be explicitly accessed using require() : const process = require('process');
    		Action:
    		linux> node
    		node> process
