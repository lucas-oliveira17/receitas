import {
    receitasProntas
} from './receitasProntas'

let receitas = [];

export let pesquisaPorIngrediente = function (ingredienteInput) {
    receitas = receitasProntas.filter(receita => {
        return receita.ingredientes.some(ingrediente => {
            return ingrediente === ingredienteInput;
        });
    });
    return receitas;
}