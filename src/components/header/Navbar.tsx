import React, { memo } from "react";
import CrossButton from "./CrossButton";

type Props = {
  triggerSideBar?: () => void;
};

const Navbar = ({ triggerSideBar }: Props) => {
  return (
    <div className="navbar_wrapper">
      <CrossButton closeSideBar={() => triggerSideBar?.()} />
      <div className="right_part">
        {/* <CreateLessonBtn redirectPath="/lesson" label="Create new lesson" /> */}
        user avtar
      </div>
    </div>
  );
};

export default memo(Navbar);
