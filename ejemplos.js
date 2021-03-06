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

function even_or_odd(number) {
    if (number === 0){
        return "Even"
    } else if(number % 2 === 0){
        return "Even"
    } else {
        return "Odd"
    }
    }

function Mayor (array) {
    let NMayor = 0;

    array.forEach(function(valor){
        if (valor >= NMayor){
            NMayor = valor
        }
    })
    return NMayor;
}

function divideEnCinco (letras) {
    let numeros = 0
    for(i = 0; i <= letras.length ; ++i){
        numeros = Math.max(numeros, (letras.slice(i, i + 5)))
    }

    return numeros;
}

function solution(digits){
    let numeros = 0
    for(i = 0; i <= digits.length ; ++i){
        numeros = Math.max(numeros, (digits.slice(i, i + 5)))
    }

    return numeros;
}

function fibonacci(n) {
    if(n==0 || n == 1)
        return n;
    return fibonacci(n-1) + fibonacci(n-2);
}

function lineasS (w, h){   
    let lineasAncho = "+---+";
    let circuloAncho = "\n| o |";
    let anchoN = "";
    let anchoNMinusFirst = "";

    for(i = 0; i < w - 1; ++i ){
        lineasAncho += "---+" 
    }

    for(i = 0; i < w - 1; ++i ){
        circuloAncho += " o |" 
    }

    for(i = 0; i < h; ++i ){
        anchoNMinusFirst += circuloAncho + "\n" + lineasAncho 
    }


    
    anchoN = lineasAncho + anchoNMinusFirst
    
return anchoN

}
// +---ddgit st+---+---+\n| o | o | o |\n+---+---+---+| o | o | o |\n+---+---+---+'
// +---+---+---+\n| o | o | o |\n+---+---+---+\n| o | o | o |\n+---+---+---+'
let c = ["a", "b", "c", "a"]
let d = c

let indexa = c.indexOf("a")
d.splice(indexa, 1)
let repetido = d.includes("a")
d.splice(indexa, 0, "a")

function duplicateEncode(word){
    let wLower = word.toLowerCase();
    let wArray = wLower.split("");
    let answer = "";
    
    wArray.forEach(function(valor, index, w){
        w.splice(index, 1)

        if(w.includes(valor)){
            answer += ")"
        } else {
            answer += "("
        }
        
        w.splice(index, 0, valor)
    })

return answer;

}

console.log(lineasS (7, 2))
console.log(Array.from(new Set([6,7,8,8,8])) );
console.log(duplicateEncode("hala"));
console.log(["a", "b", "c"].map( function (a, i, w) {
    return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
  }) )
console.log(solution("7316717653133062491922511967442657474235534919493496983520368542506326239578318016984801869478851843858615607891129494954595017379583319528532"))
