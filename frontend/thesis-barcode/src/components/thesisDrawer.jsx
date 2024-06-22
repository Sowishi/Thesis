import { Drawer } from "flowbite-react";
import DateRangePicker from "rsuite/DateRangePicker";
import { FaCalendar, FaClock } from "react-icons/fa";
import { BsCalendar2MonthFill } from "react-icons/bs";

const ThesisDrawer = ({ isOpen, handleClose }) => {
  return (
    <Drawer position="top" open={isOpen} onClose={handleClose}>
      <Drawer.Header title="Drawer" />
      <Drawer.Items></Drawer.Items>
    </Drawer>
  );
};

export default ThesisDrawer;
