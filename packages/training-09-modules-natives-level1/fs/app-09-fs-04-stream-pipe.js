'use strict';

// Tools
const path = require('path');
const fs = require('fs');

// Data
const JSON_FILENAME_READER = path.join(__dirname, 'data.json');
const JSON_FILENAME_WRITER = path.join(__dirname, 'logs', 'pipe.json');
const READ_LENGTH = 4;

const reader = fs.createReadStream(JSON_FILENAME_READER, {
  encoding: 'utf8',
  flag: 'r',
});

const writer = fs.createWriteStream(JSON_FILENAME_WRITER, {
  encoding: 'utf8',
  flag: 'w',
});

writer.on('open', data => {
  console.log('writer open', { data, fd: writer.fd });
});

writer.on('ready', data => {
  console.log('writer ready', { data });
});

writer.on('error', data => {
  console.log('writer error', { data });
});

writer.on('close', data => {
  console.log('writer close', { data });
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

writer.on('pipe', reader => {
  console.log('writer pipe reader from', reader.path);
  let chunk;
  while (null !== (chunk = reader.read(READ_LENGTH))) {
    console.log(`stream reader data <[${chunk}]>`);
    writer.write(chunk);
  }
});

writer.on('unpipe', data => {
  console.log('writer unpipe reader from', data.path);
});

writer.on('finish', data => {
  console.log('writer finish', { data });
});

reader.on('open', data => {
  console.log('reader open', { data, fd: reader.fd });
});

reader.on('ready', data => {
  console.log('reader ready', { data });
});

reader.on('close', data => {
  console.log('reader close', { data });
});

reader.on('data', data => {
  console.log(`reader data <[${data}]>`);
  writer.write(data);
});

reader.on('end', data => {
  console.log('reader end', { data });
});

reader.on('error', data => {
  console.log('reader error', data);
});

reader.on('pause', data => {
  console.log('reader pause', data);
});

reader.on('readable', data => {
  let json = '';
  let chunk;
  while (null !== (chunk = reader.read(READ_LENGTH))) {
    console.log('reader readable read', { chunk });
  }
  console.log('reader readable', { data, json });
});

reader.pipe(writer);
