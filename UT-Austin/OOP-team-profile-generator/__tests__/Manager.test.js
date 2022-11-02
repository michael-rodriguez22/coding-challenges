const { Manager } = require("../lib")
const employeeData = require("./Employee.test")

const { name, id, email } = employeeData
const office = 222

test("creates Manager object", () => {
  const manager = new Manager(name, id, email, office)

  expect(manager.name).toEqual(name)
  expect(manager.id).toEqual(id)
  expect(manager.email).toEqual(email)
  expect(manager.officeNumber).toEqual(office)
})

test("getter functions return correct values", () => {
  const manager = new Manager(name, id, email, office)

  expect(manager.getName()).toEqual(name)
  expect(manager.getId()).toEqual(id)
  expect(manager.getEmail()).toEqual(email)
  expect(manager.getRole()).toEqual("Manager")
  expect(manager.getOfficeNumber()).toEqual(office)
})
