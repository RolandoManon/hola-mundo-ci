const helloWorld = require("../src/index");

test("Debe retornar 'Hola Mundo'", () => {
    expect(helloWorld()).toBe("Hola Mundo");
});