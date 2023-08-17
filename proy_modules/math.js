const math = {};

const invertirNumero = numero => {
    // Nota: como alternativa podría usarse la función que invierte una cadena, convirtiendo el número
    // a cadena, invocando a la función y convirtiendo la cadena a número
    // https://parzibyte.me/blog/2018/11/18/invertir-cadena-palabra-javascript/
    let invertido = 0;
    while (numero != 0) {
        invertido = 10 * invertido + numero % 10
        numero = (Math.floor(numero / 10))
    }
    return invertido
};
const invertirNumeroComoCadena = numero => {
    const numeroInvertidoComoCadena = numero.toString().split("").reverse().join("");
    // Si quieres puedes hacer un parseFloat() para regresarlo como número y no como cadena
    return numeroInvertidoComoCadena;
};

math.invertirNumero = invertirNumero;
math.invertirNumeroComoCadena = invertirNumeroComoCadena;

module.exports = math;