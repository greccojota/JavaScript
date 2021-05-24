

function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por Clicar</b>";
    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por Clicar");
}

function redirecionar(){
    window.open("https://web.digitalinnovation.one/");
    //window.location.href = "https://web.digitalinnovation.one/";
}

function trocar(elemento){
    elemento.innerHTML = "Obrigado por passar o Mouse";
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o Mouse";
    //alert("Trocar Texto");
}

function voltar(elemento){
    elemento.innerHTML = "Passe o mouse aqui";
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    //alert("Trocar Texto");
}

function load(){
    alert("Página carregada!");
}

function funcaoChange(elemento){
    console.log(elemento.value)
}


/*var validar = 0;
function validaIdade(idade){
    if(idade >= 18){
        validar = true;
    }else{
        validar = false;
    }
    return validar;
}

var idade = prompt("Informe a sua Idade: ");
console.log(validaIdade(idade));*/


/*function soma(n1, n2){
    return n1 + n2;
}
alert(soma(5,10));*/

/*
var d = new Date();
alert(d.getDay());
alert(d.getMonth()+1);
alert(d.getMinutes());
alert(d.getHours());
*/

/*var count;
while(count <= 5){
    console.log(count);
    count++;
}
for(count = 0; count <= 5; count++){
    console.log(count);
}*/


/*var idade = prompt("Informe a sua Idade: ");
//var idade = 18;
if (idade >= 18){
    alert("Maior de Idade");
}else{
    alert("Menor de Idade")
}*/


/*var frutas = [{nome:"maçã", cor:"vermelho"}, {nome:"pera", cor:"verde"}, {nome:"laranja", cor:"laranja"}]
console.log(frutas[1]);
console.log(frutas[1].nome);
console.log(frutas[1].cor);*/

/*var fruta = {nome:"maçã", cor:"vermelho"}
console.log(fruta.nome);*/

/*var lista = ["maçã", "pera", "laranja"]
lista.push("uva")
lista.pop();
console.log(lista[0]);
console.log(lista.toString());
console.log(lista.join(" | "));
console.log(lista);*/


/*var nome = "João Grecco";
var idade = 28;
var idade2 = 10;
var frase = "Japão é o melhor time do mundo!";
alert(nome + " tem " +idade + " anos");
alert(idade+idade2);*/

/*console.log(nome);
console.log(idade+idade2);
console.log(frase.replace("Japão", "Brasil"));*/