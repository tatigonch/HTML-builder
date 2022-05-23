const fs = require('fs/promises');
const path = require('path');
let secretFolder = path.join(__dirname, 'secret-folder'); 

fs.readdir(secretFolder, {withFileTypes: true})
  .then(filenames => {
    for (let filename of filenames) {
      if (filename.isFile()) {
        fs.stat(secretFolder + '\\' + filename.name).then(value => {
          console.log(filename.name.split('.')[0] + ' - ' + path.extname(
              secretFolder + '\\' + filename.name) + ' - ' + value.size + ' byte');
        });
      }     
    }
  });