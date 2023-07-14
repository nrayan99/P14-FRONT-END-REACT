export interface OptionType {
  label: string;
  value: string;
}
type EmployeeBase = {
  firstName: string;
  lastName: string;
  startDate: Date | null;
  dateOfBirth: Date | null;
  street: string;
  city: string;
  zipCode: number;
};
export interface Employee extends EmployeeBase {
  state: OptionType;
  department: OptionType;
}

export interface EmployeeData extends EmployeeBase {
  state: string;
  department: string;
}
