const fs = require('fs').promises
const path = require('path')

async function fileChangeNameAll (carpeta, sufijo, extensionDeseada, contador) {
  try {
    // Obtener la lista de archivos en la carpeta
    const archivos = await fs.readdir(carpeta)

    // Iterar sobre cada archivo y cambiar el nombre de manera asíncrona
    await Promise.all(archivos.map(async (archivo) => {
      const rutaAntigua = path.join(carpeta, archivo)
      const extensionActual = path.extname(archivo)

      // Verificar si la extensión del archivo coincide con la extensión deseada
      if (extensionActual === extensionDeseada) {
        // const nombreBase = path.parse(archivo).name
        // const nuevoNombre = `${nombreBase}_${sufijo}_${contador}${extensionActual}`
        const nuevoNombre = `${nameArchiveFile}_${contador}${extensionActual}`
        const nuevaRuta = path.join(carpeta, nuevoNombre)

        // Incrementar el contador
        contador++

        // Cambiar el nombre del archivo de manera asíncrona
        await fs.rename(rutaAntigua, nuevaRuta)
        console.log(`El archivo ${archivo} fue renombrado a ${nuevoNombre}`)
      }
    }))

    console.log('Operación completada exitosamente.')
  } catch (error) {
    console.error('Error durante la operación:', error)
  }
}

// Ejemplo de uso
const sufijo = 'n' // additional NameFile

const carpeta = '' // path-separar con \\

const contador = 1
const extensionDeseada = '.mp4' // ChangeFile with .FORMAT
const nameArchiveFile = 'video' // nameInicio

fileChangeNameAll(carpeta, sufijo, extensionDeseada, contador)
