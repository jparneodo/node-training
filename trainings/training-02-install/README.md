# NodeJS installation

## Objectives

- Multiples way to install Node.js binaries.
- Install on Linux and try to switch through versions.
- Install on Windows and try to switch through versions.

## From official website

Download and install from latest stable release from [official Node.js website](https://nodejs.org/en/).

## With n tool on Linux

Install via [n-install](https://github.com/tj/n) to switch to a specific node version.

```bash
# Install the LTS Node.js version
curl -L https://git.io/n-install | bash -s -- -y lts
```

```bash
# Install and switch to latest version
n latest
```

```bash
# Switch to lts version
n lts
```

```bash
# Install and switch to a specific version version, show current, switch to lts and remove version
n 10.15.1
n
n lts
n rm 10.15.1
```

## With nvm tool on Windows

Install via [nvm](https://github.com/coreybutler/nvm-windows) to switch to a specific node version using
[MSI](https://github.com/coreybutler/nvm-windows/releases).

```dos
REM Install the latest, install a specific version, switch to a version
nvm install latest
nvm install 10.15.3
nvm use 10.15.3
```

## Using Node.js in Visual Studio Code

1. Open Visual Studio Code.
1. Select the `node-training` project.
1. Open a Terminal in VSC.
1. Start `node` binary
1. Switch node version using `n`

```bash
me@linux:node-training$ node -v
node> <Control-D>
```

1. Open file `src/ex/ex-02-hello-world.js`
1. Click on the line before le line number to add breakpoint
1. In Debug menu, start `Start Without Debugging`
1. Start `Start Debugging`

## Package manager: _yarn_ versus _npm_

Default package manager is _npm_.
Developpers from Facebook and Google introduced a competitor: _yarn_.

### Understanding principal problem to solve

_package.json_ uses [semver]() dependencies.
Considering packages add new versions all the time, there's a big risk your code can break if it's not compatible with the latest versions of certain dependencies. That's why it's important to lock dependencies to a single version.

_npm_ equivalent to _yarn.lock_: [npm shrinkwrap command](https://docs.npmjs.com/cli/shrinkwrap)

```bash
# Install dependencies
$ npm install
# Lock dependencies renaming *package-lock.json* to *npm-shrinkwrap.json*
$ npm shrinkwrap
```

### More informations on subject

- [Locking Dependencies with npm shrinkwrap](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/nodejs-platform-shrinkwrap.html)
- [Why Are You Still Using Yarn in 2018?](https://iamturns.com/yarn-vs-npm-2018/)
- [Yarn vs Npm](https://x-team.com/blog/yarn-vs-npm/)
- [Npm vs Yarn](https://blog.zenika.com/2017/03/13/npm-vs-yarn/) (in french)

---

**🔴 Note**

In the rest of the trainings we continue to use the default _npm_ package manager.

---
