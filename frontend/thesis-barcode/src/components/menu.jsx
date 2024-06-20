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
                  <Sidebar.Item href="/" icon={HiChartPie}>
                    Dashboard
                  </Sidebar.Item>
                  <Sidebar.Item
                    href="/authentication/sign-up"
                    icon={HiPencilAlt}
                  >
                    Scan
                  </Sidebar.Item>
                  <Sidebar.Item
                    href="/authentication/sign-in"
                    icon={HiOutlineTag}
                  >
                    Burrowed
                  </Sidebar.Item>

                  <Sidebar.Item href="/users/list" icon={HiUsers}>
                    Student list
                  </Sidebar.Item>
                  <Sidebar.Item
                    href="/authentication/sign-in"
                    icon={HiClipboard}
                  >
                    Reports
                  </Sidebar.Item>
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
