let persona1 = {
    nombre: 'Alfredo',
    apellido: 'Gomez',
    nombreCompleto: function(titulo, tel){
        //return this.nombre + ' ' + this.apellido;
        return titulo + ": " + this.nombre + " " + this.apellido + " " + tel;
    }
}

let persona2 = {
    nombre : 'Carlos',
    apellido: 'Perez'
}

//USO DE CALL usando NOMBRECOMPLETO de persona 1P con datos de persona 2

console.log(persona1.nombreCompleto('Lic','5566337722'));

let arreglo = ['Ing','5544332211'];
console.log(persona1.nombreCompleto.apply(persona2,arreglo));