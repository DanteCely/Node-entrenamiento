let empleados = [{
    id: 1,
    nombre: 'Marvin'
}, {
    id: 2,
    nombre: 'Dayra'
}, {
    id: 3,
    nombre: 'Adriana'
}];

let salarios = [{
    id: 1,
    salario: 2000
}, {
    id: 2,
    salario: 3000
}];

let getEmpleado = (id) => {
    return new Promise((resolve, reject) => {
        let empleadoBD = empleados.find((empleado) => empleado.id === id);
        if (!empleadoBD) {
            reject(`No existe empleado con id ${id}`);
        } else {
            resolve(empleadoBD);
        }
    });
}

let getSalario = (empleado) => {
    return new Promise((resolve, reject) => {
        let salarioBD = salarios.find((salario) => salario.id === empleado.id);
        if (!salarioBD) {
            reject(`No se encontró salario para el usuario ${empleado.nombre}`);
        } else {
            resolve({
                nombre: empleado.nombre,
                salario: salarioBD.salario,
                id: empleado.id
            });
        }
    });

}

getEmpleado(30)
    .then((empleado) => {
        return getSalario(empleado);
    }).then((resp) => {
        console.log(`El salario de ${resp.nombre} es de ${resp.salario}`);
    }).catch((err) => {
        console.log(err);
    });