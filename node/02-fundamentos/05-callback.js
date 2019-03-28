// setTimeout(() => {
//     console.log('Hola Mundo');
// }, 3000);

let getUsuariById = (id, callback) => {
    let usuario = {
        nombre: "Marvin",
        id
    };
    if (id === 20) {
        callback(`El usuario con id ${id} no existe`)
    } else {
        callback(null, usuario);
    }

};

getUsuariById(20, (err, usuario) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Usuario de BD:', usuario);
    }
});