// função para inserir os números
function insert(num){
  let numero = document.getElementById('resultado').innerHTML
  document.getElementById('resultado').innerHTML = numero + num;
}
function clean(){
  document.getElementById('resultado').innerHTML = '';
}
// função para retroceder um caractere
function back(){
  let resultado = document.getElementById('resultado').innerHTML;
  document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length - 1);
}

// função para somar
function sum(){
  let resultado = document.getElementById("resultado").innerHTML;
  if (resultado){
    document.getElementById("resultado").innerHTML = eval(resultado)
  }else{
    document.getElementById("resultado").innerHTML = 'insira seu calculo'
  }
}
