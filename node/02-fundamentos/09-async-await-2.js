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

let getEmpleado = async(id) => {
    let empleadoBD = empleados.find((empleado) => empleado.id === id);
    if (!empleadoBD) {
        throw new Error(`No existe empleado con id ${id}`);
    } else {
        return empleadoBD;
    }

}

let getSalario = async(empleado) => {
    let salarioBD = salarios.find((salario) => salario.id === empleado.id);
    if (!salarioBD) {
        throw new Error(`No se encontró salario para el usuario ${empleado.nombre}`);
    } else {
        return {
            nombre: empleado.nombre,
            salario: salarioBD.salario,
            id: empleado.id
        };
    }
}

getInformacion = async(id) => {
    let empleado = await getEmpleado(id);
    let resp = await getSalario(empleado);
    return `El salario de ${resp.nombre} es de ${resp.salario}`;
};

getInformacion(2)
    .then((mensaje) => {
        console.log(mensaje);
    }).catch((err) => {
        console.log(err);
    });