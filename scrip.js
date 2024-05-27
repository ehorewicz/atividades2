let ipdolar = document.querySelector ("#ipdolar");
let btcorrecao = document.querySelector ("#btcorrecao");
let ipdoh3resultadolar1 = document.querySelector ("#h3resultado1");
let ipdoh3resultadolar2 = document.querySelector ("#h3resultado2");
let ipdoh3resultadolar3 = document.querySelector ("#h3resultado3");
let ipdoh3resultadolar4 = document.querySelector ("#h3resultado4");



function Somarvalores (){
    let valor1 = Number (ipdolar.value);
    let resultado1 = (valor1 / 100) * 101;
    h3resultado1.textContent = "1%: "+ resultado1 

    let resultado2 = (valor1 / 100) * 102;
    h3resultado2.textContent = "2%: "+ (resultado2);

    let resultado3 = (valor1 / 100) * 105;
    h3resultado3.textContent = "5%: "+ (resultado3);


    let resultado4 = (valor1 / 100) * 110;
    h3resultado4.textContent = "10%: "+ (resultado4);


}

btcorrecao.onclick = function (){
    Somarvalores();

}

let ipusuarios = document.querySelector ("#ipusuarios");
let btusuarios = document.querySelector ("#btusuarios");
let h3rtusuarios1 = document.querySelector ("#h3rtusuarios1");
let h3rtusuarios2 = document.querySelector ("#h3rtusuarios2");



function Somarusuarios (){
    let usuar = Number (ipusuarios.value);
    let result = usuar * 2 ;
    h3rtusuarios1.textContent = "Ovos: "+ (result);
    let result2 = usuar * 50
    h3rtusuarios2.textContent = "Queijo: "+ (result2)+"g";


}

btusuarios.onclick = function(){
    Somarusuarios();

}

let ipvalor1 = document.querySelector ("#ipvalor1")
let ipvalor2 = document.querySelector ("#ipvalor2")
let brSomarcal = document.querySelector ("#brSomarcal")
let soma1 = document.querySelector ("#soma1")
let soma2 = document.querySelector ("#soma2")
let soma3 = document.querySelector ("#soma3")
let soma4 = document.querySelector ("#soma4")

function Calculadora (){
    let valor1 = Number (ipvalor1.value);
    let valor2 = Number (ipvalor2.value);
    let Calculadora1 = valor1 + valor2
    soma1.textContent = "Soma:"+ (Calculadora1)
    let Calculadora2 = valor1 - valor2
    soma2.textContent = "Subtracao:"+ (Calculadora2)
    let Calculadora3 = valor1 * valor2
    soma3.textContent = "Multiplicacao:"+ (Calculadora3)
    let Calculadora4 = valor1 / valor2
    soma4.textContent = "Divisao:"+ (Calculadora4)

}

brSomarcal.onclick = function (){
    Calculadora();

}
let ipquantidade = document.querySelector ("#ipquantidade");
let sabor1 = document.querySelector ("#ipsabor1");
let sabor2 = document.querySelector ("#ipsabor2");
let sabor3 = document.querySelector ("#ipsabor3");
let sabor4 = document.querySelector ("#ipsabor4");
let btpizza = document.querySelector ("#btpizza");
let iprefri = document.querySelector ("#iprefri");
let h2valort = document.querySelector ("#h2valort");

function Pedidopizza (){
    let pizza1 = String (ipsabor1.value);
    let pizza2 = String (ipsabor2.value);
    let pizza3 = String (ipsabor3.value);
    let pizza4 = String (ipsabor4.value);
    let pizza = Number (ipquantidade.value);
    let refri = Number (iprefri.value);
    let Somarpizza = (refri * 7) + (pizza * 57) ;
    h2valort.innerHTML = (pizza1)+"<br>"+(pizza2)+"<br>"+(pizza3)+"<br>"+(pizza4)+"<br>Valor Total: "+(Somarpizza)

    }

btpizza.onclick = function(){
    Pedidopizza();
}

let ippessoa1 = document.querySelector ("#ippessoa1")
let ippessoa2 = document.querySelector ("#ippessoa2")
let ippessoa3 = document.querySelector ("#ippessoa3")
let btpessoas = document.querySelector ("#btpessoas")
let ipidade1 = document.querySelector ("#ipidade1")
let ipidade2 = document.querySelector ("#ipidade2")
let ipidade3 = document.querySelector ("#ipidade3")
let resultadopessoa1 = document.querySelector ("#resultadopessoa1")
let resultadopessoa2 = document.querySelector ("#resultadopessoa2")
let resultadopessoa3 = document.querySelector ("#resultadopessoa3")

function VerificaIdade (){
    let pessoa1 = String (ippessoa1.value);
    let pessoa2 = String (ippessoa2.value);
    let pessoa3 = String (ippessoa3.value);
    let idade1 = Number (ipidade1.value);
    let idade2 = Number (ipidade2.value);
    let idade3 = Number (ipidade3.value);
    
let anoAtual = new Date().getFullYear();

let idade11 = anoAtual - idade1;
let idade22 = anoAtual - idade2;
let idade33 = anoAtual - idade3;

let pessoas = [ 
    { nome: pessoa1, idade: idade11 },
    {nome: pessoa2, idade: idade22 },
    {nome: pessoa3, idade: idade33 }

];
 pessoas.sort(function (a, b) {
    return b.idade - a.idade;
 });

 let resultadopessoa1 = document.querySelector ("resultadopessoa1");
  resultadopessoa1.innerHTML = "";

  for (let i = 0; i < pessoas.length; i++){
    h3rtusuarios1.innerHTML += "Pessoa " + (i + 1) + ": " + pessoas[i].nome + " - " + pessoas[i].idade + " ano<br>";

  }


    

    

    
    }
    btpessoas.onclick = function(){
        VerificaIdade()

    }


    let ipMedia = document.querySelector("#ipMedia2");
