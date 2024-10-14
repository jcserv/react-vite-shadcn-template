import { Github, GithubIcon } from "lucide-react";
import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";

export const Header: React.FC = () => {
  return (
    <section className="flex items-center justify-between m-4">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        DevBlog
      </h1>
      <div>
        <Button
          variant="ghost"
          className="p-2"
          onClick={() => {
            window.open("https://github.com/jcserv/react-vite-shadcn-template", "_blank");
          }}
        >
          <Github className="w-4 h-4" />
        </Button>
        <ModeToggle />
      </div>
    </section>
  );
};
