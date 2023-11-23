const fs = require('fs')

const theFile = '\\archivo.json'
const Path = 'C:\\Users\\carlo\\Documents\\dev\\FileManager\\class' + theFile // Ruta carpeta

// Array de strings
const arrayDeStrings = ['string1', 'string2', 'string3', 'string4']

// path donde esta el json
// data array en formato.json
async function fileSaveNameJson (path, data) {
  const jsonData = await JSON.stringify(data, null, 2)
  fs.writeFile(path, jsonData, 'utf8', (err) => {
    if (err) {
      console.error('Error al escribir el archivo JSON:', err)
    } else {
      console.log('Archivo JSON creado exitosamente.')
    }
  })
}

fileSaveNameJson(Path, arrayDeStrings)
