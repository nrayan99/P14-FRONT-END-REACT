import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

type EmployeeData = {
  firstName: string,
  lastName: string,
  dateOfBirth: string,
  startDate: string,
  department: string,
  street: string,
  city: string,
  state: string,
  zipCode: number,
}

export interface EmployeesState {
  employees: EmployeeData[];
}

const initialState: EmployeesState = {
  employees: []
};

export const employeesSlice = createSlice({
  name: 'employees',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    addEmployee: (state, action: PayloadAction<EmployeeData>) => {
      state.employees = [...state.employees, action.payload]
    },
  },
});

export const { addEmployee} = employeesSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectEmployees = (state: RootState) => state.employees.employees;

export default employeesSlice.reducer;