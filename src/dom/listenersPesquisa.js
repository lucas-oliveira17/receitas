import { getConteudoInput, createHtmlIngredienteInput, pendurarInput } from "./manipuladorInput"
import { printReceitas } from "../toString"

function addInput() {
    let counter = 1;
    
    document.getElementById("btnadd").addEventListener("click", function () {

        let text = createHtmlIngredienteInput(counter);
        text.setAttribute("style", "margin:0.5% 30%");
        let ingrediente = document.getElementById("ingrediente");

        pendurarInput(ingrediente, text);

        counter++;
    });
};

function pressOk() {
    document.getElementById("btnok").addEventListener("click", function () {
        let inputIngrediente = getConteudoInput("ingrediente");
        document.getElementById("result").innerHTML += printReceitas(inputIngrediente);
    });
}

addInput();
pressOk();