import CreateEmployee from "../pages/CreateEmployee";
import EmployeeList from "../pages/EmployeeList";
import DefaultLayout from "../layouts/Default";
import Home from "../pages/Home";

const routes = [
  {
    element: <DefaultLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/list",
        element: <EmployeeList />,
      },
      {
        path: "/create",
        element: <CreateEmployee />,
      },
    ],
  },
];

export default routes;
