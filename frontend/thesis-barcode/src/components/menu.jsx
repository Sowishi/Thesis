import { Drawer, Sidebar } from "flowbite-react";
import {
  HiChartPie,
  HiPencilAlt,
  HiOutlineTag,
  HiUsers,
  HiClipboard,
  HiCollection,
  HiInformationCircle,
  HiLogout,
} from "react-icons/hi";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Menu = ({ openSidebar, handleClose }) => {
  return (
    <Drawer open={openSidebar} onClose={handleClose}>
      <Drawer.Header title="ADMIN TOOLS" titleIcon={() => <></>} />
      <Drawer.Items>
        <Sidebar
          aria-label="Sidebar with multi-level dropdown example"
          className="[&>div]:bg-transparent [&>div]:p-0"
        >
          <div className="flex h-full flex-col justify-between py-2">
            <div>
              <Sidebar.Items>
                <Sidebar.ItemGroup>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Link to={"/dashboard"}>
                      <Sidebar.Item icon={HiChartPie}>Dashboard</Sidebar.Item>
                    </Link>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Link to={"/scan"}>
                      <Sidebar.Item icon={HiPencilAlt}>Scan</Sidebar.Item>
                    </Link>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Sidebar.Item href="/borrowed" icon={HiOutlineTag}>
                      Borrowed
                    </Sidebar.Item>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Sidebar.Item href="/users/list" icon={HiUsers}>
                      Student list
                    </Sidebar.Item>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Sidebar.Item
                      href="/authentication/sign-in"
                      icon={HiClipboard}
                    >
                      Reports
                    </Sidebar.Item>
                  </motion.div>
                </Sidebar.ItemGroup>
                <Sidebar.ItemGroup>
                  <Sidebar.Item href="https://github.com/themesberg/flowbite-react/">
                    Docs
                  </Sidebar.Item>
                  <Sidebar.Item
                    href="https://flowbite-react.com/"
                    icon={HiCollection}
                  >
                    Documentation
                  </Sidebar.Item>
                  <Sidebar.Item
                    href="https://github.com/themesberg/flowbite-react/issues"
                    icon={HiInformationCircle}
                  >
                    Report Bugs/Error
                  </Sidebar.Item>
                  <Sidebar.Item
                    href="https://github.com/themesberg/flowbite-react/issues"
                    icon={HiLogout}
                  >
                    Log out
                  </Sidebar.Item>
                </Sidebar.ItemGroup>
              </Sidebar.Items>
            </div>
          </div>
        </Sidebar>
      </Drawer.Items>
    </Drawer>
  );
};

export default Menu;
