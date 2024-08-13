











// passo 1 pegar o elemento html dos botoes
const botoesCarrossel = document.querySelectorAll(".botao");
const imagens = document.querySelectorAll(".imagem");
const informacoes = document.querySelectorAll(".informacoes")

// passo 2 identificar o click no botão
/*const botao1 = document.getElementById('botao1');
botao1.addEventListener("click", () => {
    console.log('clicou no botao');
})*/
botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener("click", () => {
        //passo 3 desmarcar o botao selecionado anterior
        const botaoSelecionado = document.querySelector(".selecionado");
        botaoSelecionado.classList.remove("selecionado");
        // passo 4 marcar botao clicado como se estivesse selecionado
        botao.classList.add("selecionado");
        //passo 5 esconder a imagem anteriormente selecionada
        const imagemAtiva = document.querySelector(".ativa");
        imagemAtiva.classList.remove("ativa");
        //passo 6 mostrar imagem correspondente ao botao clicado
        imagens[indice].classList.add("ativa");
        //passo 7 esconder as informaçoes do dragao snterior
        const informacoesAtiva = document.querySelector(".informacoes.ativa");
        informacoesAtiva.classList.remove("ativa");
        //passo 8 mostrar informaçao referente ao dragao selecionado
        informacoes[indice].classList.add("ativa");

    });
})
