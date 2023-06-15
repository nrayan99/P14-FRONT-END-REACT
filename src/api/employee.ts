import { Employee } from "../types/employee.types";

export default function createEmployee(employee: Employee) {
    const employees = JSON.parse(localStorage.getItem('employees') || "[]") || [];
    const employeeDatas = {
        firstName: employee.firstName,
        lastName: employee.lastName,
        dateOfBirth: employee.dateOfBirth,
        startDate: employee.startDate,
        department: employee.department.value,
        street: employee.street,
        city: employee.city,
        state: employee.state.value,
        zipCode: employee.zipCode
    };
    employees.push(employeeDatas);
    localStorage.setItem('employees', JSON.stringify(employees));
}