
  // Função tradicional sem parâmetros
  function sayHello() {
    alert('Olá! Esta é uma função tradicional sem parâmetros.');
  }

  // Função tradicional com parâmetros e retorno de valor
  function addNumbers(a, b) {
    return a + b;
  }

  function subtractNumbers(a,b){
    return a - b
  }

  // Arrow function com parâmetros e retorno de valor
  const multiplyNumbers = (a, b) => a * b;

  // Função para calcular a soma
  function calculateSum() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const sum = addNumbers(num1, num2);
    document.getElementById('result').innerText = `Resultado: ${sum}`;
  }

  // Função para calcular a diferença
  function calculateDifference() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const difference = subtractNumbers(num1, num2);
    document.getElementById('result').innerText = `Resultado: ${difference}`;
  }


  // Função para calcular o produto
  function calculateProduct() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const product = multiplyNumbers(num1, num2);
    document.getElementById('result').innerText = `Resultado: ${product}`;
  }

  // Função para calcular a divisão
function calculateDivision() {
  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);

  // Evitar a divisão por zero
  if (num2 !== 0) {
    const division = num1 / num2;
    document.getElementById('result').innerText = `Resultado: ${division}`;
  } else {
    document.getElementById('result').innerText = 'Não é possível dividir por zero!';
  }
  }
