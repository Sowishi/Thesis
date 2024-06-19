import { Button, Drawer, Sidebar, TextInput } from "flowbite-react";
import { useState } from "react";
import {
  HiChartPie,
  HiClipboard,
  HiCollection,
  HiInformationCircle,
  HiSearch,
  HiOutlineTag,
  HiUsers,
  HiPencilAlt,
  HiLogout,
} from "react-icons/hi";

export function Scan() {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => setIsOpen(false);

  return (
    <>
      <div className="flex min-h-[50vh] items-center justify-center">
        <Button onClick={() => setIsOpen(true)}>Show navigation</Button>
      </div>
      <Drawer open={isOpen} onClose={handleClose}>
        <Drawer.Header title="ADMIN TOOLS" titleIcon={() => <></>} />
        <Drawer.Items>
          <Sidebar
            aria-label="Sidebar with multi-level dropdown example"
            className="[&>div]:bg-transparent [&>div]:p-0"
          >
            <div className="flex h-full flex-col justify-between py-2">
              <div>
                <form className="pb-3 md:hidden">
                  <TextInput
                    icon={HiSearch}
                    type="search"
                    placeholder="Search"
                    required
                    size={32}
                  />
                </form>
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
    </>
  );
}
