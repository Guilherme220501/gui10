function inverterString(texto) {
    let invertida = "";
    for (let i = texto.length - 1; i >= 0; i--) {
        invertida += texto[i];
    }
    return invertida;
}

let string = prompt("Informe uma string:");
console.log(`String invertida: ${inverterString(string)}`);