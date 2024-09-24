let faturamentoEstados = {
    "SP": 67836.43,
    "RJ": 36678.66,
    "MG": 29229.88,
    "ES": 27165.48,
    "Outros": 19849.53
};

let totalFaturamento = Object.values(faturamentoEstados).reduce((a, b) => a + b, 0);

for (let estado in faturamentoEstados) {
    let percentual = (faturamentoEstados[estado] / totalFaturamento) * 100;
    console.log(`${estado} representa ${percentual.toFixed(2)}% do faturamento total.`);
}