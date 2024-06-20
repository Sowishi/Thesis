import { Button, Drawer, Navbar, TextInput } from "flowbite-react";
import { useEffect, useState } from "react";
import { HiOutlineMenu } from "react-icons/hi";
import Menu from "../components/menu";
import Header from "../components/header";

function AdminLayout({ children }) {
  const [openSidebar, setOpenSidebar] = useState(false);

  useEffect(() => {
    return () => {
      setOpenSidebar(false);
    };
  }, []);

  return (
    <>
      <div className="w-full h-screen bg-slate-950">
        <Menu
          openSidebar={openSidebar}
          handleClose={() => setOpenSidebar(false)}
        />
        <Header handleOpen={() => setOpenSidebar(true)} />
        <div className="container bg-red-500 mx-auto">{children}</div>
      </div>
    </>
  );
}

export default AdminLayout;
