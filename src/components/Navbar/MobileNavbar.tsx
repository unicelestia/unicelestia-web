import { Menu } from "lucide-react"
import Link from "next/link"
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "../ui/sheet"
import { NavbarButtons } from "./NavbarButtons"

export function MobileNavbar({ menuBar }: any) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <div className="w-8 h-8 flex justify-center items-center cursor-pointer bg-primaryBlue text-white p-1 rounded-sm">
          <Menu />
        </div>
      </SheetTrigger>
      <SheetContent className="z-50">
        <div className="w-full">
          <div className="flex flex-col items-center gap-6 pt-6">
            {menuBar.map((link: any, index: any) => {
              return (
                <SheetClose key={index} asChild>
                  <Link href={link.href} className="hover:text-main">
                    {link.label}
                  </Link>
                </SheetClose>
              )
            })}
            <SheetClose asChild>
              <NavbarButtons />
            </SheetClose>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
