/**
 * Numeros aleatorios adicionados para ajudar
 * a testar o programa.
 * DEV: Daniel Luis
 * DATA: 23/02/2024
 */
let vitorias = parseInt(Math.random() * 200)
let derrotas = parseInt(Math.random() * 100)

// Função que calcula o saldo de vitorias
function calculadora(vit, derr){
    let resultado = vit - derr;
    return resultado;
};

// Função que analiza o nivel do jogador
function prog(nome="Pedro"){
    let saldoVitorias = calculadora(vitorias, derrotas);
    let nivel;

    if(saldoVitorias <= 10){
        nivel = "Ferro";
    }else if(saldoVitorias >= 11 && saldoVitorias <= 20){
        nivel = "Bronze";
    }else if(saldoVitorias >= 21 && saldoVitorias <= 50){
        nivel = "Prata";
    }else if(saldoVitorias >= 51 && saldoVitorias <= 80){
        nivel = "Ouro";
    }else if(saldoVitorias >= 81 && saldoVitorias <= 90){
        nivel = "Diamante";
    }else if(saldoVitorias >= 91 && saldoVitorias <= 100){
        nivel = "Lendário";
    }else if(saldoVitorias >= 101){
        nivel = "Imortal";
    }

    console.log(`O Herói ${nome} tem saldo de ${saldoVitorias} está no nível de ${nivel}`);
}

prog('Joaozinho');
