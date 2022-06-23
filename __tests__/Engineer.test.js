const { test, expect } = require("@jest/globals");
const Engineer = require("../lib/Engineer");

test("Creates enginineer object", () => {
  const engineer = new Engineer(
    "Jeremy",
    "40",
    "quicksilver524@gmail.com",
    "quicksilver524"
  );

  expect(engineer.name).toBe("Jeremy");
  expect(engineer.id).toBe("40");
  expect(engineer.email).toBe("quicksilver524@gmail.com");
  expect(engineer.github).toBe("quicksilver524");
});

test("gets engineers github", () => {
  const engineer = new Engineer(
    "Jeremy",
    "40",
    "quicksilver524@gmail.com",
    "quicksilver524"
  );

  expect(engineer.getGithub()).toBe("https://github.com/quicksilver524/");
});

test("gets role of engineer", () => {
  const engineer = new Engineer(
    "Jeremy",
    "40",
    "quicksilver524@gmail.com",
    "quicksilver524"
  );

  expect(engineer.getRole()).toBe("Role: Engineer");
});
