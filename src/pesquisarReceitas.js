let receitas = [];

export let pesquisaPorIngrediente = function (ingredienteInput) {
    console.log(receitasPadrao);
    receitas = receitasPadrao.filter(receita => {
        return ingredienteInput.every(ingr => receita.ingredientes.includes(ingr));
    });
    return receitas;
}