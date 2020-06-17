# Promises

## Read a file

[ ]require `const fsPromises = require('fs').promises;`
[ ]use `fsPromises.readFile` to read a file
[ ]`then` `console.log` the file

## Write a file

[ ]require `const fsPromises = require('fs').promises;`
[ ]use `fsPromises.writeFile` to write a file
[ ]`then` `console.log` "DONE!"

## Copy a file

[ ]require `const fsPromises = require('fs').promises;`
[ ]use `fsPromises.readFile` to read a file
[ ]`then` use `fsPromises.writeFile` to write the read data
[ ]`then` `console.log` "DONE!"

## Copy a file

[ ]create and export a `copy(src, dst)` function
  [ ]require `const fsPromises = require('fs').promises;`
  [ ]use `fsPromises.readFile` to read a file
  [ ]`then` use `fsPromises.writeFile` to write the read data
  [ ]return the promise
[ ]test
  [ ]test your copy function
  [ ]invoke your copy function
  [ ]`then` expect that the new file exists
  [ ]make sure to clean up copied files in an `afterAll` or `afterEach`

## Transformer

[ ]create and export a `transform(src)` function
  [ ]require `const fsPromises = require('fs').promises;`
  [ ]use `fsPromises.readFile` to read a file
  [ ]`then` remove all capital letters
  [ ]`then` make all letters capital
  [ ]`then` reverse the string
[ ]test
  [ ]invoke your transform function
  [ ]`then` expect that the result is what you think it should be

## Superagent

Use the Futurama Quote API [http://futuramaapi.herokuapp.com](http://futuramaapi.herokuapp.com)

[ ]use `superagent` to make a `get` request to http://futuramaapi.herokuapp.com/api/quotes/1
[ ]use `then` to wait for the request to resolve and print the output
[ ]How would you get more than 1 quote?
[ ]How would you get only quotes by Bender?

## Superagent Again

[ ]use `superagent` to make a `get` request to https://rickandmortyapi.com/api/character/
[ ]use `then` to wait for the request to resolve and print the output

## Promise.all

[ ]use `superagent` to make a `get` request to https://rickandmortyapi.com/api/character/
[ ]use `then` to wait for the request to resolve and print the output
[ ]make another `get` request to retrieve the origin of each character
  [ ]HINT: use `Promise.all`

## write a service

[ ]write a `rickAndMortyApi.js` and `rickAndMortyApi.test.js` file
[ ]export a function `getCharacter` that takes an id and returns a promise that resolves to a character
  [ ]return only the characters name, status, and species
**WRITE YOUR TESTS FIRST**

## write a get many service

* export a function `getManyCharacters` that takes an array of ids and returns a promise that resolves
  with an array of characters
  * use your `getCharacters` function from before with a `Promise.all`
* **WRITE YOUR TESTS FIRST**

## Mocks

[ ] use `jest.mock` to mock your `rickAndMortyApi.js`
  [ ] Use `Promise.resolve` to return a promise that resolves with some data

## BONUS: Is it a promise?

[ ] write a `promiseCheck.js` and `promiseCheck.test.js`
[ ] test
  [ ] pass a promise to `promiseCheck` and
    expect it to return true
  [ ] pass a non-promise to `promiseCheck` and
    expect it to return false
[ ] `promiseCheck(toCheck)` is a function that
  returns `true` if toCheck is a promise.

## BONUS: Create a promise

[ ] require `const fs = require('fs')`
  [ ] NOT THE PROMISE fs
[ ] create a readPromise function
  [ ] use `new Promise((resolve, reject) => {})` to create a new promise
  [ ] use `fs.readFile` to read a file
  [ ] resolve with the data from the file
  [ ] reject with the error from reading the file

## BONUS: use async/await

[ ] How would you do the same thing with async/await

## Rubric

* 2 points for `copy` function
* 2 point for `transform`
* 2 points for `getCharacter` function
* 3 points for `getManyCharacters` function
* 1 point for mocks