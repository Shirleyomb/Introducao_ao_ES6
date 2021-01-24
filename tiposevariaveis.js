/*// escopo global

{
  //escopo bloco
}

function test (){
  //escopo de função
}

var nameVar= "Shirley";
let nameLet= "Shirley";
const nameConst= "Shirley";

console.log("nameVar: ${nameVar}");
console.log("nameLet: ${nameLet}");
console.log("nameConst: ${nameConst}");
*/
/*var test = 'example';

(() =>{
  var test;
  console.log('Valor dentro da função "${test}" ');

  if (true) {
    test = 'example';
    console.log('Valor dentro do if "${test}" ');
  }

  console.log('Valor após a execução do if  "${teste}" ');
})();
*/

/*
(() => {
  let test = "valor função" ;
  console.log('Valor dentro da função  "${test}" '); 
  if (true) {
    let test = "valor if" ;
    console.log('Valor dentro do if "${test}" ');
  }

  console.log('Valor após a execução do if "${test}" ');  
})();
*/

/*
const persons = ['Guilherme', 'Pedro', 'Shirley'];

//Podemos adicionar novos itens
persons.push('Fernando');
//['Guilherme', 'Pedro', 'Shirley', 'Fernando']

//Podemos remover algum item 
persons.shift('Guilherme');
//['Pedro', 'Shirley', 'Fernando']

//Podemos alterar diretamente
persons[0] = 'James';
//['James', 'Shirley', Fernando]

console.log('\nArray após as alterações:', persons);
*/

/*
//Retorna um array quebrando a string por um delimitador
const splittedText = 'Texto' .split('x');
console.log('\nArray com as posições separadas pelo delimitador:' ,splittedText);

//Busca por um valor e substitui por outro
const replacedText = 'Texto'.replace('Text', 'txet');
console.log('\nSubstituição de valor:' ,replacedText);

//Retorna a "falta" de um valor
const lastChar = 'Texto' .slice(-1);
console.log ('\nÚltima letra de uma string:', lastChar);

const allWithoutLastChar = 'Texto' .slice(0, -1);
console.log ('\nValor da string da primeira letra menos a útlima:', allWithoutLastChar);

const secondToEnd = 'Texto' .slice(1);
console.log ('\nValor da string da segunda letra até a última:', secondToEnd);

//Retorna N caracteres a partir de uma posição
const twoCharsBeforeFirstPos = 'Texto'  .substr(0, 2);
console.log('\nAs duas  primeiras letras são:', twoCharsBeforeFirstPos);
*/

/*
const myNumber = 12.4032;

//Transformar número para string
const numberAsString = myNumber.toString();
console.log('Número transformado em string: ', typeof numberAsString);

//Retorna número com um número de casas decimais 
const fixedTwoDecimals = myNumber.toFixed(2);
console.log('\nNúmero com duas casas decimais:', fixedTwoDecimals);

//Transforma uma string em float
console.log('\nString parseada para float:',  parseFloat('13.22'));

//Transforma uma string em int
console.log('\nString parseada para int:',  parseInt('13,20'));
*/

/*
const  nullVariable = null;
console.log(nullVariable);
*/

/*
let undefinedVariable;
console.log('Tipo de variável:', typeof undefinedVariable);
*/

/*
const isActive = true;
const isAuthenticated = false;
console.log('Tipo da variável:', typeof isActive);
*/

/*
let user = {
  name: 'Guilherme'
};

//Alterando a propriedade de um objeto 
console.log (user);

user.name = 'Outro nome 1';
console.log(user);
user['name'] = 'Outro nome 2';

console.log(user);
const prop = 'name';
user[prop] = 'Outro nome 3';

console.log(user);

// //Criando uma propriedade
user.lastName  = 'Shirley Brito';

console.log(user);
// // Deletando uma propriedade
delete user.name;

console.log(user);
*/

/*
const user = {
  name: 'Shirley',
  lastName: 'Oliveira Mendes Brito'
}

//Recupera as chaves do objeto
console.log('Propriedades do objeto user:', Object.keys(user));

//Recupera os valores das chaves do objeto
console.log('\nValores das propriedades do obejeto user:', Object.values(user));

//Retorna um array de arrays contendo [nome_prop, valor,prop]
console.log ('\nLista de propriedades e valores :', Object. entries(user));

// Mergear propriedades de objetos 
Object.assign(user, {fullName: 'Shirley Oliveira Mendes Brito'});

console.log('\nAdiciona a propriedade fullName no objeto user', user);
console.log('\nRetorna um novo objeto mergeando dois ou mais objetos', Object.assignt({}, user , {age: 39}));

//Previne todas as alterações de um objeto
const newObj = { foo: ' bar' };
Object. freeze(newObj);

newObj.foo = 'changes';
delete newObj.foo;
newObj.bar = 'foo';

console.log('\nVariável newObj após as alterações:' newObj);

//Permite apenas a alteração de propriedades existentes em um objeto
const person = {name: 'Shirley'};
Object.seal(person);

person.name = 'Shirley Brito';
delete person.name;
person.age = 26;

console.log('\nVariável person após as alterações:', person);
*/

const symbol1 = Symbol();
const symbol2 = Symbol();

//Symbos são únicos 
console.log('symbol1 é igual a symbol2:', symbol1 === symbol2);

//Previnir conflito entre nomes de propriedades
const nameSymbol1 = Symbol('name');
const nameSymbol2 = Symbol('name');

const user = {
  [nameSymbol1]: 'Shirley',
  [nameSymbol2]: 'Outro nome',
  lastName: 'Oliveira Mendes Brito'
}

console.log(user);

//Symbols criam propriedades que não são enumberables 
for (const key in user) {
  if (user.hasOwnProperty(key)) {
    console.log('\nValor da chave ${key}: ${user[key]}'); 
  }
}
 
console.log('Propriedaes do objeto user :', Object.keys(user));
console.log('Valores das propriedades do objeto user:',Object.values(user));

//Exibir symbols de um objeto
console.log('Symbols registrados no objeto user:', Object.getOwnPropertySymbols(user));

//Acessando todas as propriedades do objetos
console.log('Todas propriedades do objeto user:', Reflect.ownKeys(user));


//Criar enum
const directions = {
  UP : Symbol('UP'),
  DOWN : Symbol('DOWN'),
  LEFT : Symbol('LEFT'),
  RIGHT: Symbol('RIGHT')
}; 



















