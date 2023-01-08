const Engineer = require("../lib/Engineer.js");
// jest.mock("../lib/Engineer.js");

test("creates an object for the engineer", () => {
    const engineer = new Engineer("Bob", 10, "Bob@gmail.com", "Bobshack");

    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));
    expect(engineer.role).toEqual(expect.any(String));
})

test("receives the engineer name", () => {
    const engineer = new Engineer("Bob", 10, "Bob@gmail.com", "Bobshack");

    expect(engineer.retrieveName()).toBe("Bob");
});

test("receives the engineer id", () => {
    const engineer = new Engineer("Bob", 10, "Bob@gmail.com", "Bobshack");

    expect(engineer.retrieveId()).toBe(10);
});

test("receives the engineer email", () => {
    const engineer = new Engineer("Bob", 10, "Bob@gmail.com", "Bobshack");

    expect(engineer.retrieveEmail()).toBe("Bob@gmail.com");
});

test("receives the engineer role", () => {
    const engineer = new Engineer("Bob", 10, "Bob@gmail.com", "Bobshack");

    expect(engineer.retrieveRole()).toBe("Engineer");
    console.log(engineer);
});

test("receives the engineer github", () => {
    const engineer = new Engineer("Bob", 90, "Bob@gmail.com", "Bobshack");

    expect(engineer.retrieveGithub()).toBe("Bobshack");
})