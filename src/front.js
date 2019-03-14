import {
    pesquisaPorIngrediente
} from "./pesquisarReceitas"

let toStr = function (ingrediente) {
    let str = "";
    let strIng = "";
    pesquisaPorIngrediente(ingrediente).forEach(receita => {
        receita.ingredientes.forEach(ingrediente => strIng += `- ${ingrediente} <br>` );
        str += `Nome: ${receita.nome} <br>` +
               `Autor: ${receita.autor} <br>` +
               `Ingredientes: ${strIng}` +
               `Modo de Preparo: ${receita.modoDePreparo} <br><br>`
    })
    return str;
}

function pressOk() {
    document.getElementById("btnok").addEventListener("click", function () {
        let ingrediente = pegarFilhos("ingrediente");
        let arrayDeFilhos = passarFilhosParaArray(ingrediente);
        let valoresDosFilhos = [];
        arrayDeFilhos.forEach(filhoIngrediente => {
            if (filhoIngrediente.value.length > 1){
            valoresDosFilhos.push(filhoIngrediente.value);
            }
        })
        document.getElementById("result").innerHTML += toStr(valoresDosFilhos);
    });
}

function passarFilhosParaArray(elemento) {
    return Array.from(elemento);
}

function pegarFilhos(elemento) {
    return document.getElementById(elemento).childNodes;
}

function addInput() {
    let counter = 1;
    document.getElementById("btnadd").addEventListener("click", function () {

        let ingrediente = document.getElementById("ingrediente");

        let text = document.createElement("input");

        text.innerHTML = "<input type='text' id='campoIngrediente" + counter + "'>";
        text.setAttribute("style", "margin:0.5% 30%");

        ingrediente.appendChild(text);

        console.log(ingrediente);

        document.getElementById("new").appendChild(ingrediente);

        counter++;
    });
};

pressOk();
addInput();