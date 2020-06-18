const fsPromises = require('fs').promises;

const copyFile = (source, destination) => {
  return fsPromises.readFile(source)
    .then(fileContents => fsPromises.writeFile(destination, fileContents));
}; 

module.exports = { copyFile };


