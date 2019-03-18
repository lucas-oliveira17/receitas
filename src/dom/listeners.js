import { getIngredientesInput, createHtmlInput, pendurarInput } from "../dom/manipuladorFilhos"
import { printReceitas } from "../toString"

function pressOk() {
    document.getElementById("btnok").addEventListener("click", function () {
        let inputIngrediente = getIngredientesInput();
        document.getElementById("result").innerHTML += printReceitas(inputIngrediente);
    });
}

function addInput() {
    let counter = 1;
    
    document.getElementById("btnadd").addEventListener("click", function () {

        let { ingrediente, text } = createHtmlInput(counter);

        pendurarInput(ingrediente, text);

        counter++;
    });
};

addInput();
pressOk();