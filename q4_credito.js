// Apresente o extrato mês a mês da atualização do saldo devedor (Juros do Mês, Parcela do Mês fixa, Saldo Anterior, Novo Saldo(após Juros e Pag. parcela) da primeira até a última parcela. Apresente cada mês até o saldo chegar a valor 0.

const input = require('prompt-sync')();

function main() {

// Entrada

    let valor_emprestimo = Number(input('Informe o valor do empréstimo em um desses valores(R$: 40000; 60000; 81000): '));
    let valor_parcelas = Number(input('Informe o valor das parcelas (R$: 1000; 1200; 1500): '));
    let meses = 0
    let saldo = valor_emprestimo;
    let juros = 0;
    let novo_saldo = 0;

// Processamento

    while(saldo > 0) {
        meses ++
        juros = saldo * 0.01;
        novo_saldo = saldo - valor_parcelas + juros;
        if (novo_saldo < 0) {
            valor_parcelas = saldo;
            novo_saldo = 0;
        }

    // Final
        console.log(`---------Extrato mês ${meses}---------\nJuros do mês: R$ ${juros}\nParcela do mês: R$ ${valor_parcelas}\nSaldo anterior: R$ ${saldo}\nNovo Saldo: R$ ${novo_saldo}`);
        saldo = novo_saldo;
    }
}

main();