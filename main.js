/*var nome = "Guilherme Policarpo";
var idade = 29;
var idade2 = 10;
var frase = "Japão é o melhor país do mundo";
alert("Bem vindo " + nome + ", você tem " + (idade - idade2) + " anos!");

console.log(nome);
console.log(idade - idade2);
console.log(frase.replace("Japão", "Brasil"));
alert(frase.replace("Japão", "Brasil"));

var lista = ["maça", "banana", "abacaxi"];
console.log(lista);
console.log(lista.toString());
lista.pop();
lista.push("banana");

var frutas = [{nome:"maça", cor:"vermelha"}, {nome:"uva", cor:"roxa"}]
console.log(frutas);

if((idade - idade2) < 18){
    alert("Acesso negado, apenas maiores de idade!");
}
else{
   alert("Acesso Autorizado!");
}

var count;
while (count <= 5) {
   console.log(count);
     alert(count);
   count++;
}

for(count=0; count <= 3; count++){
    alert(count);
    console.log(count);
}

var d = new Date();
alert(d.getHours() + ":"+ d.getMinutes());*/

function soma(n1, n2){
    return n1 + n2;
}

var validar = 0;

function validaridade(idade) {
    if (idade >= 18) {
        validar = true;
    }else{
        validar = false;
    }
    return validar;
}

var idade = prompt("Qual a sua idade?");
validaridade(idade)
console.log(validar);

function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
    //alert("Obrigado por cliclar :)");
}

function redirecionar(){
    window.open("https://globallabs.academy/");
}

function trocar(){
    document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse!";
}

function voltar(){
    document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
}

function funcaoChange(elemento){
    console.log(elemento.value)
}