export interface OptionType {
    label: string;
    value: string;
  }
export type Employee = {
  firstName: string;
  lastName: string;
  startDate: Date | null;
  dateOfBirth: Date | null;
  street: string;
  city: string;
  state: OptionType;
  zipCode: number;
  department: OptionType;
};
