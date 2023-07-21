import CreateEmployeeForm from "../../components/CreateEmployeeForm";
import { Employee } from "../../types/employee.types";
import { createEmployee } from "../../api/employee";
import { Modal } from "react-modalium";
import { useState } from "react";

function CreateEmployee() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [error, setError] = useState(false);
  async function handleSubmit(employee: Employee) {
    setError(false);
    try {
      await createEmployee(employee);
    } catch (error) {
      setError(true);
    }
    setIsModalOpen(true);
  }

  return (
    <div id="testt">
      <h2 className="text-center font-bold text-4xl mb-10">Create Employee</h2>
      <CreateEmployeeForm handleSubmit={handleSubmit} />
      <Modal isOpen={isModalOpen} close={() => setIsModalOpen(false)}>
        {error ? (
          <div className="text-center">
            <p className="text-xl">Something went wrong</p>
          </div>
        ) : (
          <div className="text-center">
            <p className="text-xl">Employee created successfully</p>
          </div>
        )}
      </Modal>
    </div>
  );
}

export default CreateEmployee;
