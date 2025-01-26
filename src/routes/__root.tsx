import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

import { Footer, Header } from "@/components";

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
