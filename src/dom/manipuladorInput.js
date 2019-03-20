export function getConteudoInput(elemento) {
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
    return document.getElementById(elemento).childNodes;
}

export function createHtmlIngredienteInput(counter) {
    let text = document.createElement("li");
    text.innerHTML = "<input type='text' id='campoIngrediente" + counter + "'></li>";
    return text;
}

export function pendurarInput(elemento, text) {
    elemento.appendChild(text);
    console.log(elemento);
}