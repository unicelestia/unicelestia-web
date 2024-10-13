"use client"
import Image from "next/image"
import Link from "next/link"
import { MobileNavbar } from "./MobileNavbar"
import { NavbarButtons } from "./NavbarButtons"

const Navbar = () => {
  const menuBar = [
    { label: "Home", href: "#home1" },
    { label: "Products", href: "#products" }
  ]
  return (
    <div
      id="home1"
      className="w-full flex justify-center h-16 items-center z-40 font-semibold "
    >
      <div className="w-full fixed h-16 z-50 px-6 flex items-center justify-between overflow-hidden bg-white shadow-md">
        <Link href="/">
          <Image
            src={"/images/full-logo.png"}
            alt="navbar-logo"
            width={140}
            height={0}
            className="cursor-pointer"
          />
        </Link>

        <div className="text-sm gap-6 items-center hidden md:flex">
          {menuBar.map((link: any, index: any) => {
            return (
              <Link
                key={index}
                href={link.href}
                className="hover:text-primaryOrange"
              >
                {link.label}
              </Link>
            )
          })}
          <NavbarButtons />
        </div>
        <div className="md:hidden z-50">
          <MobileNavbar menuBar={menuBar} />
        </div>
      </div>
    </div>
  )
}

export default Navbar
