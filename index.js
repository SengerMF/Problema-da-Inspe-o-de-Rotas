// PROBLEMA DA INSPEÇÃO DE ROTAS
// MARCOS SENGER
// 2022/03/04

const readline = require('readline');
console.log('PROBLEMA DA INSPEÇÃO DE ROTAS\n\n')

console.log('A______3______B')
console.log('| *         * |')
console.log('|   *     8   |')
console.log('2      *      4')
console.log('|   *     *   |')
console.log('| *         7 |')
console.log('C______6______D')

console.log('\n\n Cases: ');

function rotas(num){

  for (var t = 0; t<final_dist.length; t++){
      if (final_dist[t]==num){result.push(sel[t]);}
  }
  console.log('\nTamanho do menor trajeto: ', min);
  console.log('Melhores Rotas: ', result);
}

function combinations(current_string, actual_string, seen) {
var result = [];
if (current_string.length === actual_string.length) {
return [current_string];
}
actual_string.forEach(function(currentChar, index) {
if (seen.indexOf(index) === -1) {
result = [].concat.apply(result, combinations(current_string
+ currentChar, actual_string, seen.concat(index)));
}
});
return result;
}

vat = cases = combinations("", "ABCD".split(""), [])

/////ROTAS POSSIVEIS DE ACORDO COM A CIDADE ATUAL///////////

var city = prompt('Cidade: ');
var sel =[];

for (var i = 0; i<cases.length; i++){
  if (cases[i][0] == city){sel.push(cases[i]+city); }
}

console.log("\nRotas possíveis:\n",sel, "\n");

var dist = [['AB', 'AC', 'AD', 'BC', 'BD', 'CD', 'BA', 'CA', 'DA', 'CB', 'DB', 'DC'],
            [   3,    2,    7,    8,    4,    6,    3,    2,    7,    8,    4,    6]];

var final_dist = []
var contador = 0;
var result = [];

for (var b = 0; b<6; b++){
for (var a = 0; a<12; a++){

        if(sel[b].includes(dist[0][a])){contador = contador + dist[1][a];}

          if (a==11){
              final_dist.push(contador);
              contador = 0; }
    }
}
console.log('Distancias: ',final_dist)
var min = Math.min(...final_dist);
rotas(min);
