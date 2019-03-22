export function getConteudoPesquisaIngredientes(elemento) {
    let filhos = pegarFilhos(elemento);
    let arrayDeFilhos = passarFilhosParaArray(filhos);
    let input = [];
    arrayDeFilhos.forEach(filho => {
        if (filho.value.length > 1) {
            input.push(filho.value);
        }
    });
    return input;
}

function passarFilhosParaArray(elemento) {
    return Array.from(elemento);
}

function pegarFilhos(elemento) {
    console.log(document.getElementById(elemento));
    return document.getElementById(elemento).childNodes;
}

export function getConteudoCadastroReceita() {

    let receita = [];
    let ingredientes = [];

    receita = [document.querySelector('input[name="nome"]').value, document.querySelector('input[name="autor"]').value,
        document.querySelector('input[name="modopreparo"]').value
    ];

    const camposIngredienteAdicionados = document.querySelector('ul[id="listIngredienteul"').children[1].children;

    ingredientes.push(document.querySelector('ul[id="listIngredienteul"').children[0].children[0].value);

    if (camposIngredienteAdicionados.length > 0) {
        let campo;
        for (campo in camposIngredienteAdicionados) {
            const conteudoCampoAtual = camposIngredienteAdicionados[campo].value;
            if (conteudoCampoAtual !== undefined) {
                ingredientes.push(conteudoCampoAtual);
            }
        }
    }

    receita.push(ingredientes);
    console.log(receita);
    
    return receita;
}

export function createHtmlIngredienteInput(counter) {
    let text = document.createElement("li");
    text.setAttribute("name", "ingrediente")
    text.innerHTML = "<input type='text' id='campoIngrediente" + counter + "'></li>";
    return text;
}

export function pendurarInput(elemento, text) {
    elemento.appendChild(text);
    console.log(elemento);
}