import { CircleUser, Menu, Package2, Search } from "lucide-react"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import Link from "next/link"
import Image from "next/image"
import { Badge } from "./ui/badge"

export default function Navbar() {
  const links = [
    {
      name: "Tool",
      href: "#",
    },
    {
      name: "About",
      href: "#",
    },
  ]
  return (
    <header className="sticky top-0 border-b bg-background z-50">
      <div className=" flex gap-4 h-16 items-center px-4 md:px-6 w-full md:max-w-5xl mx-auto">
        <nav className="flex flex-row items-center w-full justify-between">
          <div className="flex flex-row gap-2  items-center mr-4">
            <Image
              src={"/AIPG.png"}
              width={100}
              height={100}
              alt={""}
              className="size-9"
            />
            <span className="whitespace-nowrap text-lg font-bold">
              Powergrid
            </span>
          </div>
          <div className="space-x-2">
            {links.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="text-foreground  font-semibold tracking-wide transition-colors hover:text-foreground"
              >
                <Badge variant="outline" className="text-xs uppercase">
                  {link.name}
                </Badge>
              </Link>
            ))}
          </div>
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="shrink-0 hidden md:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="grid gap-6 text-lg font-medium">
              <Link
                href="#"
                className="flex items-center gap-2 text-lg font-semibold"
              >
                <Image
                  src={"/AIPG.png"}
                  width={100}
                  height={100}
                  alt={""}
                  className="size-9"
                />
                <span className="sr-only">Acme Inc</span>
              </Link>

              {links.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
        {/* <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
          <form className="ml-auto flex-1 sm:flex-initial">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search for anything..."
                className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
              />
            </div>
          </form>
          <UserMenu />
        </div> */}
      </div>
    </header>
  )
}

function UserMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="secondary" size="icon" className="rounded-full">
          <CircleUser className="h-5 w-5" />
          <span className="sr-only">Toggle user menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Settings</DropdownMenuItem>
        <DropdownMenuItem>Support</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Logout</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
