export let criarReceita = function(nome, autor, ingredientes, modoDePreparo){
    return {
        nome: nome,
        autor: autor,
        ingredientes: ingredientes,
        modoDePreparo: modoDePreparo
    }
}