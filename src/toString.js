import { pesquisaPorIngrediente } from "./pesquisarReceitas"

export let printReceitas = function (ingrediente) {
    let receitaOutput = "";
    let ingredientesReceita = "";
    
    const listaDeReceitas = pesquisaPorIngrediente(ingrediente);

    listaDeReceitas.forEach(receita => {
        ingredientesReceita = "";
        receita.ingredientes.forEach(ingrediente => {
            ingredientesReceita += `<li> ${ingrediente} </li>` });
        receitaOutput += `<ul>
                <li>Nome: ${receita.nome} </li>
                <li>Autor: ${receita.autor} </li>
                <li>Ingredientes:<ul> ${ingredientesReceita}</ul></li>
                <li>Modo de Preparo: ${receita.modoDePreparo} </li>
                </ul>`
            })

            return receitaOutput;
        }