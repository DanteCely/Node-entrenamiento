// function sumar(a, b) {
//     return a + b;
// }
// console.log(sumar(10, 20));

// let sumar = (a, b) => {
//     return a + b;
// }
// console.log(sumar(10, 20));

let saludar = (nombre) => `Hola ${nombre}`;
console.log(saludar('Marvin'));

let deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'regeneración',
    getNombre() {
        return `${this.nombre} ${this.apellido} - poder: ${this.nombre}`;
    }
};
console.log(deadpool.getNombre());