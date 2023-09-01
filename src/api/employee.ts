import { store } from "../app/store";
import { addEmployee } from "../features/employees/employeesSlice";
import { Employee, EmployeeData } from "../types/employee.types";
import { formatDate } from "../utils/dates";

export async function createEmployee(employee: Employee) {
  try {
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
    store.dispatch(addEmployee(employeeDatas))
  } catch (error) {
    console.error(error);
    throw new Error();
  }
}