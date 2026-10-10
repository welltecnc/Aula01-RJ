// Declarações e Tipos de Variaveis 

// declaração var 
// variavel nome 
// operador = 
// valor "Fiap" 
// pare/continue ;
// metódo apresentar console.log()
// typeof = verifica o tipo da variavel
// nomenclaturas

// var nome = "Fiap";
// console.log(typeof nome);

// let nomeUsuario ="Cidade";
// console.log( typeof nomeUsuario);

// const usuario ="teste";
// console.log(typeof usuario);

// let nome1;
// console.log(typeof nome1)

// let nome2=null;
// console.log(typeof nome2)

// let numero=10;
// console.log(typeof numero)

// let lista ={nome:"cidade",idade:20}
// console.log(typeof lista)

// let array=[];
// console.log(typeof array)

// let idade=true;
// console.log(typeof idade)

// Métodos de Exibição

// alert("Bem-vindo ao nosso Sistema")

// let nomeDev = prompt("Qual o Nome do Dev?");
// console.log(`Olá, ${nomeDev}!`)

// let desejaContinuar = confirm("Deseja realmente continuar ?");
// console.log("Resposta da confirmação",desejaContinuar)

// OPERADORES ARTIMÉTICOS

// let soma = 10 + 5;
// console.log(soma);

// let multiplicar = 5 * 8;
// console.log(multiplicar);

// let subtrair = 30-20;
// console.log(subtrair)

// let divisao = 20 / 5;
// console.log(divisao)

// let resto = 10 % 3 ;
// console.log(resto)

// OPERADORES COMPARAÇÃO

// == compara o valor
// === compara e valor verifica o tipo da variavel
// >  maior
// <  menor
// <=  menor igual
// >= maior igual
// != diferente



// let a= 10;
// let b= 5;

// console.log(a == b);
// console.log(a === b);
// console.log( a > b);
// console.log(a < b);
// console.log ( a < 100);
// console.log ( a != b);

// //OPERADORES LÓGICOS ( &&, || |= ,!=)

// let temIdade = 18;
// let temCarteiraHab =false;

// let podeDirigir= (temIdade >=18) && temCarteiraHab;
// console.log("O Usuario pode dirigir:", podeDirigir);

// DOM (Document Object Model- Modelo de Objeto de Documento) 
// No final dos anos 90 a W3C criou esse conceito para dar mais dinâmica nas páginas web

document.getElementById("titulo").innerText="TÍTULO"

// Função Mudar
function mudar(){
    let novoNome =document.getElementById("nome");
    let titulo= document.getElementById("titulo");
    titulo.innerHTML = novoNome.value;
}

//  função Adicionar
function adicionarTime(){
    let numero = document.getElementById("posicao").value -1;
    let novoTime = document.getElementById("novo").value;
    document.getElementsByClassName("time")[numero].innerHTML = novoTime;
}

//Arrow Function - mostrar

const mostrar =()=>{
    let num = document.getElementById("numeromes").value;
    let mes = document.getElementsByTagName("li")[num].innerHTML;
    document.getElementById("resultado").innerHTML=mes;
}

let botao = document.querySelector("#btnmsg");
botao.addEventListener("click", Clicou)
botao.addEventListener("mouseenter",Entrou)


function Clicou(){
    botao.innerHTML="Você clicou";
}
function Entrou(){
    botao.innerHTML=" Você passou o mouse"
}



let result ="";
let i=0;

do{
    i +=1;
    result += i+ "";
}while (i < 5);
document.getElementById("exemplo").innerHTML= result
document.getElementById("exemplo").style.background = "#000";
document.getElementById("exemplo").style.color = "#FF0";


let botaoImagem = document.querySelector("#btnCriarImg")
let container = document.querySelector("#containerImagem")

botaoImagem.addEventListener("click", function(){
    if(document.getElementById("minhaImagem")){
        alert("Imagem já foi gerada")
        return;
    }

    let novaImagem = document.createElement("img");

    novaImagem.id= "minhaImagem";
    novaImagem.src="/src/assets/imagem2.jpg";
    novaImagem.alt= "imagem de cabana"

    novaImagem.style.width="400px";
    novaImagem.style.borderRadius="10px"
    novaImagem.style.marginTop ="15px"
    novaImagem.style.display="block"

    container.appendChild(novaImagem)
})