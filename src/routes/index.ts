import { lazy, FunctionComponent } from "react";

const Dashboard = lazy(() => import("../pages/dashboard/Dashboard"));
const Projects = lazy(() => import("../pages/dashboard/Projects"));

interface Route {
  path: string;
  exact: boolean;
  name: string;
  sideBarHeading?: string;
  isIncludeInSideBar?: boolean;
  isProtected?: boolean;
  Component: FunctionComponent;
  heading: string;
  icon: string;
  type: "public" | "private"; // Define the type as needed
}

const routes: Route[] = [
  {
    path: "/",
    exact: true,
    name: "LandingPage",
    Component: Dashboard,
    type: "public",
    sideBarHeading: "Dashboard",
    isIncludeInSideBar: false,
    isProtected: true,
    heading: "Dashboard",
    icon: "fa-solid fa-table",
  },
  {
    path: "/projects",
    exact: true,
    name: "LandingPage",
    Component: Projects,
    type: "public",
    sideBarHeading: "Projects",
    isIncludeInSideBar: false,
    isProtected: true,
    heading: "All Projects",
    icon: "fa-solid fa-tasks",
  },
];

export default routes;
