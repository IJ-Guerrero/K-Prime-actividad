function esPrimo(numero) {
    for(let i = 2; i <= Math.sqrt(numero); ++i) {
        if (numero % i === 0) {
            return false;
        }
    }

    return true;
}

function obtenerFactoresPrimos(numero) {
    if (typeof numero === 'number' && Number.isInteger(numero)) {
        if (numero > 0) {
            let primos = [];

            for(let i = 2; i <= numero; ++i) {
                while(esPrimo(i) && numero % i === 0) {
                    primos.push(i);
                    numero /= i;
                }
            }

            return primos;
        } else {
            return null;
        }
    } else {
        throw TypeError('El argumento debe ser un número entero.');
    }
}
function countKprimes(k, start, nd) {
    let respuesta = []
    start = Math.abs(start)

    if(start === 0){
        start++
    }

    for(let i = start; i <= nd; ++i){
        if(obtenerFactoresPrimos(i).length === k){
            respuesta.push(i) 
        }
        
    }
    return respuesta;
}

function puzzle(s){
    let sevenPrime = countKprimes(7, 0, s)
    let threePrime = []
    let onePrime = []
    let respuesta = 0
    
    countKprimes(3, 0, s).forEach( function(valor) {
        if(valor < s - countKprimes(7, 0, s)[0]){
            threePrime.push(valor)
        }
    })

    countKprimes(1, 0, s).forEach( function(valor) {
        if(valor < s - countKprimes(7, 0, s)[0]){
            onePrime.push(valor)
        }
    })
    
    sevenPrime.forEach( function (sevenValor){
        threePrime.forEach( function(threeValor){
            onePrime.forEach( function(oneValor){
                if(sevenValor + threeValor + oneValor === s){
                    respuesta++
                }
            })
        })
    })

    


    return respuesta

    };


console.log(puzzle(143))
console.log(esPrimo(5));
console.log(130 - countKprimes(7, 0, 143)[0]);
