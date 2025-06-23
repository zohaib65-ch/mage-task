import { FC, FunctionComponent } from "react";

export interface RoutesModel {
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

export interface RenderRoutesModel {
  path: string;
  element: JSX.Element;
}
