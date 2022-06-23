const { test, expect } = require("@jest/globals");
const Employee = require("../lib/Employee");

test("Creates new employee object", () => {
  const employee = new Employee("Jeremy", "40", "quicksilver524@gmail.com");

  expect(employee.name).toBe("Jeremy");
  expect(employee.id).toBe("40");
  expect(employee.email).toBe("quicksilver524@gmail.com");
});

test("gets employees name", () => {
  const employee = new Employee("Jeremy", "40", "quicksilver524@gmail.com");

  expect(employee.getName()).toEqual(expect.any(String));
});

test("gets employees id", () => {
  const employee = new Employee("Jeremy", "40", "quicksilver524@gmail.com");

  expect(employee.getId()).toEqual(expect.any(String));
});

test("gets employees email", () => {
  const employee = new Employee("Jeremy", "40", "quicksilver524@gmail.com");

  expect(employee.getEmail()).toEqual(expect.any(String));
});

test("gets the employees role", () => {
  const employee = new Employee("Jeremy", "40", "quicksilver524@gmail.com");

  expect(employee.getRole()).toBe("Role: Employee");
});
