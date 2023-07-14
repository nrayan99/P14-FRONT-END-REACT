import MUIDataTable, { SelectableRows } from "mui-datatables";
import { useEffect, useState } from "react";
import { getEmployees } from "../../api/employee";
import { EmployeeData } from "../../types/employee.types";
function EmployeeList() {
  const [data, setData] = useState([] as EmployeeData[]);
  useEffect(() => {
    getEmployees().then((res: EmployeeData[]) => {
      setData(res);
    });
  }, []);
  const columns = [
    {
      name: "firstName",
      label: "First Name",
    },
    {
      name: "lastName",
      label: "Last Name",
    },
    {
      name: "startDate",
      label: "Start Date",
    },
    {
      name: "department",
      label: "Department",
    },
    {
      name: "dateOfBirth",
      label: "Date of Birth",
    },
    {
      name: "street",
      label: "Street",
    },
    {
      name: "city",
      label: "City",
    },
    {
      name: "state",
      label: "State",
    },
    {
      name: "zipCode",
      label: "Zip Code",
    },
  ];
  const options = {
    selectableRows: "none" as SelectableRows,
  };
  return (
    <div>
      <h2 className="text-center font-bold text-4xl mb-10">
        Current Employees
      </h2>
      <MUIDataTable title="" data={data} columns={columns} options={options} />
    </div>
  );
}

export default EmployeeList;
