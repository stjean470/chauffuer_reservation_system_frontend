import React from 'react'
import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";

const AdminNav = () => {
  return (
    <>
        <Navbar fluid rounded>
            <NavbarBrand  href="https://flowbite-react.com">
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Admin Portal</span>
            </NavbarBrand>
            <NavbarToggle />
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