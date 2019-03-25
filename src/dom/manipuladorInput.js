export function retirarValoresInput(elemento) {
    let nos = pegarNos(elemento);
    console.log(nos);
    let arrayDeNos = passarNosParaArray(nos);
    let input = [];
    arrayDeNos.forEach(no => {
        input.push(no.children[0].value);
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

    const listIngredienteUlFilhoLi = document.querySelector('ul[id="listIngredienteul"').children[0];
    let ingredientes = [listIngredienteUlFilhoLi.children[0].value];

    if (document.querySelector('ul[id="listIngredienteul"').children[1] !== undefined) {
        const camposIngredienteAdicionados = document.querySelector('ul[id="listIngredienteul"').children[1].children;
        let campo;
        for (campo in camposIngredienteAdicionados) {
            const conteudoCampoAtual = camposIngredienteAdicionados[campo].value;
            if (conteudoCampoAtual !== undefined) {
                ingredientes.push(conteudoCampoAtual);
            }
        }
    }
    receita.push(ingredientes);
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
}