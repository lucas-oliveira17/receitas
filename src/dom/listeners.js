import { createHtmlIngredienteInput, pendurarInput } from "./manipuladorInput";

export function addIngrediente(elemento) {
    let counter = 1;
    
    document.getElementById("btnadd").addEventListener("click", function () {

        let text = createHtmlIngredienteInput(counter);
        let ingrediente = document.getElementById(elemento);

        pendurarInput(ingrediente, text);

        counter++;
    });
};