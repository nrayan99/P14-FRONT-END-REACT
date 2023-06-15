import MUIDataTable, { SelectableRows } from "mui-datatables";
import { useMemo } from "react";
import { getEmployees } from "../../api/employee";
function EmployeeList() {
  const camelCaseToTitleCase = (camelCase: string) => {
    const result = camelCase.replace(/([A-Z])/g, " $1");
    const finalResult = result.charAt(0).toUpperCase() + result.slice(1);
    return finalResult;
  };
  const data = useMemo(() => getEmployees(), []);
  const columns = useMemo(
    () =>
      Object.keys(data[0]).map((x: string) => {
        return {
          name: x,
          label: camelCaseToTitleCase(x),
          options: {
            filter: true,
            sort: true,
          },
        };
      }),
    [data]
  );
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
