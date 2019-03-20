import { getConteudoInput, createHtmlIngredienteInput, pendurarInput } from "./manipuladorInput";

function addIngrediente() {
    let counter = 1;
    
    document.getElementById("btnadd").addEventListener("click", function () {

        let text = createHtmlIngredienteInput(counter);
        let ingrediente = document.getElementById("ingrediente");

        pendurarInput(ingrediente, text);

        counter++;
    });
};

function pressCadastrar() {
    document.getElementById("btncadastrar").addEventListener("click", function () {
        let receita = getConteudoInput("camposCadastro");
        cadastrarReceita(receita);
        document.getElementById("result").innerHTML += "Receita cadastrada com sucesso!";
    });
}

addIngrediente();
pressCadastrar();