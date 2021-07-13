// Receba N valores números positivos e negativos em vetor. 
// Crie funções específicas em arquivo separado (modules) para as seguintes funcionalidades e as use na função main:

const prompt = require('prompt-sync')();

function main(){
    // Entrada
    var N = Number(prompt('Digite o valor de numeros(negativos e positivos): '))

    var maior_valor = 0
    var menor_valor = 0 
    var positivos = 0 
    var negativos = 0
    var numeros = [] 
    var total = 0 

    // Processamento

    for(let i = 0;i<N;i++){
        console.log('Qual o numero',i+1)
        var numero = Number(prompt(': '))

        if(numero>maior_valor){ 
            maior_valor = numero
        }else if(numero<menor_valor){
            menor_valor = numero
        }
        if(numero>0){ 
            positivos++
        }else if(numero<0){
            negativos++
        }

        total = total + numero 
        numeros[i] = numero
    }

    function duplicados(array) {
        return String((new Set(array)).size !== array.length);
    }

    var media = total/N 

    // Saída
    
    console.log('-------------//-----------\n A média dos números fornecidos é:',media,"\nO maior valor é:",maior_valor,"\nO menor valor é:",menor_valor,"\nQuantidade de positivos:",positivos,"\nQuantidade de negativos:",negativos)
    if(duplicados(numeros)=='true'){ 
        console.log('Existem valores repetidos')
    }else{console.log('Não existem valores repetidos')}

}
main();