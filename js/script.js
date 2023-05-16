// Menu Ativo

const links = document.querySelectorAll('.header-menu a');

function ativarLink(link){
    const url = window.location.href;
    const href = link.href;
    if(url.includes(href)){
        link.classList.add('ativo');
    }
}

links.forEach(ativarLink);


//Ativar itens do orçamento

const parametros = new URLSearchParams(location.search); //Pega os parametros da URL

function ativarProduto(parametro){
    const elemento = document.getElementById(parametro);
    if(elemento){
        elemento.checked = true;
    }
}

parametros.forEach(ativarProduto);


//Perguntas Frequentes

const perguntas = document.querySelectorAll('.perguntas button');

function ativarPergunta(event){
    const pergunta = event.currentTarget;
    const controls = pergunta.getAttribute('aria-controls');
    const resposta = document.getElementById(controls);
    
    pergunta.getAttribute('aria-expanded') == 'true' ? pergunta.setAttribute('aria-expanded', 'false') : pergunta.setAttribute('aria-expanded', 'true');
    resposta.classList.toggle('ativa');

}

function eventosPerguntas(pergunta){
    pergunta.addEventListener('click', ativarPergunta);
}

perguntas.forEach(eventosPerguntas);