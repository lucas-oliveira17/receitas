import  { printReceitas } from "../toString"

test('retorno do printaReceita',  () => {
    expect(printReceitas(["1 Limão", "1L de Vodka"])).toBe(
    `<ul>
                <li>Nome: Caipirinha da Jessikill </li>
                <li>Autor: Jessikill </li>
                <li>Ingredientes:<ul> <li> 1 Limão </li><li> 1L de Vodka </li></ul></li>
                <li>Modo de Preparo: Blabla </li>
                </ul>`); 
});