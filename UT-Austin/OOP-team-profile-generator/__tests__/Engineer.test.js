const { Engineer } = require("../lib")
const employeeData = require("./Employee.test")

const { name, id, email } = employeeData
const github = "michael-rodriguez22"

test("creates Engineer object", () => {
  const engineer = new Engineer(name, id, email, github)

  expect(engineer.name).toEqual(name)
  expect(engineer.id).toEqual(id)
  expect(engineer.email).toEqual(email)
  expect(engineer.github).toEqual(github)
})

test("getter functions return correct values", () => {
  const engineer = new Engineer(name, id, email)

  expect(engineer.getName()).toEqual(name)
  expect(engineer.getId()).toEqual(id)
  expect(engineer.getEmail()).toEqual(email)
  expect(engineer.getRole()).toEqual("Engineer")
  expect(engineer.getGithub()).toEqual(github)
})
