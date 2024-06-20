import { Button, Drawer, Navbar, TextInput } from "flowbite-react";
import { useState } from "react";
import { HiOutlineMenu } from "react-icons/hi";
import Menu from "../../components/menu";

export function Scan() {
  const [openSidebar, setOpenSidebar] = useState(true);

  return (
    <>
      <div className="w-full h-screen bg-slate-950">
        <Menu
          openSidebar={openSidebar}
          handleClose={() => setOpenSidebar(false)}
        />
        <Navbar fluid rounded>
          <Navbar.Brand>
            <Button onClick={() => setOpenSidebar(true)}>
              <HiOutlineMenu className="mr-2 h-5 w-5" />
              Menu
            </Button>
          </Navbar.Brand>
          <div className="flex md:order-2">
            <Button>Get started</Button>
            <Navbar.Toggle />
          </div>
        </Navbar>
      </div>
    </>
  );
}
