// create 'fs' module variable
var fs = require('fs');

// open the streams
var readerStream = fs.createReadStream(
  '/home/cap/DEVON/node-training/packages/training-09-modules-natives-level1/fs/data.json'
);
var writerStream = fs.createWriteStream(
  '/home/cap/DEVON/node-training/packages/training-09-modules-natives-level1/fs/logs/outputfile.txt'
);

// readerStream.on('data', data => {
//   console.log('readerStream data', data);
// });

// readerStream.on('end', () => {
//   console.log('readerStream end');
// });

// readerStream.on('close', () => {
//   console.log('close');
//   console.log(`source flowing mode: ${readerStream._readableState.flowing}`);
// });

// pipe the read and write operations
// read input file and write data to output file
console.log(`source flowing mode: ${readerStream._readableState.flowing}`);
readerStream.pipe(writerStream);
