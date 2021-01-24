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
