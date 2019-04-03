import { criarReceita } from "./criarReceita";

export let cadastrarReceita = function(conteudoCadastro){
    receitasPadrao.push(criarReceita(conteudoCadastro[0], conteudoCadastro[1], conteudoCadastro[3], conteudoCadastro[2]));
    console.log(receitasPadrao);
}