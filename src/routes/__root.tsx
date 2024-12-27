import { Footer, Header } from "@/components";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
  component: () => (
    <>
      <Header />
      <hr />
      <Outlet />
      <Footer />
      <TanStackRouterDevtools />
    </>
  ),
});
