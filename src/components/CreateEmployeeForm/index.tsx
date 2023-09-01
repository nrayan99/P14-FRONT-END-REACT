import Select from "react-select";
import DatePicker from "react-datepicker";
import states from "../../utils/states";
import "react-datepicker/dist/react-datepicker.css";
import { FormEvent, useState } from "react";
import { Employee } from "../../types/employee.types";

interface OptionType {
  label: string;
  value: string;
}

function CreateEmployeeForm({
  handleSubmit,
}: {
  handleSubmit: (employee: Employee) => void;
}) {
  const options = [
    { value: "Sales", label: "Sales" },
    { value: "Marketing", label: "Marketing" },
    { value: "Engineering", label: "Engineering" },
    { value: "Human Resources", label: "Human Resources" },
    { value: "Legal", label: "Legal" },
  ];

  const [employee, setEmployee] = useState({
    firstName: "",
    lastName: "",
    startDate: null,
    dateOfBirth: null,
    street: "",
    city: "",
    state: states[0],
    zipCode: 0,
    department: options[0],
  } as Employee);

  const inputs = [
    {
      label: "First Name",
      id: "first-name",
      type: "text",
      state: employee.firstName,
      setState: (firstName: string) => updateEmployee("firstName", firstName),
    },
    {
      label: "Last Name",
      id: "last-name",
      type: "text",
      state: employee.lastName,
      setState: (lastName: string) => updateEmployee("lastName", lastName),
    },
  ];
  function updateEmployee(
    key: string,
    value: string | number | Date | null | OptionType
  ): void {
    setEmployee({ ...employee, [key]: value });
  }
  const datePickerInputs = [
    {
      label: "Start Date",
      state: employee.startDate,
      setState: (date: Date | null) => updateEmployee("startDate", date),
    },
    {
      label: "Date of Birth",
      state: employee.dateOfBirth,
      setState: (date: Date | null) => updateEmployee("dateOfBirth", date),
    },
  ];

  const addressInputs = [
    {
      label: "Street",
      id: "street",
      type: "text",
      state: employee.street,
      setState: (street: string) => updateEmployee("street", street),
    },
    {
      label: "City",
      id: "city",
      type: "text",
      state: employee.city,
      setState: (city: string) => updateEmployee("city", city),
    },
    {
      label: "State",
      id: "state",
      type: "select",
      options: states,
      state: employee.state,
      setState: (state: OptionType) => updateEmployee("state", state),
    },
    {
      label: "Zip Code",
      id: "zip-code",
      type: "text",
      state: employee.zipCode,
      setState: (zipCode: number) => updateEmployee("zipCode", zipCode),
    },
  ] as Array<{
    label: string;
    id: string;
    type: string;
    options?: Array<OptionType>;
    state: string | number | null | OptionType;
    setState: (value: string | number | OptionType) => void;
  }>;

  function handleSubmitForm(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    handleSubmit(employee);
  }

  const selectStyle = {
    control: (provided: any) => ({
      ...provided,
      cursor: "pointer",
      fontWeight: "bold",
      fontSize: "1.25rem",
      height: "3rem",
      boxShadow: "none",
      border: "1px solid #000000",
      color: "#000000",
    }),
    option: (provided: any) => ({
      ...provided,
      cursor: "pointer",
      fontWeight: "bold",
      fontSize: "1.25rem",
      color: "#000000",
    }),
    singleValue: (provided: any) => ({
      ...provided,
      fontWeight: "bold",
      fontSize: "1.25rem",
      color: "#000000",
    }),
    placeholder: (provided: any) => ({
      ...provided,
      fontWeight: "bold",
      fontSize: "1.25rem",
      color: "#000000",
    }),
  };
  return (
    <form
      className="flex flex-col w-full sm:w-2/4 mx-auto gap-y-4"
      onSubmit={(e) => handleSubmitForm(e)}
    >
      {inputs.map((input) => (
        <div key={input.label} className="flex flex-col gap-y-4">
          <label htmlFor={input.id} className="font-bold text-xl">
            {input.label}
          </label>
          <input
            id={input.id}
            type={input.type}
            className="border font-bold p-3 rounded-md h-12"
            value={input.state || ""}
            onChange={(e) => input.setState(e.target.value)}
            autoComplete="true"
            required
          />
        </div>
      ))}
      <div>
        {datePickerInputs.map((input) => (
          <div key={input.label} className="flex flex-col gap-y-4 w-full mb-4">
            <label htmlFor={input.label} className="font-bold text-xl">
              {input.label}
            </label>
            <DatePicker
              id={input.label}
              selected={input.state as Date}
              onChange={(date: Date | null) => input.setState(date)}
              className="border font-bold p-3 rounded-md w-full"
              dateFormat="MMMM d, yyyy"
              required
            />
          </div>
        ))}
      </div>
      <fieldset className="flex flex-col gap-y-4 border-secondary p-2 sm:p-5 border-4">
        <legend className="font-bold text-3xl">Address</legend>
        {addressInputs.map((input) => (
          <div key={input.label} className="flex flex-col gap-y-4">
            <label htmlFor={input.id} className="font-bold text-xl">
              {input.label}
            </label>
            {input.type === "select" ? (
              <Select
                inputId={input.id}
                styles={selectStyle}
                options={input.options}
                value={input.state}
                menuPlacement="auto"
                onChange={(option) => input.setState(option as OptionType)}
                required
              />
            ) : (
              <input
                id={input.id}
                type={input.type}
                className="border font-bold p-3 rounded-md h-12"
                value={(input.state as string | number | null) || ""}
                onChange={(e) => input.setState(e.target.value)}
                required
              />
            )}
          </div>
        ))}
      </fieldset>
      <label htmlFor="department" className="font-bold text-xl">
        Department
      </label>
      <Select
        inputId="department"
        styles={selectStyle}
        options={options}
        value={employee.department}
        menuPlacement="auto"
        onChange={(option) => updateEmployee("department", option)}
        required
      />
      <button className="bg-primary text-secondary font-bold p-3 text-xl rounded-lg border-secondary border hover:bg-primary/40 transition-colors duration-150">
        Save
      </button>
    </form>
  );
}
export default CreateEmployeeForm;
