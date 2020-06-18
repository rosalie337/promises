const { copyFile } = require('./copyFile');
const fsPromise = require('fs').promises;

describe('copy file function', () => {
  it('it copies a file', () => {
    return copyFile('./source.txt', './destination.txt')
      .then(() => {
        return fsPromise.readFile('./destination.txt', { encoding: 'utf8' });  
      }) 
      .then(fileContents => {
        expect(fileContents).toEqual('something simple we can duplicate');
      });
  });
});
