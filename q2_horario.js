//Leia um horário no formato hh:mm:ss e escreva o resultado naseguinte forma: “hh hora(s), mm minuto(s) e ss segundo(s)

const input = require('prompt-sync')();

function main() {

// Entrada

    let Hora = input('Informe a hora (hh:mm:ss): ');

// Processamento

function hora_atualizada(h) {
    let novaH = (h[0] + h[1]) + ' hora(s) ' + (h[3] + h[4]) + '  minuto(s) ' + (h[6] + h[7]) + ' segundo(s)';
    console.log(novaH);
}

// Saida

hora_atualizada(Hora);

};

main();