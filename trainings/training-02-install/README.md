# NodeJS installation

## Objectives

- Multiples way to install Node.js binaries.
- Install on Linux and try to switch through versions.
- Install on Windows and try to switch through versions.

### From official website

Download and install from latest stable release from [official Node.js website](https://nodejs.org/en/).

### With n tool on Linux

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

### With nvm tool on Windows

Install via [nvm](https://github.com/coreybutler/nvm-windows) to switch to a specific node version using
[MSI](https://github.com/coreybutler/nvm-windows/releases).

```dos
REM Install the latest, install a specific version, switch to a version
nvm install latest
nvm install 10.15.3
nvm use 10.15.3
```

### Using Node.js in Visual Studio Code

1. Open Visual Studio Code.
1. Select the `node-training` project.
1. Open a Terminal in VSC.
1. Start `node` binary
1. Switch node version using `n`

```bash
me@linux:node-training> node -v
node> <Control-D>
```

1. Open file `app/trainings/ex-02-hello-world.js`
1. Add breakpoint on first statement
1. Start `Start Without Debugging`
1. Start `Start Debugging`
