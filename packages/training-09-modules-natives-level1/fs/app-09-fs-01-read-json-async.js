'use strict';

// Tools
const path = require('path');
const fs = require('fs').promises;

// Data
const fn = path.join(__dirname, 'data.json');

fs.readFile(fn, {
  encoding: 'utf8',
  flag: 'r', // https://nodejs.org/api/fs.html#fs_file_system_flags
})
  .then(json => {
    console.log(`Data in ${fn}`, json);
  })
  .catch(error => {
    console.log('fs.readFile() catch', error);
  });
