const Employee = require("../lib/Employee.js");

test("creates an object for the employee", () => {
    const employee = new Employee("Bob", 10, "Bob@gmail.com");

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
})

test("receives the employee name", () => {
    const employee = new Employee("Bob", 10, "Bob@gmail.com");

    expect(employee.retrieveName()).toBe("Bob");
});

test("receives the employee id", () => {
    const employee = new Employee("Bob", 10, "Bob@gmail.com");

    expect(employee.retrieveId()).toBe(10);
});

test("receives the employee email", () => {
    const employee = new Employee("Bob", 10, "Bob@gmail.com");

    expect(employee.retrieveEmail()).toBe("Bob@gmail.com");
});

test("receives the employee role", () => {
    const employee = new Employee("Bob", 10, "Bob@gmail.com");

    expect(employee.retrieveRole()).toBe("Employee");
    console.log(employee);
});