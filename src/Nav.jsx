import React from 'react'
import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
const Nav = () => {
  return (
    <>
        <Navbar fluid rounded className='bg-black text-white'>
            <NavbarBrand  href="https://flowbite-react.com">
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite React</span>
            </NavbarBrand>
            <NavbarToggle />
            <NavbarCollapse>
                <NavbarLink href="#">
                    Home
                </NavbarLink>
                <NavbarLink href="#">
                    About
                </NavbarLink>
                <NavbarLink href="#">Services</NavbarLink>
                <NavbarLink href="#">Pricing</NavbarLink>
                <NavbarLink href="#">Contact</NavbarLink>
            </NavbarCollapse>
        </Navbar>
    </>
  
  )
}

export default Nav