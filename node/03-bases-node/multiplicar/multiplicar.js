// requireds

const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite = 10) => {
    console.log(`=================`.red);
    console.log(`  tabla del ${base}`.green);
    console.log(`=================`.red);
    for (let i = 0; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base*i}`);
    }
};

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        let data = '';
        if (!Number(base) && !Number(limite)) {
            reject(`La base ${base} no es un número`);
            return;
        }

        for (let i = 0; i <= limite; i++) {
            data += `${base} * ${i} = ${base*i}\n`;
        }

        fs.writeFile(`tablas-multiplicar/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${base}-al-${limite}.txt`.bgWhite.gray);
        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla,
};