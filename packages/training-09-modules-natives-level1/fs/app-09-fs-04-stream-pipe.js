'use strict';

// Tools
const path = require('path');
const fs = require('fs');

// Data
const JSON_FILENAME_READER = path.join(__dirname, 'data.json');
const JSON_FILENAME_WRITER = path.join(__dirname, 'logs', 'pipe.json');
const READ_LENGTH = 4;

const reader = fs.createReadStream(JSON_FILENAME_READER);
const writer = fs.createWriteStream(JSON_FILENAME_WRITER);

reader.on('error', data => {
  console.log('reader error', data);
});

writer.on('error', data => {
  console.log('writer error', data);
});

reader.pipe(writer);
