import { criarReceita } from "./criarReceita";
import { receitasProntas } from "./receitasProntas";

export let cadastrarReceita = function(conteudoCadastro){
    receitasProntas.push(criarReceita(conteudoCadastro[0], conteudoCadastro[1], conteudoCadastro[3], conteudoCadastro[2]));
    console.log(receitasProntas);
}