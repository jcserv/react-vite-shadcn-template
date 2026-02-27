import { useState } from "react";

import { Link } from "@tanstack/react-router";
import { Github, Menu } from "lucide-react";

import { ModeToggle } from "@/components";
import {
  Button,
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui";

export const Header: React.FC = () => {
  const [open, setOpen] = useState(false);

  const navLinks = (
    <>
      <Link
        to="/"
        className="inline-flex items-center hover:underline text-sm"
        onClick={() => setOpen(false)}
      >
        Home
      </Link>
      <Link
        to="/about"
        className="inline-flex items-center hover:underline text-sm"
        onClick={() => setOpen(false)}
      >
        About
      </Link>
    </>
  );

  return (
    <header className="flex items-center justify-between m-4">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl shrink-0">
        <Link to="/">DevBlog</Link>
      </h1>

      {/* Desktop nav */}
      <div className="hidden md:flex items-center space-x-2">
        {navLinks}
        <Button
          variant="ghost"
          size="icon"
          className="p-2"
          onClick={() => {
            window.open(
              "https://github.com/jcserv/react-vite-shadcn-template",
              "_blank",
            );
          }}
        >
          <Github className="w-4 h-4" />
        </Button>
        <ModeToggle />
      </div>

      {/* Mobile nav */}
      <div className="flex md:hidden items-center gap-2">
        <ModeToggle />
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-64">
            <SheetHeader>
              <SheetTitle>DevBlog</SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-4 mt-6">
              {navLinks}
              <Button
                variant="ghost"
                size="sm"
                className="justify-start gap-2 p-0"
                onClick={() => {
                  setOpen(false);
                  window.open(
                    "https://github.com/jcserv/react-vite-shadcn-template",
                    "_blank",
                  );
                }}
              >
                <Github className="w-4 h-4" />
                GitHub
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};
