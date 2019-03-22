import {
    getConteudoCadastroReceita
} from "./manipuladorInput";
import {
    addIngrediente
} from "./listeners";
import {
    cadastrarReceita
} from "../cadastrarReceita";

function pressCadastrar() {
    document.getElementById("btncadastrar").addEventListener("click", function () {
        let conteudoCadastro = getConteudoCadastroReceita("camposCadastro");
        cadastrarReceita(conteudoCadastro);
        document.getElementById("result").innerHTML += "Receita cadastrada com sucesso!";
    });
}

addIngrediente("listIngredienteul");
pressCadastrar();