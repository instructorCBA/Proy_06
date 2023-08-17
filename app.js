require('colors');

const main = async () => {

    console.log('hola SENA CBA\n'.red);
    
    const numeros = [1, 2, 800, 912, 1000, 1283, 2811];
    for (const numero of numeros) {
        const invertidoComoNumero = invertirNumero(numero);
        const invertidoComoCadena = invertirNumeroComoCadena(numero);
        console.log("El número '%s' es '%s' invertido como número, y '%s' como cadena", numero, invertidoComoNumero, invertidoComoCadena);
    }
}

main();