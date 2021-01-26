/*
function fn() {
  return 'Code here';
}

const arrowfn = () =>  'Code here';
const arrowfn2 = () => {
  //Mais de uma expressão
  return 'Code here';
}

//Funções também são objetos
fn.prop = 'Posso criar propriedades';

console.log(fn());
console.log(fn.prop);

//Receber parâmetros
const logValue = value => console.log(value);
const logFnResult = fnParam => console.log(fnParam());

logFnResult(fn);

//Receber e retornar funções
const controlFnExec=  fnParam => allowed => {
  if (allowed){
    fnParam();
  }
}

const handleFnExecution = controlFnExec(fn);

//ControlFnExec como função
function controlFnExec(fnParam){
  return function(allowed) {
    if (allowed){
      fnParam();
    }
  }
}
*/

(() => {
this.name = 'Arrow function';

const getNameArrowFn = () => this.name;

function getName(){
  return this.name;
}

const user = {
  name: 'Nome no objeto de execução',
  getNameArrowFn,
  getName
}

console.log(user.getNameArrowFn());
console.log(user.getName());
})();

