const fs = require('fs')
const path = require('path')

const newNameFile = './text.txt' // Create File
// const deleteNameArchive = './text.txt' // Delete this --> File: text.txt
const messageText = 'WELCOME1' // Content For Write

const pathFileText = path.join(__dirname, './text.txt') // Ruta

// Verifiacion de archivo
async function verificarExistencia (file) {
  // Check if the file exists in the current directory.
  fs.access(file, fs.constants.F_OK, (err) => {
    console.log(`${file} ${err ? 'does not exist' : 'exists'}`)
  })
}

// name:  newfile, message: newcontent
function createTextFile (nameFile, content) {
  fs.appendFile(nameFile, content, function (err) {
    if (err) throw err
    console.log('Saved!')
  })
}

// recibe string: rutaArchivo
function readTextFileSync (pathFile) {
  const texto = fs.readFileSync(pathFile, 'utf-8')
  console.log(texto)
}

// recibe string: rutaArchivo, recibe string: contenidoArchivo
function writeTextFileSync (pathFile, content) {
  const texto = fs.writeFileSync(pathFile, content, 'utf-8')
  console.log(texto)
}

// recibe string: nameNewFile
function deleteTextFileSync (nameFile) {
  try {
    fs.unlinkSync(nameFile)
    console.log('File removed')
  } catch (err) {
    console.error('Something wrong happened removing the file', err)
  }
}

//  Callbacks Fucntions ---------------
verificarExistencia(pathFileText)
createTextFile(newNameFile, messageText)
readTextFileSync(pathFileText)
writeTextFileSync(pathFileText, messageText)
deleteTextFileSync(pathFileText) // Funciona ppero lanza error

// ----- // ----- // ----- // ----- // ----- // ----- // ----- //
/*
  Summary -->
    Create code for read and write file use only function syncroni

  Bibliografia -->
  - https://www.w3schools.com/nodejs/nodejs_filesystem.asp
  - https://nodejs.org/api/fs.html

  - access -->
    - https://nodejs.org/api/fs.html#fsaccesspath-mode-callback
  - appendFile -->
    - https://nodejs.org/api/fs.html#fsappendfilepath-data-options-callback
  - readFileSync -->
    - https://nodejs.org/api/fs.html#fsreadfilesyncpath-options
  - writeFileSync -->
    - https://nodejs.org/api/fs.html#fswritefilesyncfile-data-options
*/
// ----- // ----- // ----- // ----- // ----- // ----- // ----- //
