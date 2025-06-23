import React from "react";
import Sidebar from "../components/header/Sidebar";
import Spacer from "../components/common/Spacer";
import Header from "../components/header/Header";

type Props = {
  children: React.ReactNode;
  heading: string;
  isHeadingShow?: boolean;
};

const Layout = ({ children, heading, isHeadingShow = true }: Props) => {
  return (
    <Sidebar>
      {isHeadingShow && <Header heading={heading} />}
      <Spacer />
      {children}
      <Spacer verticalGap={50} />
    </Sidebar>
  );
};

export default Layout;
