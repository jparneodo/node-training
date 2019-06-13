'use strict';

// Tools
const path = require('path');
const fs = require('fs');

// https://nodejs.org/api/fs.html#fs_fs_createreadstream_path_options
// https://nodejs.org/api/stream.html#stream_class_stream_readable

// App

async function saveJson(jsonObject, jsonFileName, readLength) {
  // Json string formatted
  const jsonString = JSON.stringify(jsonObject, null, 2);
  // Json string splitted by lines
  const jsonArray = jsonString.split('\n');

  // Async promise
  return new Promise((resolve, reject) => {
    // The file stream
    const writer = fs.createWriteStream(jsonFileName, {
      encoding: 'utf8',
      flag: 'w',
    });

    writer.on('open', data => {
      console.log('writer open', { data, fd: writer.fd });
    });

    writer.on('ready', data => {
      console.log('writer ready', { data });
      for (let str of jsonArray) {
        writer.write(str);
        writer.write('\n\n');
      }
      writer.end();
    });

    writer.on('close', data => {
      console.log('writer close', { data });
      resolve();
    });

    writer.on('error', data => {
      console.log('writer error', { data });
      reject();
    });

    writer.on('data', data => {
      console.log(`writer data <[${data}]>`);
    });

    writer.on('end', data => {
      jsonObject = JSON.parse(jsonString);
      console.log('writer end', { data, jsonString, jsonObject });
    });

    writer.on('error', data => {
      console.log('writer error', data);
    });

    writer.on('pause', data => {
      console.log('writer pause', data);
    });

    writer.on('drain', data => {
      console.log('writer drain', data);
    });

    writer.on('pipe', data => {
      console.log('stream pipe', data);
    });

    writer.on('unpipe', data => {
      console.log('writer unpipe', data);
    });

    writer.on('finish', data => {
      console.log('writer finish', { data });
    });
  });
}

// Program

const json = {
  hello: 'world',
  at: new Date().toISOString(),
};

const JSON_FILENAME = path.join(__dirname, 'logs', 'out.json');

const READ_LENGTH = 4;

saveJson(json, JSON_FILENAME, READ_LENGTH).then(() => {
  console.log('the end');
});
