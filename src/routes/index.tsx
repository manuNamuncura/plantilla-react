import {
  createRootRoute,
  createRoute,
  createRouter,
  Outlet,
} from "@tanstack/react-router";
import { AppLayout } from "../components/layout/AppLayout";
import App from "../App";

const Dashboard = () => <div>Dashboard</div>;
const Obras = () => <div>Obras</div>;
const Partes = () => <div>Partes diarios</div>;

const rootRoute = createRootRoute({
  component: () => (
    <App>
      <AppLayout>
        <Outlet />
      </AppLayout>
    </App>
  ),
});

const dashboardRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Dashboard,
});

const obrasRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/obras",
  component: Obras,
});

const partesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/partes",
  component: Partes,
});

const routeTree = rootRoute.addChildren([
  dashboardRoute,
  obrasRoute,
  partesRoute,
]);

export const router = createRouter({ routeTree });
