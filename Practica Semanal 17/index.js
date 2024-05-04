const fs = require("fs").promises;
const path = require("path");

const args = process.argv.slice(2);

const filesPath = path.join(__dirname, "files");

const listFiles = async () => {
    try {
        const files = await fs.readdir(filesPath);
        if (files.length === 0) {
            console.log("No hay archivos disponibles en la carpeta.");
        } else {
            console.log("Archivos disponibles:");
            files.forEach(file => console.log(file));
        }
    } catch (error) {
        console.error("Error al leer la carpeta de archivos:", error);
    }
}

if (args.length < 1 || (["leer", "modificar", "eliminar"].includes(args[0]) && args.length < 2)) {
    console.log("Uso: node index.js <operacion> [<nombre_archivo>] [contenido]");
    console.log("Operaciones validas: crear, leer, modificar, eliminar, lista");
    process.exit(1);
}

const operation = args[0];
const fileName = args[1];
const content = args.slice(2).join(" ");

const isValidFileName = (fileName) => {
    const regex = /^[a-zA-Z0-9]+$/;
    return regex.test(fileName);
}

const createFile = async (fileName, content) => {
    try {
        if (!isValidFileName(fileName)) {
            console.log("El nombre de archivo solo puede contener letras y números.");
            process.exit(1);
        }
        const filePath = path.join(filesPath, fileName);
        await fs.writeFile(filePath, content, "utf8");
        console.log(`El archivo "${fileName}" fue creado correctamente.`);
    } catch (error) {
        console.error("Error al crear el archivo:", error);
    }
}

const readFile = async (fileName) => {
    try {
        const filePath = path.join(filesPath, fileName);
        const data = await fs.readFile(filePath, "utf8");
        console.log(`Contenido del archivo "${fileName}":\n${data}`);
    } catch (error) {
        console.error("Error al leer el archivo:", error);
    }
}

const modifyFile = async (fileName, content) => {
    try {
        const filePath = path.join(filesPath, fileName);
        const fileExists = await fs.access(filePath).then(() => true).catch(() => false);
        if (fileExists) {
            await fs.writeFile(filePath, content, "utf8");
            console.log(`El archivo "${fileName}" fue modificado correctamente.`);
        } else {
            console.log(`El archivo "${fileName}" no existe.`);
        }
    } catch (error) {
        console.error("Error al modificar el archivo:", error);
    }
}

const deleteFile = async (fileName) => {
    try {
        const filePath = path.join(filesPath, fileName);
        const fileExists = await fs.access(filePath).then(() => true).catch(() => false);
        if (fileExists) {
            await fs.unlink(filePath);
            console.log(`El archivo "${fileName}" fue eliminado correctamente.`);
        } else {
            console.log(`El archivo "${fileName}" no existe.`);
        }
    } catch (error) {
        console.error("Error al eliminar el archivo:", error);
    }
}

switch (operation) {
    case "crear":
        if (!fileName || !content) {
            console.log("Para crear un archivo se requiere un nombre y contenido.");
            process.exit(1);
        }
        createFile(fileName, content);
        break;
    case "leer":
        if (!fileName) {
            listFiles();
            process.exit(1);
        }
        readFile(fileName);
        break;
    case "modificar":
        if (!fileName || !content) {
            console.log("Para modificar un archivo se requiere un nombre y contenido.");
            process.exit(1);
        }
        modifyFile(fileName, content);
        break;
    case "eliminar":
        if (!fileName) {
            listFiles();
            process.exit(1);
        }
        deleteFile(fileName);
        break;
    case "lista":
        listFiles();
        break;
    default:
        console.log("Operacion no valida! \nLas operaciones validas: crear, leer, modificar, eliminar, lista");
}
