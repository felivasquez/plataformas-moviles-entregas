var listaPersonasEjemplo = [
    {
        "apellido": "Perez",
        "nombre": "Juan",
        "edad": 20,
        "documento": 12345
    },
    {
        "apellido": "Lopez",
        "nombre": "Luis",
        "edad": 20,
        "documento": 23456
    },
    {
        "apellido": "Zapata",
        "nombre": "Pablo",
        "edad": 10,
        "documento": 34567
    },
    {
        "apellido": "Acuña",
        "nombre": "Ana",
        "edad": 30,
        "documento": 45678
    },
];

// 01 - Ordenar por apellido
function ordenarPorApellido(listaDePersonas) {
    return listaDePersonas.slice().sort((a, b) => a.apellido.localeCompare(b.apellido));
}
console.log("ordenarPorApellido()", ordenarPorApellido(listaPersonasEjemplo));

// 02 - Solo nombres
function soloNombres(listaDePersonas) {
    return listaDePersonas.map(persona => persona.nombre);
}
console.log("soloNombres()", soloNombres(listaPersonasEjemplo));

// 03 - Promedio de edades
function promedioEdades(listaDePersonas) {
    let total = listaDePersonas.reduce((sum, persona) => sum + persona.edad, 0);
    return total / listaDePersonas.length;
}
console.log("promedioEdades()", promedioEdades(listaPersonasEjemplo));

// 04 - Cumplir años
function cumplirAños(listaDePersonas) {
    return listaDePersonas.map(persona => ({
        ...persona,
        edad: persona.edad + 1
    }));
}
console.log("cumplirAños()", cumplirAños(listaPersonasEjemplo));

// 05 - Solo mayores de edad
function soloMayoresDeEdad(listaDePersonas) {
    return listaDePersonas.filter(persona => persona.edad > 18);
}
console.log("soloMayoresDeEdad()", soloMayoresDeEdad(listaPersonasEjemplo));

// 06 - La persona mayor
function laPersonaMayor(listaDePersonas) {
    return listaDePersonas.reduce((mayor, persona) => {
        return persona.edad > mayor.edad ? persona : mayor;
    });
}
console.log("laPersonaMayor()", laPersonaMayor(listaPersonasEjemplo));

// 07 - Agregar helado favorito
function agregarHeladoFavorito(listaDePersonas, listaDeHelados) {
    return listaDePersonas.map((persona, i) => ({
        ...persona,
        heladoFavorito: listaDeHelados[i] || "vainilla"
    }));
}
console.log("agregarHeladoFavorito()", agregarHeladoFavorito(listaPersonasEjemplo, ["chocolate", "limon", "frutilla"]));
