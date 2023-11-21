const fs = require('fs')
const path = require('path')

const menssage = 'WELCOME!'

const PATH_TEXT = path.join(__dirname, './texto.txt') // Path

const readTextFileAsync = async () => {
  const texto = await fs.readFile(PATH_TEXT, 'utf-8')
  console.log(texto)
}

const writeTextFileAsync = async () => {
  const texto = await fs.writeFile(PATH_TEXT, menssage, 'utf-8')
  console.log(texto)
}

readTextFileAsync()
writeTextFileAsync()

// ----- // ----- // ----- // ----- // ----- // ----- // ----- //
/*
    Summary

      - Create code for read and write file use function syncroni

    Bibliografia

      - https://www.w3schools.com/nodejs/nodejs_filesystem.asp

      - https://nodejs.org/api/fs.html#fsreadfilesyncpath-options

      - https://nodejs.org/api/fs.html#file-system-flags

*/
// ----- // ----- // ----- // ----- // ----- // ----- // ----- //
