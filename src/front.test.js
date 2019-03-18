import  { printaReceita } from "./front"

test('retorno do printaReceita',  () => {
    expect(printaReceita(["1 Limão"])).toBe("");
});