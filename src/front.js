import {
    pesquisaPorIngrediente
} from "./pesquisarReceitas"

 let printaReceita = function (ingrediente) {
    let receitaOutput = "";
    let ingredientesReceita = "";

    pesquisaPorIngrediente(ingrediente).forEach(receita => {
        receita.ingredientes.forEach(ingrediente => ingredientesReceita += `<li> ${ingrediente} </li>` );
        receitaOutput += `<ul>
                <li>Nome: ${receita.nome} </li>
                <li>Autor: ${receita.autor} </li>
                <li>Ingredientes:<ul> ${ingredientesReceita}</ul></li>
                <li>Modo de Preparo: ${receita.modoDePreparo} </li>
                </ul>`
    })

    return receitaOutput;
}

function pressOk() {
    document.getElementById("btnok").addEventListener("click", function () {
        let ingrediente = pegarFilhos("ingrediente");
        let arrayDeFilhos = passarFilhosParaArray(ingrediente);
        let inputIngrediente = [];
        arrayDeFilhos.forEach(filhoIngrediente => {
            
            if (filhoIngrediente.value.length > 1){
            inputIngrediente.push(filhoIngrediente.value);
            }
        })
        document.getElementById("result").innerHTML += printaReceita(inputIngrediente);
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