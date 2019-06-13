'use strict';

// Tools
const path = require('path');
const fs = require('fs');

// Data
const JSON_FILENAME = path.join(__dirname, 'data.json');
const READ_LENGTH = 4;
let jsonString = '';
let jsonObject;

// https://nodejs.org/api/fs.html#fs_fs_createreadstream_path_options
// https://nodejs.org/api/stream.html#stream_class_stream_readable
const reader = fs.createReadStream(JSON_FILENAME, {
  encoding: 'utf8',
  flag: 'r',
});

reader.on('open', data => {
  console.log('stream open', { data, fd: reader.fd });
});

reader.on('ready', data => {
  console.log('stream ready', { data });
});

reader.on('close', data => {
  console.log('stream close', { data });
});

reader.on('data', data => {
  jsonString += data;
  console.log(`stream data <[${data}]>`);
});

reader.on('end', data => {
  jsonObject = JSON.parse(jsonString);
  console.log('stream end', { data, jsonString, jsonObject });
});

reader.on('error', data => {
  console.log('stream error', data);
});

reader.on('pause', data => {
  console.log('stream pause', data);
});

reader.on('readable', data => {
  let json = '';
  let chunk;
  while (null !== (chunk = reader.read(READ_LENGTH))) {
    //    console.log(`Received ${chunk.length} bytes of data.`);
    json += chunk;
  }
  console.log('stream readable', { data, json });
});
