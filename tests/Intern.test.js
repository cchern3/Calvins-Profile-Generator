// obtaining data from js intern file
const Intern = require("../lib/Intern.js");
// jest.mock("../lib/Intern.js");

test("creates an object for the intern", () => {
    const intern = new Intern("Bob", 10, "Bob@gmail.com", "GT");

    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
    expect(intern.role).toEqual(expect.any(String));
})

test("retrieves the intern name", () => {
    const intern = new Intern("Bob", 10, "Bob@gmail.com", "GT");

    expect(intern.retrieveName()).toBe("Bob");
});

test("retrieves the intern id", () => {
    const intern = new Intern("Bob", 10, "Bob@gmail.com", "GT");

    expect(intern.retrieveId()).toBe(10);
});

test("retrieves the intern email", () => {
    const intern = new Intern("Bob", 10, "Bob@gmail.com", "GT");

    expect(intern.retrieveEmail()).toBe("Bob@gmail.com");
});

test("retrieves the intern role", () => {
    const intern = new Intern("Bob", 10, "Bob@gmail.com", "GT");

    expect(intern.retrieveRole()).toBe("Intern");
    console.log(intern);
});

test("retrieves the intern school", () => {
    const intern = new Intern("Bob", 10, "Bob@gmail.com", "GT");

    expect(intern.retrieveSchool()).toBe("GT");
})