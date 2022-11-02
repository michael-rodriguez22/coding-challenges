const { Employee } = require("../lib")

const employeeData = {
  name: "Michael Rodriguez",
  id: 123456,
  email: "michaelrodriguez22.work@gmail.com",
}

const { name, id, email } = employeeData

test("creates Employee object", () => {
  const employee = new Employee(name, id, email)

  expect(employee.name).toEqual(name)
  expect(employee.id).toEqual(id)
  expect(employee.email).toEqual(email)
})

test("getter functions return correct values", () => {
  const employee = new Employee(name, id, email)

  expect(employee.getName()).toEqual(name)
  expect(employee.getId()).toEqual(id)
  expect(employee.getEmail()).toEqual(email)
  expect(employee.getRole()).toEqual("Employee")
})

module.exports = employeeData