let btVerificar = document.querySelector("#btVerificar2");

function verificarMedia (){
    let media = Number (ipMedia2.value);

    if(media >=6.0) {
        alert("Aluno APROVADO!!!!");
    }else{ 
        alert("Aluno REPROVADO!!!");

    }

}
btVerificar2.onclick = function(){
    verificarMedia();
}

function verificar() {
    var numero1 = parseInt(document.getElementById("numero1").value);
    var numero2 = parseInt(document.getElementById("numero2").value);

    if (numero1 > numero2) {
        document.getElementById("resultado").innerHTML = "O primeiro nemero e maior que o segundo.";
    } else if (numero1 < numero2) {
        document.getElementById("resultado").innerHTML = "O primeiro numero e menor que o segundo.";
    } else {
        document.getElementById("resultado").innerHTML = "Os números são iguais.";
    }
}

function verificarParOuImpar() {
    var numero = parseInt(document.getElementById("numero10").value);

    if (numero % 2 === 0) {
        document.getElementById("resultado10").innerHTML = "O numero e Par.";
    } else {
        document.getElementById("resultado10").innerHTML = "O numero e impar.";
    }
}

function calcular10() {
    var quantidadeAlunos = parseInt(document.getElementById("quantidadeAlunos").value);
    var quantidadeTurmas = parseInt(document.getElementById("quantidadeTurmas").value);

    var pessoasPorTurma = Math.floor(quantidadeAlunos / quantidadeTurmas);
    var pessoasSemTurma = quantidadeAlunos % quantidadeTurmas;

    var resultado = "Quantidade de pessoas por turma: " + pessoasPorTurma + "<br>";
    resultado += "Quantidade de pessoas sem turma: " + pessoasSemTurma;

    document.getElementById("resultado15").innerHTML = resultado;
}


function calcular200() {
    var valorVendido = parseFloat(document.getElementById("valorVendido").value);
    var meta = parseFloat(document.getElementById("meta").value);
    var metaMinima = parseFloat(document.getElementById("metaMinima").value);

    var percentualMeta = (valorVendido / meta) * 100;
    var percentualMetaMinima = (valorVendido / metaMinima) * 100;

    var resultado = "";

    if (valorVendido >= meta) {
        resultado += "Voce atingiu a meta <br>";
    } else if (valorVendido >= metaMinima) {
        resultado += "Voce atingiu a meta minima. Mas nao a meta completa.<br>";
    } else {
        resultado += "Voce nao atingiu nenhuma das metas.<br>";
    }

    resultado += "Percentual de atingimento da meta: " + percentualMeta.toFixed(2) + "%<br>";
    resultado += "Percentual de atingimento da meta mínima: " + percentualMetaMinima.toFixed(2) + "%";

    document.getElementById("resultado20").innerHTML = resultado;
}

function verificarPessoasMaisVelhas() {
    var nome1 = document.getElementById("nome1").value;
    var anoNascimento1 = parseInt(document.getElementById("anoNascimento1").value);
    var nome2 = document.getElementById("nome2").value;
    var anoNascimento2 = parseInt(document.getElementById("anoNascimento2").value);
    var nome3 = document.getElementById("nome3").value;
    var anoNascimento3 = parseInt(document.getElementById("anoNascimento3").value);

    var anoAtual = new Date().getFullYear();

    var idade1 = anoAtual - anoNascimento1;
    var idade2 = anoAtual - anoNascimento2;
    var idade3 = anoAtual - anoNascimento3;

    var resultado = "";

    if (idade1 > idade2 && idade1 > idade3) {
        resultado += "Pessoa mais velha: " + nome1 + " - " + idade1 + " anos<br>";
        if (idade2 > idade3) {
            resultado += "Segunda pessoa mais velha: " + nome2 + " - " + idade2 + " anos<br>";
            resultado += "Terceira pessoa mais velha: " + nome3 + " - " + idade3 + " anos";
        } else {
            resultado += "Segunda pessoa mais velha: " + nome3 + " - " + idade3 + " anos<br>";
            resultado += "Terceira pessoa mais velha: " + nome2 + " - " + idade2 + " anos";
        }
    } else if (idade2 > idade1 && idade2 > idade3) {
        resultado += "Pessoa mais velha: " + nome2 + " - " + idade2 + " anos<br>";
        if (idade1 > idade3) {
            resultado += "Segunda pessoa mais velha: " + nome1 + " - " + idade1 + " anos<br>";
            resultado += "Terceira pessoa mais velha: " + nome3 + " - " + idade3 + " anos";
        } else {
            resultado += "Segunda pessoa mais velha: " + nome3 + " - " + idade3 + " anos<br>";
            resultado += "Terceira pessoa mais velha: " + nome1 + " - " + idade1 + " anos";
        }
    } else {
        resultado += "Pessoa mais velha: " + nome3 + " - " + idade3 + " anos<br>";
        if (idade1 > idade2) {
            resultado += "Segunda pessoa mais velha: " + nome1 + " - " + idade1 + " anos<br>";
            resultado += "Terceira pessoa mais velha: " + nome2 + " - " + idade2 + " anos";
        } else {
            resultado += "Segunda pessoa mais velha: " + nome2 + " - " + idade2 + " anos<br>";
            resultado += "Terceira pessoa mais velha: " + nome1 + " - " + idade1 + " anos";
        }
    }

    document.getElementById("resultado100").innerHTML = resultado;
}