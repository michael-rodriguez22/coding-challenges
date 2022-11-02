const { Intern } = require("../lib")
const employeeData = require("./Employee.test")

const { name, id, email } = employeeData
const school = "UT Austin"

test("creates Intern object", () => {
  const intern = new Intern(name, id, email, school)

  expect(intern.name).toEqual(name)
  expect(intern.id).toEqual(id)
  expect(intern.email).toEqual(email)
  expect(intern.school).toEqual(school)
})

test("getter functions return correct values", () => {
  const intern = new Intern(name, id, email, school)

  expect(intern.getName()).toEqual(name)
  expect(intern.getId()).toEqual(id)
  expect(intern.getEmail()).toEqual(email)
  expect(intern.getRole()).toEqual("Intern")
  expect(intern.getSchool()).toEqual(school)
})
