import { Button, Navbar } from "flowbite-react";
import { HiOutlineMenu } from "react-icons/hi";

const Header = ({ handleOpen }) => {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand>
        <Button onClick={handleOpen}>
          <HiOutlineMenu className="mr-2 h-5 w-5" />
          Menu
        </Button>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button>Get started</Button>
        <Navbar.Toggle />
      </div>
    </Navbar>
  );
};

export default Header;
