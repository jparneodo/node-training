# Promises

## Why understanding the promise feature?

- Avoid callback hell by sequencing peaces of code
- Fundations of es6 async/await feature

Example to illustrate the problem to solve, a user login session:

- Verify the username and password of a user.
- Get application roles for the user.
- Log application access time for the user.

## Creating and consuming promises

```javascript
// See https://exploringjs.com/es6/ch_promises.html#sec_creating-using-promises
let promise = new Promise((resolve, reject) => {
  if (true) {
    resolve('ok');
  } else {
    reject('ko');
  }
});
```

TRAINING refactor the _login_ function with Promise `app-08-01-promise-from-callback`

## Switch callbacks to promises

```javascript
// See https://exploringjs.com/es6/ch_promises.html#readFilePromisified
let promisifiedCallback = function (x) {
  return new Promise((resolve, reject) => {
    callback(x,(error,result)=>{
      if(error){
        reject(error);
      }else{
        resolve(result);
      }
    });
  });
promisifiedCallback(x)
  .then(result => {})
  .catch(error => {});
```

TRAINING refactor the _login_ function promisifying the api `app-08-02-promise-promisifying-callback`

## Using Nodejs util package

```javascript
// See https://nodejs.org/api/util.html#util_util_promisify_original
let promisifiedCallback = util.promisify(callback);
promisifiedCallback(x)
  .then(result => {})
  .catch(error => {});
```

TRAINING refactor the _login_ function promisifying the api `app-08-03-promise-util-promisify-callback`

## Using ES6 async/await

```javascript
// See https://exploringjs.com/es6/ch_promises.html#_conceptually-calling-a-promise-based-function-is-blocking
async function login (u,p) {
  const user = await getUser(u,p);
  ...
}
```

TRAINING refactor the _login_ function promisifying the api `app-08-04-promise-async-await`

## Using parallel call:

```javascript
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all
let all = Promise.all([promisedCall1(), promisedCall2()]);
```

TRAINING refactor the _login_ function calling api.getRoles() and api.logAccess in parallel `app-08-05-promise-all`
