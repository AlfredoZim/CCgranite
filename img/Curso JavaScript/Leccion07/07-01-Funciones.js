//Tipos primitivos
let x = 10;
//PASO POR VALOR
console.log(x);


const persona = {
    nombre: 'Alfredo',
    apellido: 'Gomez'
}

function cambiarValorObjeto(p1){
    p1.nombre = 'Carlos';
    p1.apellido = 'Perez';
}
//PASO POR REFERENCIA
cambiarValorObjeto(persona);

console.log(persona)


const auto = {
    llantas: 4,
    frenos: true,
    marca: 'Chevrolet'
}

function cambiarAuto(a1){
    a1.llantas = 5,
    a1.frenos = false,
    a1.marca = 'Mazda'
}

cambiarAuto(auto);
console.log(auto)