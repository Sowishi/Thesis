import { Button, Drawer, Navbar, TextInput } from "flowbite-react";
import { useState } from "react";
import { HiOutlineMenu } from "react-icons/hi";
import Menu from "../../components/menu";
import Header from "../../components/header";

export function Scan() {
  const [openSidebar, setOpenSidebar] = useState(true);

  return (
    <>
      <div className="w-full h-screen bg-slate-950">
        <Menu
          openSidebar={openSidebar}
          handleClose={() => setOpenSidebar(false)}
        />
        <Header handleOpen={() => setOpenSidebar(true)} />
      </div>
    </>
  );
}
