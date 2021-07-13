// Receba uma frase(letra números e espaços apenas) e criptografia-a usando o algoritmo de roger:

const prompt = require('prompt-sync')()

function main() {

// Entrada

    let frase = prompt('Digite a frase :'), metade1 = '', metade2 = '', invertida = '', i


// Processamento 

    if (frase.length % 2 == 0) { 
        let meio = (frase.length / 2) - 1
        for (i = meio; i >= 0; i--) { 
            metade1 += frase[i]
        }

        for (i = (frase.length - 1); i > meio; i--) {
            metade2 += frase[i]
        }
        invertida += metade1 + metade2
    } else {
        let meio = ((frase.length - 1) / 2) - 1
        for (i = meio; i >= 0; i--) { 
            metade1 += frase[i]
        }

        for (i = frase.length - 1; i > meio; i--) {
            metade2 += frase[i]
        }

        invertida += metade1 + metade2
    }

    let vogaisNum = ''
    for (i = 0; i < invertida.length; i++) {
        if (invertida[i] == 'a') {
            vogaisNum += '1'
            continue
        } else if (invertida[i] == 'e') {
            vogaisNum += '2'
            continue
        } else if (invertida[i] == 'i') {
            vogaisNum += '3'
            continue
        } else if (invertida[i] == 'o') {
            vogaisNum += '4'
            continue
        } else if (invertida[i] == 'u') {
            vogaisNum += '5'
            continue
        } else if (invertida[i] == '1') {
            vogaisNum += '*'
            continue
        } else if (invertida[i] == '2') {
            vogaisNum += '**'
            continue
        } else if (invertida[i] == '3') {
            vogaisNum += '***'
            continue
        } else if (invertida[i] == '4') {
            vogaisNum += '****'
            continue
        } else if (invertida[i] == '5') {
            vogaisNum += '*****'
            continue
        } else if (invertida[i] == '6') {
            vogaisNum += '******'
            continue
        } else if (invertida[i] == '7') {
            vogaisNum += '*******'
            continue
        } else if (invertida[i] == '8') {
            vogaisNum += '********'
            continue
        } else if (invertida[i] == '9') {
            vogaisNum += '*********'
            continue
        } else if (invertida[i] == '0') {
            vogaisNum += '#'
            continue
        }
        vogaisNum += invertida[i]
    }
    let str, code, cript = ''
    for (i = 0; i < vogaisNum.length; i++) {
        if (vogaisNum[i] != '*' && vogaisNum[i] != '1' && vogaisNum[i] != '2' && vogaisNum[i] != '3'
            && vogaisNum[i] != '4' && vogaisNum[i] != '5' && vogaisNum[i] != '6' && vogaisNum[i] != '7'
            && vogaisNum[i] != '8' && vogaisNum[i] != '9' && vogaisNum[i] != '#') {
            code = vogaisNum.charCodeAt(i)
            if (code + 10 > 122) {
                code = 97 - (123 - code)
            }
            str = String.fromCharCode(code + 10);
            cript += str
            continue
        }
        cript += vogaisNum[i]
    }

// Saida

    console.log('---------crptografia roger---------','\n','invertida:', invertida, '\n', 'Vogais e numeros trocados:', vogaisNum, '\n', 'Criptografia final:', cript)
}
main()