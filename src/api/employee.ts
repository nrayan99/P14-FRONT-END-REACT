import { Employee, EmployeeData } from "../types/employee.types";
import { formatDate } from "../utils/dates";

export function createEmployee(employee: Employee) {
  const employees = JSON.parse(localStorage.getItem("employees") || "[]") || [];
  const employeeDatas = {
    firstName: employee.firstName,
    lastName: employee.lastName,
    dateOfBirth: formatDate(employee.dateOfBirth as Date),
    startDate: formatDate(employee.startDate as Date),
    department: employee.department.value,
    street: employee.street,
    city: employee.city,
    state: employee.state.value,
    zipCode: employee.zipCode,
  };
  employees.push(employeeDatas);
  localStorage.setItem("employees", JSON.stringify(employees));
}

export async function getEmployees(): Promise<EmployeeData[]> {
  return JSON.parse(localStorage.getItem("employees") || "[]") || [];
}
