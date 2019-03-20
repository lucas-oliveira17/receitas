import { criarReceita } from "./criarReceita";
import { receitasProntas } from "./receitasProntas";

let cadastrarReceita = function(receita){
    receitasProntas.push(criarReceita(receita.nome, receita.autor, receita.ingredientes, receita.modoDePreparo));
}