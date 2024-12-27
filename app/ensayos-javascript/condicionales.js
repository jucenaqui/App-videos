
// condicionales if-else
let edad = 18;
let mayorEdadMensaje='El sujeto es mayor de edad';
let menorEdadMensaje='El sujeto es menor de edad';
let result = '';

if(edad > 17 ){
    result = mayorEdadMensaje;
} else {
    result = menorEdadMensaje;
}

// end condicionales if-else

// condicionales switch
let estado = 5;
let estadoResult = '';
switch ( estado ) {
    case 1: estadoResult = "El usuario tiene estado: Activo"; break;
    case 2: estadoResult = "El usuario tiene estado: Inactivo"; break;
    case 3: estadoResult = "El usuario tiene estado: Cerrado"; break;
    case 4: estadoResult = "El usuario tiene estado: Retirado"; break;
    case 5: estadoResult = "El usuario tiene estado: Inactivo Falta Pago"; break;
    case 6: estadoResult = "El usuario tiene estado: Inactivo por Almacen"; break;
    case 0: estadoResult = "El usuario tiene estado: Otro"; break;
    default: estadoResult
}


// end condicionales switch


module.exports = {
    result,
    estadoResult
}