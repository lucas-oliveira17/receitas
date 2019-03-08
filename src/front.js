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

pressOk();

pressAdd();

function pressOk() {
    document.getElementById("btnok").addEventListener("click", function () {
        document.getElementById("ingrediente");
        document.getElementById("result").innerHTML = toStr(document.getElementById("caixaIngrediente").value);
    });
}

function pressAdd() {
    let counter = 0;
    document.getElementById("add").addEventListener("click", addInput());

    function addInput() {
        var cx = document.getElementById("caixaIngrediente");
        document.getElementById("add2").innerHTML += cx;
        counter++;
    };
}