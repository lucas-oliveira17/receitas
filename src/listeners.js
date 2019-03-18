import { getIngredientesInput, printaReceita, createHtmlInput, pendurarInput } from "./front"

function pressOk() {
    document.getElementById("btnok").addEventListener("click", function () {
        let inputIngrediente = getIngredientesInput();
        document.getElementById("result").innerHTML += printaReceita(inputIngrediente);
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