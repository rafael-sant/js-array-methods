let btnOrdenarPorPreco = document.getElementById("btnOrdenarPorPreco");

btnOrdenarPorPreco.addEventListener("click", ordenarLivrosPorPreco);

function ordenarLivrosPorPreco() {
  console.log(livros);
  let livrosOrdenados = livros.sort((a, b) => a.preco - b.preco);
  exibirOsLivrosNaTela(livrosOrdenados);
}
