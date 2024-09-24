let faturamentoDiario = [1000, 0, 2500, 3000, 0, 100, 2000, 4500, 0, 500, 7000, 0, 1500, 800, 0, 0, 200, 6000, 300, 900];

// Filtrando dias com faturamento
let faturamentoValido = faturamentoDiario.filter(valor => valor > 0);

// Calculando menor e maior faturamento
let menorFaturamento = Math.min(...faturamentoValido);
let maiorFaturamento = Math.max(...faturamentoValido);

// Calculando a média
let mediaFaturamento = faturamentoValido.reduce((a, b) => a + b, 0) / faturamentoValido.length;

// Dias acima da média
let diasAcimaMedia = faturamentoValido.filter(valor => valor > mediaFaturamento).length;

console.log(`Menor faturamento: R$ ${menorFaturamento}`);
console.log(`Maior faturamento: R$ ${maiorFaturamento}`);
console.log(`Dias acima da média: ${diasAcimaMedia}`);