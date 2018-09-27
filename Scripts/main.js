console.log("Hola Mundo");
/*Imprime informacion por consola*/

var numero1=52.5;
var numero2=45;
console.log(numero1+numero2);

/*para definir una variable 
debo usar la palabra reservada
var*/

var nombre="Jairo";
var apellido='Patacon'
console.log(nombre);
console.log(apellido);

var tiene_mascota=true;
tiene_mascota=false;

/*haremos un Arreglo*/

var frutas=['manzana','pera', 'lola','perro', 'gato']

console.log(frutas);


/*Para escoger un elemento de un arreglo */
console.log(frutas[3]);

/*creando un Objeto */

var persona={
          nombre:"Juan",
          edad:26,
          tiene_mascota:false,
          mascota:{
            raza: "Dalmata",
            nombre:"Bigotes" 
          }

};

console.log(persona['nombre']);
console.log(persona.mascota.raza);

/*Imprimir Fecha*/

var fecha= new Date();
console.log(fecha);

/*operador And && */
console.log (true&&false);
//*Operador Or || alt+124 //
console.log (false || true );

//*Modulo devuelve el residuo de una division*/
console.log(5%4);

console.log(3>6); //mayor que

console.log(6==6);//Igualdad
console.log(6!=6); //diferencia

var edad=17; 
 
  if(edad>=18){
      console.log("Eres mayor de edad");
    }
    else{
        console.log("NO Eres mayor de edad");
  }

   var dias=['lunes','martes','miercoles','jueves','viernes' ]
  for(var i=0;i<5;i++){
    console.log(dias[i]);
  }

//*FUNCIONES*/

function suma(n1,n2){
    var res=n1+n2;
    return res;
}

alert(suma(8,4)); //Alert muestra un mensaje de alerta en una pagina web


/*Ejemplo calculo de IVA*/

function iva(precio_producto){
      var IVA = 0.19;
      var resultado=precio_producto*IVA
      return resultado;
}
 console.log(iva(100000));

 /*Uso de Break*/
 var dias=['lunes','martes','miercoles','jueves','viernes' ]
 for(var i=0;i<5;i++){
   console.log(dias[i]);
    if(i==5){
    break
 }
}

