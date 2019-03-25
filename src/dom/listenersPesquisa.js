import { retirarValoresInput } from "./manipuladorInput";
import { printReceitas } from "../toString";
import { addIngrediente } from "./listeners";

function pressOk() {
    document.getElementById("btnok").addEventListener("click", function () {
        let inputIngrediente = retirarValoresInput("ingrediente");
        document.getElementById("result").innerHTML += printReceitas(inputIngrediente);
    });
}

addIngrediente("ingrediente");
pressOk();