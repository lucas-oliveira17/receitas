export function retirarValoresInput(elemento) {
    let nos = pegarNos(elemento);
    console.log(nos);
    let arrayDeNos = passarNosParaArray(nos);
    let input = [];
    arrayDeNos.forEach(no => {
        input.push(no.value);
    });
    return input;
}

function passarNosParaArray(elemento) {
    return Array.from(elemento);
}

function pegarNos(elemento) {
    return document.getElementById(elemento).childNodes;
}

export function retirarValoresInputCadastroReceita() {

    let receita = [document.querySelector('input[name="nome"]').value, document.querySelector('input[name="autor"]').value,
        document.querySelector('input[name="modopreparo"]').value
    ];

    const ingredienteLiFilhos = document.querySelector('ul[id="camposIngrediente"').children;
    let ingredientes = [];
    let campo;

    for (campo in ingredienteLiFilhos) {
        if (campo > 0) {
            ingredientes.push(ingredienteLiFilhos[campo].children[0].value);
        }
    }
    receita.push(ingredientes);
    return receita;
}

export function createHtmlIngredienteInputCadastro(counter) {
    let text = document.createElement("li");
    text.setAttribute("name", "ingrediente")
    text.innerHTML = "<input type='text' placeholder=' Ingrediente' id='campoIngrediente" + counter + "'></li>";
    return text;
}

export function createHtmlIngredienteInputPesquisa(counter) {
    let text = document.createElement("li");
    text.setAttribute("name", "ingrediente")
    text.innerHTML = "<input type='text' placeholder=' Ingrediente' id='campoIngrediente" + counter + "'></li>";
    text.setAttribute("style", "margin:7px")
    return text;
}

export function pendurarInput(elemento, text) {
    elemento.appendChild(text);
}