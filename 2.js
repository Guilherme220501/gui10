const prompt = require('prompt-sync')();

function isFibonacci(n) {
    let fib1 = 0, fib2 = 1;
    while (fib1 <= n) {
        if (fib1 === n) {
            return true;
        }
        [fib1, fib2] = [fib2, fib1 + fib2]; // Atualizando os números da sequência
    }
    return false;
}

let num = prompt("Informe um número: ");
num = parseInt(num);

if (isFibonacci(num)) {
    console.log(`${num} pertence à sequência de Fibonacci.`);
} else {
    console.log(`${num} não pertence à sequência de Fibonacci.`);
}