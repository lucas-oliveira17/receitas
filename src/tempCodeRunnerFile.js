import printaReceita from "./front"

test('retorno do printaReceita'),  () => {
    expect(printaReceita(["1 Limão"])).toBe("");
}

console.log(printaReceita(["1 Limão"]));