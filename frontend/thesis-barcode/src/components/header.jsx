import { Badge, Button, Navbar } from "flowbite-react";
import { HiOutlineMenu } from "react-icons/hi";

const Header = ({ handleOpen }) => {
  return (
    <Navbar className="bg-slate-800" fluid rounded>
      <Navbar.Brand>
        <Button onClick={handleOpen}>
          <HiOutlineMenu className="mr-2 h-5 w-5" />
          Menu
        </Button>
      </Navbar.Brand>
      <div className="flex md:order-2 justfify-center items-center">
        <div className="wrapper text-white mx-2 flex items-center justify-center">
          Registered Students
          <Badge className="ml-2" size={"md"}>
            5
          </Badge>
        </div>
        <div className="wrapper text-white mx-2 flex items-center justify-center">
          Registered Books
          <Badge color={"blue"} className="ml-2" size={"md"}>
            5
          </Badge>
        </div>
      </div>
    </Navbar>
  );
};

export default Header;
