import { retirarValoresInput, createHtmlIngredienteInputPesquisa, pendurarInput } from "./manipuladorInput";
import { printReceitas } from "../toString";

function pressOk() {
    document.getElementById("btnok").addEventListener("click", function () {
        let inputIngrediente = retirarValoresInput("ingrediente");
        document.getElementById("resultPesquisa").innerHTML += printReceitas(inputIngrediente);
    });
}

export function addIngredientePesquisa(elemento) {
    let counter = 1;
    document.getElementById("btnaddpesquisa").addEventListener("click", function () {

        let text = createHtmlIngredienteInputPesquisa(counter);
        let filho = document.getElementById(elemento);

        pendurarInput(filho, text);

        counter++;
    });
};

addIngredientePesquisa("ingrediente");
pressOk();