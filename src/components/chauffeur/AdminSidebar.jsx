import React from 'react'
import { Drawer, DrawerHeader, DrawerItems } from 'flowbite-react';
import { Sidebar, SidebarItems, SidebarItemGroup, SidebarItem } from 'flowbite-react';
import { TextInput } from 'flowbite-react';
import { HiChartPie, HiShoppingBag, HiUsers, HiLogin, HiPencil, HiClipboard, HiCollection, HiInformationCircle, HiSearch } from 'react-icons/hi';
const AdminSidebar = (props) => {
  const { isOpen, setIsOpen, isDarkMode, setIsDarkMode } = props;
  const handleClose = () => setIsOpen(false);
  return (
    <>
        <Drawer className={isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'} open={isOpen} onClose={handleClose}>
            <DrawerHeader title="MENU" titleIcon={() => <></>} />
            <DrawerItems>
            <Sidebar
                aria-label="Sidebar with multi-level dropdown example"
                className="[&>div]:bg-transparent [&>div]:p-0"
            >
                <div className="flex h-full flex-col justify-between py-2">
                <div>
                    <SidebarItems>
                    <SidebarItemGroup>
                        <SidebarItem href="/" icon={HiChartPie}>
                        Dashboard
                        </SidebarItem>
                        <SidebarItem href="/e-commerce/products" icon={HiShoppingBag}>
                        Reservations
                        </SidebarItem>
                        <SidebarItem href="/users/list" icon={HiUsers}>
                        Users list
                        </SidebarItem>
                        <SidebarItem href="/authentication/sign-in" icon={HiLogin}>
                        Log out
                        </SidebarItem>
                    </SidebarItemGroup>
                    <SidebarItemGroup>
                        <SidebarItem href="https://github.com/themesberg/flowbite-react/" icon={HiClipboard}>
                        Docs
                        </SidebarItem>
                        <SidebarItem href="https://flowbite-react.com/" icon={HiCollection}>
                        Components
                        </SidebarItem>
                        <SidebarItem href="https://github.com/themesberg/flowbite-react/issues" icon={HiInformationCircle}>
                        Help
                        </SidebarItem>
                    </SidebarItemGroup>
                    </SidebarItems>
                </div>
                </div>
            </Sidebar>
            </DrawerItems>
        </Drawer>
    </>
  )
}

export default AdminSidebar