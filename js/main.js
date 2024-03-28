// Pre Entrega II

// Definición de varialbeles
let nombreIngresado;
let codigoProd;
let descripcion;
let nacionalidad;
let cantidad;
let opcionIngreso;
let accion;
let ingreseNac;



// Definición de array con objetos
const arrayDatosProd = [
    {
        arrcodigo : codigoProd,
        arrDescripcion : descripcion,
        arrNacionalidad : nacionalidad,
        arrCantidad : cantidad
    }
];

arrayDatosProd.pop();

//Identificación
function saludar() {
    alert("Hola " + nombreIngresado + " puedes ingresar al menú.");
    }    
do {
    nombreIngresado = prompt("Introduzca su nombre:").toUpperCase();
    if (nombreIngresado !== "") {
        saludar()
    }
} while (nombreIngresado == "");

//Menú principal y ciclo de ingreso de datos

opcionIngreso = parseInt(prompt("Ingreso de Prductos \n1.- Alta. \nOtro.- Salir"));

if (opcionIngreso ==1) {
    do {
        codigoProd = prompt("Ingrese Código o escribí \"SALIR\" para termianr.");
        if (codigoProd.toUpperCase() !== "SALIR") {
            
            descripcion = prompt("Ingrese descripción del Producto: ").toUpperCase();
            nacionalidad = prompt("Ingrese nacionalidad del Producto: ").toUpperCase();
            cantidad = parseInt(prompt("Ingrese cantidad del Producto: "));
    
            alert("Ud. Ingreso el siguiente producto:\n" + " Código: " + codigoProd + " Descripción: " + descripcion + " Nacionalidad: "+ nacionalidad + " Cantidad: " + cantidad);  

            arrayDatosProd.push(
                {
                    arrcodigo : codigoProd,
                    arrDescripcion : descripcion,
                    arrNacionalidad : nacionalidad,
                    arrCantidad : cantidad  
                }
            );   
        } else {
            break;
        }
                                
    } while (codigoProd.toUpperCase() !== "SALIR");
}

// Ciclo de resultados

do {

    accion = prompt("Que información necesita: \n1.- Total de Codigos. \n2.- Cantidad de productos por Nacionalidad. \n3.- Total del Inventario. \n4.- SALIR.");
   
    if (accion == 1) {
       alert("Cantidad de productos ingresada  " + arrayDatosProd.length);
    } else {
       
        if (accion == 2) {
           ingreseNac = prompt("Ingrese Nacionalidad a buscar:").toUpperCase();
         
           let cantidadEncontrada = 0;

            arrayDatosProd.forEach((nac) => {
                if (nac.arrNacionalidad.includes(ingreseNac)) {
                cantidadEncontrada++;
                }
            });
             alert("Cantidad de pruductos con nacionalidad : " + ingreseNac + " " + cantidadEncontrada);           
         } else {
   
           if (accion == 3) {
                const totalInventario = arrayDatosProd.reduce((acc,el) => acc + el.arrCantidad, 0);
                alert("Cantidad de pruductos en Inventario: " + totalInventario);
            } else {
                 if (accion == 4) {
                     break;
                 }
           }
       } 
   }
} while (accion !== 4);
alert("Fin de Operación");




            
 


     
 
    

