import { Link } from "@tanstack/react-router";
import { Github } from "lucide-react";

import { ModeToggle } from "@/components";
import { Button } from "@/components/ui";

export const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between m-4">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        <Link to="/">DevBlog</Link>
      </h1>
      <div className="flex items-center space-x-2">
        <Link to="/" className="inline-flex items-center hover:underline">
          Home
        </Link>
        <Link to="/about" className="inline-flex items-center hover:underline">
          About
        </Link>
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
    </header>
  );
};
