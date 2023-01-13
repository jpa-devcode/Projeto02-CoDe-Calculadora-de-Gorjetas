function calcularGorjeta(event) {
  event.preventDefault();

  let valorDaConta = document.getElementById('valorDaConta').value;
  let avaliacaoDoAtendimento = document.getElementById(
    'avaliacaoDoAtendimento'
  ).value;
  let qtdeDePessoas = document.getElementById('qtdeDePessoas').value;
  let gorjetaPorPessoa = (
    (valorDaConta * avaliacaoDoAtendimento) /
    qtdeDePessoas
  ).toFixed(2);
  let gorjetaTotal = (valorDaConta * avaliacaoDoAtendimento).toFixed(2);

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

document.getElementById('valorGorjetaPorPessoa').style.display = 'none';
document.getElementById('valorGorjetaTotal').style.display = 'none';

document
  .getElementById('formulario')
  .addEventListener('submit', calcularGorjeta);
