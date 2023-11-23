const fs = require('fs')

// const oldFileName = 'epale.txt'
// const newFileName = 'epalecopy.txt'

function fileReName (oldName, newName) {
  fs.rename(oldName, newName, (err) => {
    if (err) {
      console.error('Error renaming file:', err)
    } else {
      console.log('File renamed successfully')
    }
  })
}

// (oldName, newName)
// fileReName(oldFileName, newFileName)

module.exports = fileReName
