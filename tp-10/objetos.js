var personaEjemplo = {
    "apellido": "Rodriguez",
    "nombre": "Pedro",
    "edad": 18,
    "documento": 12345678
};

/**
 * 01 - crearPersona
 */
function crearPersona(nombre, apellido, edad, documento) {
    return {
        nombre: nombre,
        apellido: apellido,
        edad: edad,
        documento: documento
    };
}
console.log("resultado crearPersona: ", crearPersona("Pedro", "Rodriguez", 18, 12345678));

/**
 * 02 - agregarApodo
 */
function agregarApodo(persona, apodo) {
    persona.apodo = apodo;
    return persona;
}
console.log("resultado agregarApodo: ", agregarApodo(personaEjemplo, "Pedrito"));

/**
 * 03 - sinDocumento
 */
function sinDocumento(persona) {
    let copia = { ...persona };
    delete copia.documento;
    return copia;
}
console.log("resultado sinDocumento: ", sinDocumento(personaEjemplo));

/**
 * 04 - tieneDocumento
 */
function tieneDocumento(persona) {
    return "documento" in persona;
}
console.log("resultado tieneDocumento: ", tieneDocumento(personaEjemplo));

/**
 * 05 - nombreCompletoDePersona
 */
function nombreCompletoDePersona(persona) {
    return `${persona.apellido}, ${persona.nombre}`;
}
console.log("resultado nombreCompletoDePersona: ", nombreCompletoDePersona(personaEjemplo));

/**
 * 06 - felizCumpleaños
 */
function felizCumpleaños(persona) {
    let copia = { ...persona };
    copia.edad += 1;
    return copia;
}
console.log("resultado felizCumpleaños: ", felizCumpleaños(personaEjemplo));

/**
 * 07 - sonLaMismaPersona
 */
function sonLaMismaPersona(persona1, persona2) {
    return persona1.nombre === persona2.nombre &&
           persona1.apellido === persona2.apellido &&
           persona1.edad === persona2.edad &&
           persona1.documento === persona2.documento;
}
console.log("resultado sonLaMismaPersona: ", sonLaMismaPersona(
    personaEjemplo,
    { apellido: "Rodriguez", nombre: "Pedro", edad: 18, documento: 12345678 }
));

/**
 * 08 - personaMasGrande
 */
function personaMasGrande(persona1, persona2) {
    return persona1.edad >= persona2.edad ? persona1 : persona2;
}
console.log("resultado personaMasGrande: ", personaMasGrande(
    { nombre: "Laura", edad: 40 },
    { nombre: "Javier", edad: 29 }
));
