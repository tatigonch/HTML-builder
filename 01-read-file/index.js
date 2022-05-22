const fs = require('fs');
const path = require('path');
let filePath = path.resolve(__dirname);
filePath = path.join(filePath, 'text.txt');
let fileStream = new fs.ReadStream(filePath, { encoding: 'utf-8' });
fileStream.on('readable', () => {
  let text = fileStream.read();
  if (text != null) {
    console.log(text);
  }
});