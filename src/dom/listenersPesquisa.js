import { getConteudoPesquisaIngredientes } from "./manipuladorInput";
import { printReceitas } from "../toString";
import { addIngrediente } from "./listeners";

function pressOk() {
    document.getElementById("btnok").addEventListener("click", function () {
        let inputIngrediente = getConteudoPesquisaIngredientes("ingrediente");
        document.getElementById("result").innerHTML += printReceitas(inputIngrediente);
    });
}

addIngrediente("ingrediente");
pressOk();