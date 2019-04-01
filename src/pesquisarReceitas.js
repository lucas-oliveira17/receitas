import { receitasProntas } from './receitasProntas'

let receitas = [];

export let pesquisaPorIngrediente = function (ingredienteInput) {
    console.log(receitasProntas);
    receitas = receitasProntas.filter(receita => {
        return ingredienteInput.every(ingr => receita.ingredientes.includes(ingr));
    });
    return receitas;
}