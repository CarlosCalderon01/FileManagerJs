const fs = require('fs') // file_system
const path = require('path') // adsolute_path

const PATH_TEXT = path.join(__dirname, './texto.txt') // adsolute_path
console.log(PATH_TEXT) // print adsolute_path

const texto = fs.readFileSync(PATH_TEXT, 'utf-8') // leo archivo en formato utf
console.log(texto) // print the text inside the document

const readFileSync = async () => {
  const texto = await fs.writeFileSync(PATH_TEXT, 'utf-8')
  console.log(texto)
}

readFileSync()

/**
    fs.writeFileSync()
    fs.readFileSync()
    fs.unlinkSync()
*/

// Librerias o dependencias
