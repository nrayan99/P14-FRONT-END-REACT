import CreateEmployeeForm from "../../components/CreateEmployeeForm";
import { Employee } from "../../types/employee.types";
import { createEmployee } from "../../api/employee";

function CreateEmployee() {

  function handleSubmit(employee: Employee) {
    createEmployee(employee);
  }

  return (
    <div>
      <h2 className="text-center font-bold text-4xl mb-10">Create Employee</h2>
      <CreateEmployeeForm handleSubmit={handleSubmit}/>
    </div>
  );
}

export default CreateEmployee;
