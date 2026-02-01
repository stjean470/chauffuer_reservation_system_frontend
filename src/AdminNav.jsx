import React from 'react'
import { Button, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";

const AdminNav = (props) => {
    const { isDarkMode, setIsDarkMode, isOpen, setIsOpen } = props;
  return (
    <>
        <Navbar fluid rounded className={isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}>
            <NavbarBrand>
                <NavbarToggle className="md:block" onClick={() => setIsOpen(!isOpen)} />
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Admin Portal</span>
            </NavbarBrand>
            <div className='flex md:order-3'>
                <Button onClick={() => setIsDarkMode(!isDarkMode)}>{isDarkMode ? "Dark" : "Light"}</Button>
                <NavbarToggle />
            </div>
            <NavbarCollapse>
                <NavbarLink href="#">
                    Dashboard
                </NavbarLink>
                <NavbarLink href="#">
                    Reservations
                </NavbarLink>
                <NavbarLink href="#">Customers</NavbarLink>
            </NavbarCollapse>
        </Navbar>
    </>
  )
}

export default AdminNav