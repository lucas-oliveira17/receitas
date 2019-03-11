import {
    pesquisaPorIngrediente
} from "./pesquisarReceitas"

let toStr = function (ingrediente) {
    let str = "";
    let strIng = "";
    pesquisaPorIngrediente(ingrediente).forEach(receita => {
        receita.ingredientes.forEach(ingrediente => {
            strIng += "- " + ingrediente + "<br>"
        })
        str += "Nome: " + receita.nome + "<br>" +
            "Autor: " + receita.autor + "<br>" +
            "Ingredientes: " + strIng +
            "Modo de Preparo: " + receita.modoDePreparo + "<br><br>"
    })
    return str;
}

function pressOk() {
    document.getElementById("btnok").addEventListener("click", function () {
        let ingrediente = document.getElementById("ingr").childNodes;
        let array = Array.from(ingrediente)
        array.forEach(campo => {
            console.log(campo.value);
        })
    });
}

function addInput() {
    let counter = 1;
    document.getElementById("btnadd").addEventListener("click", function () {

        let ingrediente = document.getElementById("ingr");

        let text = "<input type='text' id='campoIngrediente" + counter + "' <style='margin:10px 0px'>";

        ingrediente.appendChild(text);

        document.getElementById("new").appendChild(ingrediente);
        counter++;
    })
};

pressOk();

addInput();