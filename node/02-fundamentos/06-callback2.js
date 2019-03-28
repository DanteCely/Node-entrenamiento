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

let getEmpleado = (id, callback) => {
    let empleadoBD = empleados.find((empleado) => empleado.id === id);
    if (!empleadoBD) {
        callback(`No existe empleado con id ${id}`);
    } else {
        callback(null, empleadoBD);
    }
}

let getSalario = (empleado, callback) => {
    let salarioBD = salarios.find((salario) => salario.id === empleado.id);
    if (!salarioBD) {
        callback(`No se encontró salario para el usuario ${empleado.nombre}`);
    } else {
        callback(null, {
            nombre: empleado.nombre,
            salario: salarioBD.salario,
            id: empleado.id
        });
    }
}

getEmpleado(3, (err, empleado) => {
    if (err) {
        console.log(err);
    } else {
        getSalario(empleado, (err, resp) => {
            if (err) {
                console.log(err);
            } else {
                console.log(`El salario de ${resp.nombre} es de ${resp.salario}`);
            }
        });
    }
});