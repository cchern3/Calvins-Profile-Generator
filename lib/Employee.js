class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = "Employee";
    }
    retrieveRole() {
        return this.role;
    }

    retrieveName() {
        return this.name;
    }

    retrieveId() {
        return this.id;
    }

    retrieveEmail() {
        return this.email;
    }
};

module.exports = Employee;