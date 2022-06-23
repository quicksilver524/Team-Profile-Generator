const { test, expect } = require("@jest/globals");
const Intern = require("../lib/Intern");

test("creates intern object", () => {
  const intern = new Intern(
    "Jeremy",
    "40",
    "quicksilver524@gmail.com",
    "University of Central Florida"
  );

  expect(intern.name).toBe("Jeremy");
  expect(intern.id).toBe("40");
  expect(intern.email).toBe("quicksilver524@gmail.com");
  expect(intern.school).toBe("University of Central Florida");
});

test("gets the interns school", () => {
  const intern = new Intern(
    "quicksilver524",
    "Jeremy",
    "40",
    "University of Central Florida"
  );

  expect(intern.getSchool()).toBe("School: University of Central Florida");
});

test("gets the interns role", () => {
  const intern = new Intern(
    "quicksilver524",
    "Jeremy",
    "40",
    "University of Central Florida"
  );

  expect(intern.getRole()).toBe("Role: Intern");
});
