const fs = require('fs');
const path = require('path');
const {stdin, stdout, exit} = process;
const out = path.join(__dirname, 'text.txt');
const writeStream = fs.createWriteStream(out);
stdout.write('Enter text\n');
stdin.on('data', data => {
  const dataToString = data.toString();
  if (dataToString.indexOf('exit') !== -1) {
    exit();
  } else {
    stdout.write('Enter smth\n');
    writeStream.write(dataToString);
}
});
process.on('SIGINT', () => exit());
process.on('exit', () => { stdout.write('Bye-Bye'); });