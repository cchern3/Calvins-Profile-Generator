// obtaining data from js manager file
const Manager = require("../lib/Manager.js");
// jest.mock("../lib/Manager.js");

test("creates an object for the manager", () => {
    const manager = new Manager("Bob", 10, "Bob@gmail.com", 30);

    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNumber).toEqual(expect.any(Number));
    expect(manager.role).toEqual(expect.any(String));
})

test("retrieves the manager name", () => {
    const manager = new Manager("Bob", 10, "Bob@gmail.com", 30);

    expect(manager.retrieveName()).toBe("Bob");
});

test("retrieves the manager id", () => {
    const manager = new Manager("Bob", 10, "Bob@gmail.com", 30);

    expect(manager.retrieveId()).toBe(10);
});

test("retrieves the manager email", () => {
    const manager = new Manager("Bob", 10, "Bob@gmail.com", 30);

    expect(manager.retrieveEmail()).toBe("Bob@gmail.com", 30);
});

test("retrieves the manager role", () => {
    const manager = new Manager("Bob", 10, "Bob@gmail.com", 30);

    expect(manager.retrieveRole()).toBe("Manager");
    console.log(manager);
});