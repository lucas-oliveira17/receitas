let receitas = [];

let pesquisaPorIngrediente = function (ingredienteInput) {
    receitas = receitasProntas.filter(receita => {
        return receita.ingredientes.some(ingrediente => {
            return ingrediente === ingredienteInput;
        });
    });
    return receitas;
}

let toStringReceitas = function () {
    ingredienteInput = "1 Limão";
    pesquisaPorIngrediente(ingredienteInput).forEach(receita => {
        return "Nome: " + receita.nome
    })
}

console.log(toStringReceitas())