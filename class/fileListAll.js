const fs = require('fs')

// const filePath = 'C:\\Users\\carlo\\Documents\\dev\\FileManager\\Data' // Ruta carpeta

async function fileListAll (filePath) {
  const fileList = await fs.promises.readdir(filePath)
  return fileList
}

module.exports = fileListAll

// fileListAll(filePath) // probar Function

// ----- // ----- // ----- // Copy // ----- // ----- // ----- // ----- //

// /* Leer el contenido de un directorio de forma asincrona usando promesas */
// const fs = require('fs')

// const filePath = 'D:\\Contenido\\' // Ruta carpeta

// // const files = await fs.promises.readdir(filePath)

// const writeTextFileAsync = async () => {
//   const files = await fs.promises.readdir(filePath)
//   console.log('// ----- // ----- // ----- // ----- // ----- //')
//   console.log(files)
//   console.log('// ----- // ----- // ----- // ----- // ----- //')
// }

// writeTextFileAsync()
