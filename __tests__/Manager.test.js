const { test, expect } = require("@jest/globals");
const Manager = require("../lib/Manager");

test("creates manager object", () => {
  manager = new Manager("Jeremy", "40", "quicksilver524@gmail.com", "10");

  expect(manager.name).toBe("Jeremy");
  expect(manager.id).toBe("40");
  expect(manager.email).toBe("quicksilver524@gmail.com");
  expect(manager.officeNumber).toBe("10");
});

test("gets managers office number", () => {
  manager = new Manager("Jeremy", "40", "quicksilver524@gmail.com", "10");

  expect(manager.getOfficeNumber()).toBe("Office Number: 10");
});

test("gets managers role", () => {
  manager = new Manager("Jeremy", "40", "quicksilver524@gmail.com", "10");

  expect(manager.getRole()).toBe("Role: Manager");
});
