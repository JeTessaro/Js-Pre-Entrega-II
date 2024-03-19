// Pre Entrega II

// Definición de varialbeles

let codigo = {};
let descripcion = {};
let nacionalidad = {};
let cantidad = {};
let opcionIngreso = {};
let accion = {};
let i = 0

// Defiición de Arrays
const arraysCodProd = [];
const arraysDesc = [];
const arraysNac = [];
const arraysCant = [];

//Identificación
do {

    nombre = prompt("Introduzca su nombre:");
    if (nombre !== "") {
        function saludar(nombre) {
            alert("Hola " + nombre + " puedes ingresar al menú.");
            saludar(nombre);
        }    
    }
} while (nombre == "");

//Menú principal y ciclo de ingreso de datos

opcionIngreso = parseInt(prompt("Ingreso de Prductos \n1.- Alta. \nOtro.- Salir"));
if (opcionIngreso ==1) {
    do {
        codigoProd = prompt("Ingrese Código o escribí \"SALIR\" para termianr.");
        if (codigoProd.toUpperCase() !== "SALIR") {
            
            descripcion = prompt("Ingrese descripción del Producto: ");
            nacionalidad = prompt("Ingrese nacionalidad del Producto: ");
            cantidad = parseInt(prompt("Ingrese cantidad del Producto: "));
    
            alert("Ud. Ingreso el siguiente producto:\n" + " Código: " + codigoProd + " Descripción: " + descripcion + " Nacionalidad: "+ nacionalidad + " Cantidad: " + cantidad);  
                    
            arraysCodProd.push(codigoProd); 
            arraysDesc.push(descripcion.toUpperCase());
            arraysNac.push(nacionalidad.toUpperCase());
            arraysCant.push(cantidad);
        } else {
            break;
        }
                                
    } while (codigoProd.toUpperCase() !== "SALIR");
}

// Ciclo de resultados

do {

    let accion = prompt("Que información necesita: \n1.- Total de Codigos. \n2.- Cantidad de productos por Nacionalidad. \n3.- Total del Inventario. \n4.- SALIR.");
   
    if (accion == 1) {
       alert("Cantidad de productos ingresada  " + arraysCodProd.length);
    } else {
       
        if (accion == 2) {
           let ingreseNac = prompt("Ingrese Nacionalidad a buscar:");
           const resultadoNac = arraysNac.filter((nacionalidad) => nacionalidad == ingreseNac.toUpperCase());
           alert("Cantidad de pruductos con nacionalidad : " + ingreseNac + " " + resultadoNac.length);
           console.log(resultadoNac);
        } else {
   
           if (accion == 3) {
               let totalCant = 0;
               arraysCant.forEach(function(numero) {
                   totalCant +=numero;
               });
               alert("Cantidad de pruductos en Inventario: " + totalCant);
            } else {
                 if (accion == 4) {
                     break;
                 }
           }
       } 
   }
   console.log(accion);
} while (accion !== 4);


alert("Fin de Operación");



            
 


     
 
    

