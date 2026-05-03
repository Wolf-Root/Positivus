"use client";

import { Menu } from "lucide-react";

import { Accordion } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface MenuItem {
  title: string;
  url: string;
  description?: string;
  icon?: React.ReactNode;
  items?: MenuItem[];
}

interface NavbarProps {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
    className?: string;
  };
  menu?: MenuItem[];
  btn?: {
    title: string;
    url: string;
  };
}

export const Navbar = ({
  logo = {
    url: "#",
    src: "/favicon.ico",
    alt: "Positivus logo",
    title: "Positivus",
  },
  menu = [
    { title: "About us", url: "#About" },
    { title: "Services", url: "#Services" },
    { title: "Use Cases", url: "#UseCases" },
    { title: "Pricing", url: "#Pricing" },
    { title: "Blog", url: "#Blog" },
  ],
  btn = {
    title: "Request a quote",
    url: "#",
  },
}: NavbarProps) => {
  return (
    <header className={cn("bg-background border-b border-border/20 fixed w-full left-0 right-0")}>
      {/* container */}
      <div className="container mx-auto p-2.5">
        {/* Desktop Menu */}
        <nav className="hidden items-center justify-between md:flex">
          <div className="w-full flex items-center justify-between gap-6">
            {/* Logo */}
            <a href={logo.url} className="flex items-center gap-3">
              <Image src={logo.src} width={22} height={22} alt={logo.alt} />
              <span className="text-2xl font-semibold tracking-tighter">{logo.title}</span>
            </a>

            <div className="flex items-center gap-5">
              <NavigationMenu>
                <NavigationMenuList>{menu.map((item) => renderMenuItem(item))}</NavigationMenuList>
              </NavigationMenu>

              <Button asChild variant="outline">
                <a href={btn.url}>{btn.title}</a>
              </Button>
            </div>
          </div>
        </nav>
        {/* Mobile Menu */}
        <div className="block md:hidden">
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <a href={logo.url} className="flex items-center gap-3">
              <Image src={logo.src} width={22} height={22} alt={logo.alt} />
              <span className="hidden sm:block text-2xl font-semibold tracking-tighter">{logo.title}</span>
            </a>

            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="size-4" />
                </Button>
              </SheetTrigger>

              <SheetContent className="overflow-y-auto">
                <SheetHeader>
                  <SheetTitle>
                    <a href={logo.url} className="flex items-center gap-3">
                      <Image src={logo.src} width={22} height={22} alt={logo.alt} />
                      <span className="text-xl sm:text-2xl font-semibold tracking-tighter">{logo.title}</span>
                    </a>
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-6 p-4">
                  <Accordion type="single" collapsible className="flex w-full flex-col gap-4">
                    {menu.map((item) => renderMobileMenuItem(item))}
                  </Accordion>

                  <div className="flex flex-col gap-3">
                    <Button asChild variant="outline">
                      <a href={btn.url}>{btn.title}</a>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </nav>
        </div>
      </div>
    </header>
  );
};

const renderMenuItem = (item: MenuItem) => {
  return (
    <NavigationMenuItem key={item.title}>
      <NavigationMenuLink href={item.url}>{item.title}</NavigationMenuLink>
    </NavigationMenuItem>
  );
};

const renderMobileMenuItem = (item: MenuItem) => {
  return (
    <a key={item.title} href={item.url} className="text-md font-semibold">
      {item.title}
    </a>
  );
};
