async function fileExtensionsName (file) {
  return new Promise((resolve) => {
    const lastDotIndex = file.lastIndexOf('.') // Diviendo en dos el nombre
    const nameExtension = file.substring(lastDotIndex + 1) // Selecciona la segunda parte
    resolve(nameExtension)
  })
}

module.exports = fileExtensionsName

// fileExtensionsName(theFile)

// ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- // ----- //

// const theFile = './epalecopy.txt'
// const Path = 'C:\\Users\\carlo\\Documents\\dev\\FileManager\\Data' + file // Ruta carpeta
// reibe nombre dela rchivo

// function fileExtensionsName (file) {
//   const lastDotIndex = file.lastIndexOf('.') // Divide palabra en dos
//   const fileExtension = file.substring(lastDotIndex + 1) // eige segunda parte (ext.)
//   // console.log(`La extensión del archivo (método 2) es: ${fileExtension2}`)
//   return fileExtension
// }

// fileExtensionsName(theFile)
