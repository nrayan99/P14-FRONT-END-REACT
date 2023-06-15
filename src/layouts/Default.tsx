import Header from "../components/Header";
import { Outlet } from "react-router-dom";

function DefaultLayout() {
  return (
    <>
      <Header />
      <main className="main p-6 sm:p-14">
        <Outlet />
      </main>
    </>
  );
}

export default DefaultLayout;
