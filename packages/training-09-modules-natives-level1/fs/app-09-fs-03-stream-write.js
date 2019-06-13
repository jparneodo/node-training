'use strict';

// Tools
const path = require('path');
const fs = require('fs');

// Data
const JSON_FILENAME = path.join(__dirname, 'logs', 'out.json');
const READ_LENGTH = 4;

const jsonString = JSON.stringify(
  {
    hello: 'world',
    at: new Date().toISOString(),
  },
  null,
  2
);
const jsonArray = jsonString.split('\n');

// https://nodejs.org/api/fs.html#fs_fs_createreadstream_path_options
// https://nodejs.org/api/stream.html#stream_class_stream_readable
const writer = fs.createWriteStream(JSON_FILENAME, {
  encoding: 'utf8',
  flag: 'w',
});

writer.on('open', data => {
  console.log('stream open', { data, fd: writer.fd });
});

writer.on('ready', data => {
  console.log('stream ready', { data });
  for (let str in jsonArray) {
    writer.write(str);
  }
  writer.end();
});

writer.on('close', data => {
  console.log('stream close', { data });
});

writer.on('error', data => {
  console.log('stream error', { data });
});

writer.on('data', data => {
  console.log(`stream data <[${data}]>`);
});

writer.on('end', data => {
  jsonObject = JSON.parse(jsonString);
  console.log('stream end', { data, jsonString, jsonObject });
});

writer.on('error', data => {
  console.log('stream error', data);
});

writer.on('pause', data => {
  console.log('stream pause', data);
});

writer.on('drain', data => {
  console.log('stream drain', data);
});

writer.on('pipe', data => {
  console.log('stream pipe', data);
});

writer.on('unpipe', data => {
  console.log('stream unpipe', data);
});

writer.on('finish', data => {
  console.log('stream finish', { data });
});
