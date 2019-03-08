import { pesquisaPorIngrediente } from "./pesquisarReceitas"

let toStr = function (ingrediente) {
    let str = "";
    pesquisaPorIngrediente(ingrediente).forEach(receita => {
        str += "Nome: " + receita.nome + "<br>" +
               "Autor: " + receita.autor + "<br>" +
               "Ingredientes: " + receita.ingredientes + "<br>" +
               "Modo de Preparo: " + receita.modoDePreparo + "<br><br>"
    })
    return str;
}

document.getElementById("btnok").addEventListener("click", function () {
    document.getElementById("result").innerHTML = toStr(document.getElementById("caixaIngrediente").value);
})