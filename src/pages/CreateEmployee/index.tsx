import Select from "react-select";

function CreateEmployee() {
  const inputs = [
    {
      label: "First Name",
      id: "first-name",
      type: "text",
    },
    {
      label: "Last Name",
      id: "last-name",
      type: "text",
    },
    {
      label: "Date of Birth",
      id: "date-of-birth",
      type: "text",
    },
    {
      label: "Start Date",
      id: "start-date",
      type: "text",
    },
  ];
  const addressInputs = [
    {
      label: "Street",
      id: "street",
      type: "text",
    },
    {
      label: "City",
      id: "city",
      type: "text",
    },
    {
      label: "State",
      id: "state",
      type: "text",
    },
    {
      label: "Zip Code",
      id: "zip-code",
      type: "text",
    },
  ];

  const options = [
    { value: "Sales", label: "Sales" },
    { value: "Marketing", label: "Marketing" },
    { value: "Engineering", label: "Engineering" },
    { value: "Human Resources", label: "Human Resources" },
    { value: "Legal", label: "Legal" },
  ];
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
      color : "#000000",
    }),
    singleValue: (provided: any) => ({
      ...provided,
      fontWeight: "bold",
      fontSize: "1.25rem",
      color : "#000000",
    }),
    placeholder: (provided: any) => ({
      ...provided,
      fontWeight: "bold",
      fontSize: "1.25rem",
      color : "#000000",
    }),
  };
  return (
    <div>
      <h2 className="text-center font-bold text-4xl mb-10">Create Employee</h2>
      <form className="flex flex-col w-2/4 mx-auto gap-y-4">
        {inputs.map((input) => (
          <div key={input.label} className="flex flex-col gap-y-4">
            <label htmlFor={input.id} className="font-bold text-xl">
              {input.label}
            </label>
            <input
              id={input.id}
              type={input.type}
              className="border font-bold p-3 rounded-md"
            />
          </div>
        ))}
        <fieldset className="flex flex-col gap-y-4 border-secondary p-5 border-4">
          <legend className="font-bold text-3xl">Address</legend>
          {addressInputs.map((input) => (
            <div key={input.label} className="flex flex-col gap-y-4">
              <label htmlFor={input.id} className="font-bold text-xl">
                {input.label}
              </label>
              <input
                id={input.id}
                type={input.type}
                className="border font-bold p-3 rounded-md"
              />
            </div>
          ))}
        </fieldset>
        <Select
          styles={selectStyle}
          options={options}
          placeholder="Department"
        />
        <button className="bg-primary text-secondary font-bold p-3 text-xl rounded-lg border-secondary border hover:bg-primary/40 transition-colors duration-150">
          Save
        </button>
      </form>
    </div>
  );
}

export default CreateEmployee;
