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
              className="bg-secondary/40 font-bold p-3"
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
                className="bg-secondary/40 font-bold p-3"
              />
            </div>
          ))}
        </fieldset>

        <label htmlFor="department">Department</label>
        <select name="department" id="department">
          <option>Sales</option>
          <option>Marketing</option>
          <option>Engineering</option>
          <option>Human Resources</option>
          <option>Legal</option>
        </select>
      </form>
    </div>
  );
}

export default CreateEmployee;
