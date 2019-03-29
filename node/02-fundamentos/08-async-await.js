/**
 *  Async - Await 
 */

/* let getNombre = async() => {
    // throw new Error('No existe nombre del usuario :(')
    return 'Marvin';
}; */

let getNombre = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Marvin');
        }, 3000)
    });
};

let saludo = async() => {
    let nombre = await getNombre();
    return `Hola ${nombre}`;
};

getNombre().then((mensaje) => {
    console.log(mensaje);
}).catch((err) => {
    console.log('error de Async', err);
});