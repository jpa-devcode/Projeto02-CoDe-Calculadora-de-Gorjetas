function calcularGorjeta(event) {
  event.preventDefault();

  // let valorDaConta = document.getElementById('valorDaConta').value;
  let valorDaConta = getMoney(document.getElementById('valorDaConta').value);
  let avaliacaoDoAtendimento = document.getElementById(
    'avaliacaoDoAtendimento'
  ).value;
  let qtdeDePessoas = document.getElementById('qtdeDePessoas').value;
  let gorjetaPorPessoa = Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(
    ((valorDaConta * avaliacaoDoAtendimento) / qtdeDePessoas).toFixed(2)
  );
  let gorjetaTotal = Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format((valorDaConta * avaliacaoDoAtendimento).toFixed(2));

  if (
    (valorDaConta == '') |
    (avaliacaoDoAtendimento == 0) |
    (qtdeDePessoas == '')
  ) {
    alert('O preenchimento de todos os campos é obrigatório!');
    return;
  }

  if (qtdeDePessoas <= 1) {
    document.getElementById('valorGorjetaPorPessoa').style.display = 'none';
    document.getElementById('valorGorjetaTotal').style.marginTop = '50px';
  } else {
    document.getElementById('valorGorjetaPorPessoa').style.display = 'block';
    document.getElementById('valorGorjetaTotal').style.marginTop = '20px';
    document.getElementById('valorPorPessoa').innerHTML = gorjetaPorPessoa;
  }

  document.getElementById('valorTotal').innerHTML = gorjetaTotal;
  document.getElementById('valorGorjetaTotal').style.display = 'block';
}

String.prototype.reverse = function () {
  return this.split('').reverse().join('');
};

function mascaraMoeda(campo, evento) {
  var tecla = !evento ? window.event.keyCode : evento.which;
  var valor = campo.value.replace(/[^\d]+/gi, '').reverse();
  var resultado = '';
  var mascara = '##.###.###,##'.reverse();
  for (var x = 0, y = 0; x < mascara.length && y < valor.length; ) {
    if (mascara.charAt(x) != '#') {
      resultado += mascara.charAt(x);
      x++;
    } else {
      resultado += valor.charAt(y);
      y++;
      x++;
    }
  }
  campo.value = resultado.reverse();
}

function getMoney(str) {
  return str
    .replace(/[^\d,]+/g, '') // Remove caracteres desnecessários.
    .replace(',', '.'); // Troca o separador decimal (`,` -> `.`)
}

document.getElementById('valorGorjetaPorPessoa').style.display = 'none';
document.getElementById('valorGorjetaTotal').style.display = 'none';

document
  .getElementById('formulario')
  .addEventListener('submit', calcularGorjeta);
