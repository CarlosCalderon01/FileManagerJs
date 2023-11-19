/**
    fs.writeFileSync()
    fs.readFileSync()
    fs.unlinkSync()
*/

// Librerias o dependencias

const fs = require("fs"); // file_system
const path = require("path"); // adsolute_path

const path_text = path.join(__dirname, "./texto.txt"); //adsolute_path
console.log(path_text); //print adsolute_path

const texto = fs.readFileSync(path_text, "utf-8"); //leo archivo en formato utf
console.log(texto); //print the text inside the document

const message = "Hello, this is a new messagge!";

const readFileSync = async () => {
  const texto = await fs.writeFileSync(path_text, "utf-8");
  console.log(texto);
};

readFileSync();