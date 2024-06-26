import { Button } from "flowbite-react";
import Login from "./pages/auth/login";
import Forgot from "./pages/auth/forgot";
import Scan from "./pages/admin/scan";
import AdminLayout from "./layout/adminLayout";
import Dashboard from "./pages/admin/dashboard";
import { Route, Routes } from "react-router-dom";
import Borrowed from "./pages/admin/borrowed";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/scan" element={<Scan />} />
        <Route path="/borrowed" element={<Borrowed />} />
      </Routes>
    </>
  );
};

export default App;
