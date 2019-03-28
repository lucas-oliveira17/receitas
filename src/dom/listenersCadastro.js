import { retirarValoresInputCadastroReceita, createHtmlIngredienteInput, pendurarInput } from "./manipuladorInput";
import { cadastrarReceita } from "../cadastrarReceita";

function pressCadastrar() {
    document.getElementById("btncadastrar").addEventListener("click", function () {
        let conteudoCadastro = retirarValoresInputCadastroReceita("camposCadastro");
        cadastrarReceita(conteudoCadastro);
        document.getElementById("result").innerHTML += `Receita cadastrada com sucesso!`;
    });
}

export function addIngredienteCadastro(elemento) {
    let counter = 1;
    document.getElementById("btnaddcadastro").addEventListener("click", function () {

        let text = createHtmlIngredienteInput(counter);
        let filho = document.getElementById(elemento);

        pendurarInput(filho, text);

        counter++;
    });
};

addIngredienteCadastro("camposIngredienteCadastro");
pressCadastrar();