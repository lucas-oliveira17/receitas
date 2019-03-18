export function getIngredientesInput() {
    let ingrediente = pegarFilhos("ingrediente");
    let arrayDeFilhos = passarFilhosParaArray(ingrediente);
    let inputIngrediente = [];
    arrayDeFilhos.forEach(filhoIngrediente => {
        if (filhoIngrediente.value.length > 1) {
            inputIngrediente.push(filhoIngrediente.value);
        }
    });
    return inputIngrediente;
}

function passarFilhosParaArray(elemento) {
    return Array.from(elemento);
}

function pegarFilhos(elemento) {
    return document.getElementById(elemento).childNodes;
}

export function createHtmlInput(counter) {
    let ingrediente = document.getElementById("ingrediente");
    let text = document.createElement("input");
    text.innerHTML = "<input type='text' id='campoIngrediente" + counter + "'>";
    text.setAttribute("style", "margin:0.5% 30%");
    return { ingrediente, text };
}

export function pendurarInput(ingrediente, text) {
    ingrediente.appendChild(text);
    console.log(ingrediente);
    document.getElementById("new").appendChild(ingrediente);
}