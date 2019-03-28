import { retirarValoresInput, createHtmlIngredienteInput, pendurarInput } from "./manipuladorInput";
import { printReceitas } from "../toString";

function pressOk() {
    document.getElementById("btnok").addEventListener("click", function () {
        let inputIngrediente = retirarValoresInput("ingrediente");
        document.getElementById("result").innerHTML += printReceitas(inputIngrediente);
    });
}

export function addIngredientePesquisa(elemento) {
    let counter = 1;
    document.getElementById("btnaddpesquisa").addEventListener("click", function () {

        let text = createHtmlIngredienteInput(counter);
        let filho = document.getElementById(elemento);

        pendurarInput(filho, text);

        counter++;
    });
};

addIngredientePesquisa("ingrediente");
pressOk();