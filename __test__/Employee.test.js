const Employee = require("../lib/Employee"); // imports class from lib pathway

test("Can create an new employee.", () => {
    const employeeInstance = new Employee();
    expect(typeof(employeeInstance)).toBe("object"); //assertion
})

test("Testing name.", () => {
    const name = "James";
    const employeeInstance = new Employee(name);
    expect(employeeInstance.name).toBe(name);
})

test("Testing ID.", () => {
    const id = 2;
    const employeeInstance = new Employee("James", id);
    expect(employeeInstance.id).toBe(id);
})

test("Testing Employee.", () => {
    const name = "James";
    const email = "jamesljenks@gmail.com";
    const id = 2;
    const employeeInstance = new Employee(name, id, email);
    expect(employeeInstance.email).toBe(email);
    expect(employeeInstance.id).toBe(id);
    expect(employeeInstance.name).toBe(name);
})
