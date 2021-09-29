class Persona {
  static contadorPersona = 0; //Atributo de nuestra clase

  static get MAX_OBJ() {
    return 5;
  }

  //email = 'Valor default email'; //Atributo de nuestros objetos

  constructor(nombre, apellido) {
    this._nombre = nombre;
    this._apellido = apellido;
    if (Persona.contadorPersona < Persona.MAX_OBJ) {
      this.idPersona = ++Persona.contadorPersona;
    } else {
      console.log("Se han superado el maximo de personas");
    }
    //console.log("Se incremento contador: " + Persona.contadorObjetosPersona);
  }
  get nombre() {
    return this._nombre;
  }

  set nombre(nombre) {
    this._nombre = nombre;
  }
  get apellido() {
    return this.apellido;
  }
  set apellido(apellido) {
    this._apellido = apellido;
  }
  nombreCompleto() {
    return this.idPersona + " : " + this._nombre + " " + this._apellido;
  }
  //Sobrescribiendo el metodo de la clase padre(Object)
  toString() {
    //Se aplica polimorfismo EL METODO QUE SE EJECUTA DEPENDE SI ES UNA REFERENCIA DE TIPO PADRE O DE TIPO HIJO
    return this.nombreCompleto();
  }
  static saludar() {
    console.log("Saludos desde método static");
  }
  static saludar2(persona) {
    console.log(persona._nombre + " " + persona._apellido);
  }
}

class Empleado extends Persona {
  constructor(nombre, apellido, departamento) {
    super(nombre, apellido);
    this._departamento = departamento;
  }
  get departamento() {
    return this._departamento;
  }
  set departamento(departamento) {
    this._departamento = departamento;
  }
  //Sobrescritura
  nombreCompleto() {
    return super.nombreCompleto() + " " + this._departamento;
  }
}

let persona1 = new Persona("Alfredo", "Perez");
console.log(persona1.toString());

let empleado1 = new Empleado("Luis", "Salazar", "Sistemas");
console.log(empleado1.toString());
console.log(Persona.contadorPersona);

let persona2 = new Persona("Karla", "Ramirez");
console.log(persona2.toString());

let persona3 = new Persona("Mariana", "Lara");
console.log(persona3.toString());

let persona4 = new Persona("Hugo", "Chavez");
console.log(persona4.toString());

let persona5 = new Persona("Jaque", "Chavez");
console.log(persona5.toString());

console.log(Persona.contadorPersona);

console.log(Persona.MAX_OBJ);
Persona.MAX_OBJ = 10;
console.log(Persona.MAX_OBJ);
/*console.log(empleado1._nombre);
console.log(empleado1.nombreCompleto());

console.log(empleado1.toString());

//persona1.saludar();   NO ES POSIBLE LLAMAR UN METODO STATIC DESDE UN BOJETO
Persona.saludar();
Persona.saludar2(persona1);

Empleado.saludar();
Empleado.saludar2(empleado1);

console.log(persona1.contadorObjetosPersona);
console.log(Persona.contadorObjetosPersona);

console.log(Empleado.contadorObjetosPersona);

console.log(persona1.email)
console.log(empleado1.email)
console.log(Persona.email)
console.log(Empleado.email)
*/
