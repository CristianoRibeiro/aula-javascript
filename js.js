/*

 --- Aula estudando funcoes

var a = 2,
    b = 3,
    soma = a + b;


function somar(){
   return alert(a + b);
}*/

/*
var uri = "http://christiweb.com.br/Ísso é JavaScript - Aprendizagem",

   urlCodificada = encodeURI(uri);
   urlDecodificada = decodeURI(uri);
   urlCodificadaComponente = encodeURIComponent(uri);
   urlDecodificadaComponente = decodeURIComponent(uri);


   console.log(uri + "\n" + urlCodificada + "\n" + urlDecodificada + 
      "\n" + urlCodificadaComponente + "\n" + urlDecodificadaComponente);

*/

/*

    --- Aula Estudando eventos

var a = 1,
    b = 2;


window.onload = function () {

var  botao = document.getElementById("botao"),
     sub = document.getElementById("subtracao"),
     pesq = document.getElementById("pesquisa");

     botao.onclick = soma;
     sub.addEventListener("click",subtracao);
     pesq.addEventListener("click", pesquisar);

}

function soma() {
    var soma = a + b;
    alert("Chamando a funcao " + soma);
    console.log(soma);
}

function subtracao() {
    var sub = a - b;
    alert("subtracao é: "+ sub);
    console.log(sub);
}

function pesquisar(event) {
    event.preventDefault();
}
*/



/*

Trabalhando com Arrays


var arrayN1 = ["madrugada", "só", "mais", "algumas", "horas", "pra", "mudar o seu presente"];

arrayN1[1] = "Bora porra";
console.log(arrayN1.length);
console.log(arrayN1[1]);




var vetor = [1,2,3, 'a', "cristiano", 9,5],
    vetor2 = [2,3,4,10,6,7],
    resultado1,
    txt = "",
    resultado = vetor.concat(4,5,6);

console.log(resultado); // concatenado os arrays
console.log(resultado.length); // tamanho do array
console.log(vetor.indexOf(3)); // primeira posicao
console.log(vetor.lastIndexOf('a')); // ultima posicao
console.log(vetor.join()); // unir os array
console.log(vetor.pop()); // excluir no final e mostra
console.log(vetor.shift() + "\n\n\n"); // exclui no inicio ||

console.log(resultado.push("b","c",66)); // acressenta e retonar a qtd de elementos

console.log(resultado.unshift("fff","re",2));
console.log(resultado.pop());
console.log(resultado.push("B"));
console.log(resultado);
console.log(resultado.shift());
console.log(resultado.indexOf('c'));
console.log(resultado.length);
console.log(resultado.unshift("fff","re",2));

//console.log(resultado);
//console.log(resultado.reverse());
//console.log(resultado.slice(0,3));


//console.log(resultado);
//console.log(resultado.toString());

function par(elemento, indice, objeto) {
    return elemento % 2 != 0;
}


function multiplicar(elem, indic, obj) {
  if(elem > 4)
      return elem * 2;
  else
      return elem;
}

//resultado1 = vetor2.every(par);
//resultado1 = vetor2.some(par);
///resultado1 = vetor2.filter(par);
///vetor2.forEach(par);



//console.log(txt);
//console.log(resultado);


resultado1 = vetor2.map(multiplicar);
console.log(resultado1);

 */