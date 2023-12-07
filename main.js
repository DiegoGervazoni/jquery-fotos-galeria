$(document).ready(function () {
  $("header button").click(function () {
    $("form").slideDown(); //Mostra o formulário
  });

  $("#botao-cancelar").click(function () {
    $("form").slideUp(); //Esconde o formulário
  });

  $("form").on("submit", function (e) {
    e.preventDefault();
    const enderecoNovaImagem = $("#endereco-imagem-nova").val(); //Pega o valor do input
    const novoItem = $("<li style='display: none'></li>"); //Cria um novo item
    $(`<img src="${enderecoNovaImagem}" />`).appendTo(novoItem); //Adiciona a imagem ao novo item
    $(`<div class="overlay-imagem-link">
        <a href="${enderecoNovaImagem}" target="_blank" title="Ver imagme em tamanho real">
          Ver imagem em tamanho real
        </a>
    </div>`).appendTo(novoItem);
    $(novoItem).appendTo("ul"); //Adiciona o novo item a lista
    $(novoItem).fadeIn(1000); //Mostra o novo item com efeito de fade
    $('#endereco-imagem-nova').val(""); //Limpa o input

  });
});
